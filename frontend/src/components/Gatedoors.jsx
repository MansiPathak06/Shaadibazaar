import React from 'react';

export default function GateDoors({ gatesOpen, isMobile }) {
  const DiamondPattern = () => (
    <svg className="w-full h-full opacity-30" viewBox="0 0 400 800" preserveAspectRatio="none">
      <defs>
        <linearlinear id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#fda4af" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.4" />
        </linearlinear>
      </defs>
      {Array.from({ length: 12 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => {
          const x = col * 60 + (row % 2 === 0 ? 30 : 0);
          const y = row * 68;
          return (
            <path
              key={`${row}-${col}`}
              d={`M ${x + 30},${y} L ${x + 52},${y + 34} L ${x + 30},${y + 68} L ${x + 8},${y + 34} Z`}
              fill="none"
              stroke="url(#diamondGrad)"
              strokeWidth="2"
              className="animate-pulse-slow"
            />
          );
        })
      )}
    </svg>
  );

  return (
    <>
      {/* LEFT GATE */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full z-20"
        style={{
          perspective: isMobile ? '1500px' : '2000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            transformOrigin: 'left center',
            transformStyle: 'preserve-3d',
            transform: gatesOpen
              ? `perspective(${isMobile ? '1500px' : '2000px'}) rotateY(${isMobile ? '-110deg' : '-120deg'})`
              : `perspective(${isMobile ? '1500px' : '2000px'}) rotateY(0deg)`,
            boxShadow: gatesOpen ? '-30px 0 60px rgba(0,0,0,0.9)' : 'inset -10px 0 30px rgba(0,0,0,0.5)'
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-rose-900/95 via-pink-900/95 to-rose-950/95 backdrop-blur-md border-r-2 border-rose-400/30">
            <div className="absolute inset-0">
              <DiamondPattern />
            </div>
            <div className="absolute inset-y-0 right-0 w-1 bg-linear-to-b from-transparent via-rose-300 to-transparent animate-pulse-slow"></div>

            {/* Door handle */}
            <div className={`absolute top-1/2 right-4 sm:right-8 transform -translate-y-1/2 ${isMobile ? 'w-5 h-16' : 'w-8 h-28'} bg-linear-to-b from-rose-300 via-pink-400 to-rose-500 rounded-full border-2 border-rose-400/50 shadow-[0_0_20px_rgba(251,113,133,0.6)] animate-glow-pulse`}>
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-3 h-3' : 'w-5 h-5'} bg-rose-400 rounded-full shadow-inner`}></div>
            </div>

            {/* Decorative elements */}
            <div className={`absolute top-1/4 right-8 sm:right-16 ${isMobile ? 'w-24 h-24' : 'w-40 h-40'} rounded-full bg-rose-400/20 blur-3xl animate-pulse-glow`}></div>
            <div className={`absolute bottom-1/4 right-8 sm:right-16 ${isMobile ? 'w-28 h-28' : 'w-48 h-48'} rounded-full bg-pink-400/15 blur-3xl animate-pulse-glow`} style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* RIGHT GATE */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full z-20"
        style={{
          perspective: isMobile ? '1500px' : '2000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            transformOrigin: 'right center',
            transformStyle: 'preserve-3d',
            transform: gatesOpen
              ? `perspective(${isMobile ? '1500px' : '2000px'}) rotateY(${isMobile ? '110deg' : '120deg'})`
              : `perspective(${isMobile ? '1500px' : '2000px'}) rotateY(0deg)`,
            boxShadow: gatesOpen ? '30px 0 60px rgba(0,0,0,0.9)' : 'inset 10px 0 30px rgba(0,0,0,0.5)'
          }}
        >
          <div className="absolute inset-0 bg-linear-to-bl from-rose-900/95 via-pink-900/95 to-rose-950/95 backdrop-blur-md border-l-2 border-rose-400/30">
            <div className="absolute inset-0">
              <DiamondPattern />
            </div>
            <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-transparent via-rose-300 to-transparent animate-pulse-slow"></div>

            {/* Door handle */}
            <div className={`absolute top-1/2 left-4 sm:left-8 transform -translate-y-1/2 ${isMobile ? 'w-5 h-16' : 'w-8 h-28'} bg-linear-to-b from-rose-300 via-pink-400 to-rose-500 rounded-full border-2 border-rose-400/50 shadow-[0_0_20px_rgba(251,113,133,0.6)] animate-glow-pulse`}>
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-3 h-3' : 'w-5 h-5'} bg-rose-400 rounded-full shadow-inner`}></div>
            </div>

            {/* Decorative elements */}
            <div className={`absolute top-1/4 left-8 sm:left-16 ${isMobile ? 'w-24 h-24' : 'w-40 h-40'} rounded-full bg-rose-400/20 blur-3xl animate-pulse-glow`}></div>
            <div className={`absolute bottom-1/4 left-8 sm:left-16 ${isMobile ? 'w-28 h-28' : 'w-48 h-48'} rounded-full bg-pink-400/15 blur-3xl animate-pulse-glow`} style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
