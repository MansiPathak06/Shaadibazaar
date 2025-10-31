'use client'

import React, { useState, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

// Enhanced Realistic Fabric Curtain with velvet material
function RealisticCurtain({ side, isOpen, color, pattern }) {
  const curtainRef = useRef()
  const targetPosition = useRef({ x: 0, y: 0 })
  
  // Create high-resolution fabric geometry for realistic draping
  const geometry = useMemo(() => {
    const segments = 50 // Higher segments for smoother fabric
    const geo = new THREE.PlaneGeometry(10, 22, segments, segments * 2.2)
    
    // Create natural fabric draping with multiple wave patterns
    const positions = geo.attributes.position.array
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      const y = positions[i + 1]
      
      // Multiple wave layers for realistic fabric folds
      const mainWave = Math.sin(y * 0.4) * 0.4
      const detailWave = Math.sin(x * 1.5 + y * 0.5) * 0.15
      const microFolds = Math.sin(x * 3 + y * 0.8) * 0.08
      
      // Gravity effect - more draping at the bottom
      const gravityFactor = (y + 11) / 22 // 0 to 1 from bottom to top
      const sagging = (1 - gravityFactor * gravityFactor) * 0.3
      
      positions[i + 2] = (mainWave + detailWave + microFolds) * gravityFactor + sagging
    }
    
    geo.attributes.position.needsUpdate = true
    geo.computeVertexNormals()
    return geo
  }, [])
  
  // Create realistic velvet fabric texture with PBR properties
  const { normalMap, roughnessMap } = useMemo(() => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = 1024
    canvas.height = 2048
    
    // Base velvet color gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 2048)
    if (pattern === 'products') {
      gradient.addColorStop(0, '#8b0000')
      gradient.addColorStop(0.3, '#b91c1c')
      gradient.addColorStop(0.7, '#991b1b')
      gradient.addColorStop(1, '#7f1d1d')
    } else {
      gradient.addColorStop(0, '#78350f')
      gradient.addColorStop(0.3, '#92400e')
      gradient.addColorStop(0.7, '#a16207')
      gradient.addColorStop(1, '#854d0e')
    }
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 1024, 2048)
    
    // Add velvet pile texture (fine vertical lines)
    ctx.globalAlpha = 0.15
    for (let i = 0; i < 1024; i += 2) {
      ctx.strokeStyle = i % 4 === 0 ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, 2048)
      ctx.stroke()
    }
    
    // Add subtle fabric weave pattern
    ctx.globalAlpha = 0.1
    for (let i = 0; i < 2048; i += 6) {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.lineTo(1024, i)
      ctx.stroke()
    }
    
    // Add embroidered decorative pattern
    ctx.globalAlpha = 0.5
    ctx.strokeStyle = '#fbbf24'
    ctx.lineWidth = 4
    
    if (pattern === 'products') {
      // Floral embroidery for products
      for (let y = 200; y < 1800; y += 300) {
        for (let x = 200; x < 900; x += 250) {
          // Flower petals
          for (let i = 0; i < 8; i++) {
            const angle = (i * Math.PI * 2) / 8
            const px = x + Math.cos(angle) * 40
            const py = y + Math.sin(angle) * 40
            ctx.beginPath()
            ctx.ellipse(px, py, 20, 30, angle, 0, Math.PI * 2)
            ctx.stroke()
          }
          // Center
          ctx.beginPath()
          ctx.arc(x, y, 15, 0, Math.PI * 2)
          ctx.fillStyle = '#fbbf24'
          ctx.fill()
          ctx.stroke()
        }
      }
    } else {
      // Geometric embroidery for services
      for (let y = 200; y < 1800; y += 280) {
        for (let x = 200; x < 900; x += 240) {
          // Diamond shape
          ctx.beginPath()
          ctx.moveTo(x, y - 40)
          ctx.lineTo(x + 40, y)
          ctx.lineTo(x, y + 40)
          ctx.lineTo(x - 40, y)
          ctx.closePath()
          ctx.stroke()
          
          // Inner circle
          ctx.beginPath()
          ctx.arc(x, y, 25, 0, Math.PI * 2)
          ctx.stroke()
        }
      }
    }
    
    // Add decorative symbols
    ctx.font = 'bold 100px serif'
    ctx.fillStyle = 'rgba(251, 191, 36, 0.3)'
    ctx.globalAlpha = 0.4
    if (pattern === 'products') {
      ctx.fillText('💍', 750, 400)
      ctx.fillText('👗', 750, 1000)
      ctx.fillText('💐', 750, 1600)
    } else {
      ctx.fillText('📸', 750, 400)
      ctx.fillText('🎵', 750, 1000)
      ctx.fillText('🎨', 750, 1600)
    }
    
    const baseTexture = new THREE.CanvasTexture(canvas)
    baseTexture.wrapS = baseTexture.wrapT = THREE.RepeatWrapping
    
    // Create normal map for depth
    const normalCanvas = document.createElement('canvas')
    const normalCtx = normalCanvas.getContext('2d')
    normalCanvas.width = 512
    normalCanvas.height = 1024
    
    normalCtx.fillStyle = '#8080ff' // Neutral normal
    normalCtx.fillRect(0, 0, 512, 1024)
    
    // Add bump for fabric texture
    for (let i = 0; i < 512; i += 3) {
      for (let j = 0; j < 1024; j += 3) {
        const noise = Math.random() * 20 - 10
        normalCtx.fillStyle = `rgb(${128 + noise}, ${128 + noise}, ${200 + noise})`
        normalCtx.fillRect(i, j, 3, 3)
      }
    }
    
    const normalMapTexture = new THREE.CanvasTexture(normalCanvas)
    
    // Create roughness map for velvet feel
    const roughnessCanvas = document.createElement('canvas')
    const roughnessCtx = roughnessCanvas.getContext('2d')
    roughnessCanvas.width = 512
    roughnessCanvas.height = 1024
    
    roughnessCtx.fillStyle = '#999999' // Medium roughness
    roughnessCtx.fillRect(0, 0, 512, 1024)
    
    const roughnessMapTexture = new THREE.CanvasTexture(roughnessCanvas)
    
    return { 
      baseMap: baseTexture,
      normalMap: normalMapTexture, 
      roughnessMap: roughnessMapTexture 
    }
  }, [pattern])
  
  // Animate curtain opening
  React.useEffect(() => {
    if (isOpen) {
      targetPosition.current = { 
        x: side === 'left' ? -13 : 13, 
        y: 0 
      }
    } else {
      targetPosition.current = { x: 0, y: 0 }
    }
  }, [isOpen, side])
  
  useFrame(({ clock }) => {
    if (curtainRef.current) {
      // Smooth position transition
      curtainRef.current.position.x += (targetPosition.current.x - curtainRef.current.position.x) * 0.04
      
      // Animate fabric vertices for realistic cloth movement
      const positions = curtainRef.current.geometry.attributes.position.array
      const time = clock.elapsedTime
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]
        
        // Calculate movement intensity based on curtain motion
        const moveSpeed = Math.abs(curtainRef.current.position.x - targetPosition.current.x)
        const waveIntensity = Math.min(moveSpeed * 0.8, 1)
        
        // Multiple wave layers for realistic fabric motion
        const gravityFactor = (y + 11) / 22
        const mainWave = Math.sin(y * 0.4) * 0.4
        const detailWave = Math.sin(x * 1.5 + y * 0.5) * 0.15
        const microFolds = Math.sin(x * 3 + y * 0.8) * 0.08
        
        // Time-based animation
        const timeWave = Math.sin(time * 1.5 + x * 0.8 + y * 0.4) * waveIntensity * 0.15
        const breathingMotion = Math.sin(time * 0.5 + y * 0.2) * 0.05
        
        // Gravity sagging
        const sagging = (1 - gravityFactor * gravityFactor) * 0.3
        
        positions[i + 2] = (mainWave + detailWave + microFolds + timeWave + breathingMotion) * gravityFactor + sagging
      }
      
      curtainRef.current.geometry.attributes.position.needsUpdate = true
      curtainRef.current.geometry.computeVertexNormals()
    }
  })
  
  const position = side === 'left' ? [-5, 0, 0] : [5, 0, 0]
  
  return (
    <group position={position}>
      <mesh ref={curtainRef} geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          color={pattern === 'products' ? '#991b1b' : '#92400e'}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          roughness={0.85}
          metalness={0.05}
          side={THREE.DoubleSide}
          normalScale={new THREE.Vector2(0.5, 0.5)}
          envMapIntensity={0.6}
        />
      </mesh>
      
      {/* Decorative curtain rod with ornate finials */}
      <mesh position={[0, 11.5, 0.5]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 12, 16]} />
        <meshStandardMaterial 
          color="#b45309" 
          metalness={0.9} 
          roughness={0.2}
          emissive="#92400e"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Curtain rings with metallic finish */}
      {[...Array(10)].map((_, i) => {
        const xPos = -5 + (i * 10) / 9
        return (
          <mesh key={i} position={[xPos, 11.3, 0.5]} castShadow>
            <torusGeometry args={[0.25, 0.1, 8, 16]} />
            <meshStandardMaterial 
              color="#fbbf24" 
              metalness={0.95} 
              roughness={0.15}
              emissive="#ca8a04"
              emissiveIntensity={0.2}
            />
          </mesh>
        )
      })}
      
      {/* Decorative tassel with rope detail */}
      <group position={[side === 'left' ? 4.5 : -4.5, 2, 0.5]}>
        {/* Rope */}
        <mesh position={[0, 2, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 4, 8]} />
          <meshStandardMaterial color="#ca8a04" roughness={0.7} />
        </mesh>
        {/* Tassel head */}
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="#fbbf24" metalness={0.3} roughness={0.6} />
        </mesh>
        {/* Tassel fringe */}
        <mesh>
          <coneGeometry args={[0.4, 2.5, 16]} />
          <meshStandardMaterial color="#eab308" roughness={0.8} />
        </mesh>
      </group>
      
      {/* Curtain tie-back holder */}
      <mesh position={[side === 'left' ? 4 : -4, 2, -0.2]}>
        <torusGeometry args={[0.4, 0.15, 8, 16]} />
        <meshStandardMaterial 
          color="#b45309" 
          metalness={0.9} 
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}

// Enhanced Stage Frame with ornate details
function OrnateStageFrame() {
  return (
    <group>
      {/* Left pillar with carved details */}
      <mesh position={[-11.5, 0, 0]} castShadow>
        <boxGeometry args={[2, 24, 2]} />
        <meshStandardMaterial 
          color="#78350f" 
          metalness={0.2} 
          roughness={0.7}
          emissive="#451a03"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Right pillar */}
      <mesh position={[11.5, 0, 0]} castShadow>
        <boxGeometry args={[2, 24, 2]} />
        <meshStandardMaterial 
          color="#78350f" 
          metalness={0.2} 
          roughness={0.7}
          emissive="#451a03"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Top arch beam */}
      <mesh position={[0, 12, 0]} castShadow>
        <boxGeometry args={[25, 2, 2]} />
        <meshStandardMaterial 
          color="#78350f" 
          metalness={0.2} 
          roughness={0.7}
          emissive="#451a03"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Ornate crown molding */}
      <mesh position={[0, 13.5, 0]} castShadow>
        <cylinderGeometry args={[5, 4, 2.5, 32, 1, false, 0, Math.PI]} />
        <meshStandardMaterial 
          color="#fbbf24" 
          metalness={0.85} 
          roughness={0.15}
          emissive="#ca8a04"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Decorative corner spheres */}
      {[[-11.5, 12], [11.5, 12]].map(([x, y], i) => (
        <mesh key={i} position={[x, y, 1]} castShadow>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial 
            color="#fbbf24" 
            metalness={0.9} 
            roughness={0.1}
            emissive="#eab308"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
      
      {/* Stage floor with wood texture */}
      <mesh position={[0, -12, -3]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[35, 20]} />
        <meshStandardMaterial 
          color="#451a03" 
          roughness={0.9}
          metalness={0}
        />
      </mesh>
      
      {/* Floor border */}
      <mesh position={[0, -11.9, -2.8]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[15, 17, 64]} />
        <meshStandardMaterial 
          color="#92400e" 
          roughness={0.6}
          metalness={0.4}
        />
      </mesh>
    </group>
  )
}

// Enhanced theatrical spotlights
function TheatricalLighting() {
  return (
    <>
      <spotLight
        position={[-10, 16, 10]}
        angle={0.5}
        penumbra={0.6}
        intensity={3}
        color="#ff4444"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <spotLight
        position={[10, 16, 10]}
        angle={0.5}
        penumbra={0.6}
        intensity={3}
        color="#ffaa44"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <spotLight
        position={[0, 18, 12]}
        angle={0.6}
        penumbra={0.5}
        intensity={4}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  )
}

// Floating magical particles
function MagicalParticles() {
  const particlesRef = useRef()
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 150; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 35,
          (Math.random() - 0.5) * 28,
          (Math.random() - 0.5) * 12
        ],
        speed: Math.random() * 0.015 + 0.005,
        size: Math.random() * 0.08 + 0.03
      })
    }
    return temp
  }, [])
  
  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, i) => {
        particle.position.y += particles[i].speed
        particle.position.x += Math.sin(clock.elapsedTime + i) * 0.005
        if (particle.position.y > 14) particle.position.y = -14
      })
    }
  })
  
  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial 
            color="#fbbf24" 
            transparent 
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  )
}

// Main 3D Scene
function Scene({ curtainsOpen }) {
  return (
    <>
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.3} color="#fef3c7" />
      <TheatricalLighting />
      
      <pointLight position={[0, 0, 12]} intensity={1.2} color="#fde047" />
      <pointLight position={[-18, 5, 6]} intensity={0.8} color="#dc2626" />
      <pointLight position={[18, 5, 6]} intensity={0.8} color="#f59e0b" />
      
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 30]} fov={50} />
      
      {/* Realistic Fabric Curtains */}
      <RealisticCurtain side="left" isOpen={curtainsOpen} pattern="products" />
      <RealisticCurtain side="right" isOpen={curtainsOpen} pattern="services" />
      
      {/* Ornate Stage Frame */}
      <OrnateStageFrame />
      
      {/* Magical floating particles */}
      <MagicalParticles />
      
      {/* Background with atmospheric gradient */}
      <mesh position={[0, 0, -10]}>
        <planeGeometry args={[60, 45]} />
        <meshStandardMaterial 
          color="#450a0a"
          emissive="#7f1d1d"
          emissiveIntensity={0.4}
          roughness={1}
        />
      </mesh>
      
      {/* Atmospheric fog */}
      <fog attach="fog" args={['#450a0a', 25, 55]} />
    </>
  )
}

// Main Component
export default function WeddingGatePage() {
  const [curtainsOpen, setCurtainsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  const showProducts = () => {
    setCurtainsOpen(true)
    setActiveSection('products')
  }

  const showServices = () => {
    setCurtainsOpen(true)
    setActiveSection('services')
  }

  const closeCurtains = () => {
    setCurtainsOpen(false)
    setTimeout(() => setActiveSection(null), 800)
  }

  const products = [
    { icon: '💍', title: 'Wedding Rings', desc: 'Elegant wedding bands crafted with precision and passion.' },
    { icon: '👗', title: 'Bridal Wear', desc: 'Stunning bridal collections to shine on your special day.' },
    { icon: '💐', title: 'Flower Arrangements', desc: 'Artistic bouquets designed to reflect your love story.' },
    { icon: '🎂', title: 'Wedding Cakes', desc: 'Luxurious designer cakes with delightful flavors.' },
    { icon: '💌', title: 'Invitations', desc: 'Bespoke cards blending tradition and modern style.' },
    { icon: '🎁', title: 'Party Favors', desc: 'Charming keepsakes your guests will adore.' },
  ]

  const services = [
    { icon: '📸', title: 'Photography', desc: 'Capture every smile and tear with candid artistry.' },
    { icon: '🎥', title: 'Videography', desc: 'Cinematic storytelling for your once-in-a-lifetime event.' },
    { icon: '🎵', title: 'Live Music', desc: 'Soulful melodies and beats keeping your guests enchanted.' },
    { icon: '🎨', title: 'Event Planning', desc: 'Seamless coordination and elegant designs brought to life.' },
    { icon: '🍽', title: 'Catering', desc: 'Gourmet delights that please every palate with grace.' },
    { icon: '💄', title: 'Beauty Services', desc: 'Transformative bridal magic with expert touch.' },
  ]

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-red-950 via-amber-950 to-yellow-950">
      {/* Three.js Canvas */}
      <div className="absolute inset-0">
        <Canvas 
          shadows 
          gl={{ 
            antialias: true, 
            alpha: false,
            powerPreference: "high-performance"
          }}
        >
          <Scene curtainsOpen={curtainsOpen} />
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
        {/* Header Buttons - Hidden when curtains are open */}
        <div 
          className={`absolute top-16 left-1/2 transform -translate-x-1/2 flex gap-10 pointer-events-auto transition-all duration-700 ${
            curtainsOpen ? 'opacity-0 scale-75 -translate-y-20 pointer-events-none' : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          <button
            onClick={showProducts}
            className="group relative px-12 py-5 text-2xl font-extrabold uppercase tracking-widest bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-yellow-300 border-4 border-yellow-500 rounded-2xl shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:scale-110 hover:shadow-[0_0_50px_rgba(234,179,8,0.8)] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            <span className="relative">🌸 Products 🌸</span>
          </button>
          <button
            onClick={showServices}
            className="group relative px-12 py-5 text-2xl font-extrabold uppercase tracking-widest bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 text-yellow-300 border-4 border-yellow-500 rounded-2xl shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:scale-110 hover:shadow-[0_0_50px_rgba(234,179,8,0.8)] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            <span className="relative">🌺 Services 🌺</span>
          </button>
        </div>

        {/* Close Button - Only visible when curtains are open */}
        {curtainsOpen && (
          <button
            onClick={closeCurtains}
            className="fixed top-12 right-12 w-20 h-20 rounded-full bg-gradient-to-br from-red-700 via-red-800 to-red-950 border-4 border-yellow-500 text-yellow-300 text-4xl shadow-2xl hover:rotate-180 hover:scale-125 transition-all duration-700 flex items-center justify-center pointer-events-auto backdrop-blur-sm animate-fadeIn"
            style={{ zIndex: 50 }}
          >
            ✕
          </button>
        )}

        {/* Content Area - Only visible when curtains are open */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 pointer-events-auto ${
            curtainsOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
          }`}
        >
          {activeSection && (
            <>
              <h1 
                className="text-6xl md:text-8xl font-serif text-yellow-300 mb-12 drop-shadow-[0_0_40px_rgba(234,179,8,1)] animate-pulse" 
                style={{ 
                  animationDuration: '3s', 
                  textShadow: '0 0 20px rgba(234,179,8,0.8), 0 0 40px rgba(234,179,8,0.6), 0 0 60px rgba(234,179,8,0.4)' 
                }}
              >
                {activeSection === 'products' ? '✨ शादी Products ✨' : '✨ शादी Services ✨'}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-h-[65vh] overflow-y-auto pb-8 scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-red-900">
                {(activeSection === 'products' ? products : services).map((item, i) => (
                  <div
                    key={i}
                    className="group relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 border-4 border-red-700 rounded-3xl shadow-2xl p-10 hover:-translate-y-4 hover:scale-105 hover:shadow-[0_20px_80px_rgba(234,179,8,0.6)] transition-all duration-500 overflow-hidden backdrop-blur-sm"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-amber-500/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10">
                      <div className="text-7xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-red-900 mb-4 tracking-wide">{item.title}</h3>
                      <p className="text-red-800 leading-relaxed">{item.desc}</p>
                      <div className="mt-6 h-1.5 w-24 mx-auto bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full group-hover:w-32 transition-all duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(127, 29, 29, 0.3);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #eab308, #fbbf24);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #fbbf24, #eab308);
        }
      `}</style>
    </div>
  )
}
