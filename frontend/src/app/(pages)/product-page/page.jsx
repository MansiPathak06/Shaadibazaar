"use client";
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image as KonvaImage, Rect, Shape, Group } from 'react-konva';

const FRAME_SHAPES = {
  'square': { cornerRadius: 0, hasDualBorder: false, isCircle: false },
  'rounded-rect': { cornerRadius: 20, hasDualBorder: false, isCircle: false },
  'extra-rounded': { cornerRadius: 50, hasDualBorder: false, isCircle: false },
  'circle': { cornerRadius: 0, hasDualBorder: false, isCircle: true },
  'dual-square': { cornerRadius: 0, hasDualBorder: true, isCircle: false, innerBorderGap: 12 },
  'dual-rounded': { cornerRadius: 20, hasDualBorder: true, isCircle: false, innerBorderGap: 12 },
  'dual-circle': { cornerRadius: 0, hasDualBorder: true, isCircle: true, innerBorderGap: 12 },
};

const SIZE_OPTIONS = [
  { label: '12x9', widthCm: 30.48, heightCm: 22.86, widthInch: 12, heightInch: 9 },
  { label: '16x12', widthCm: 40.64, heightCm: 30.48, widthInch: 16, heightInch: 12 },
  { label: '18x12', widthCm: 45.72, heightCm: 30.48, widthInch: 18, heightInch: 12 },
  { label: '21x15', widthCm: 53.34, heightCm: 38.1, widthInch: 21, heightInch: 15 },
  { label: '30x20', widthCm: 76.2, heightCm: 50.8, widthInch: 30, heightInch: 20 },
  { label: '35x23', widthCm: 88.9, heightCm: 58.42, widthInch: 35, heightInch: 23 },
  { label: '48x36', widthCm: 121.92, heightCm: 91.44, widthInch: 48, heightInch: 36 },
];

const THICKNESS_OPTIONS = [
  { label: '3mm', value: 3 },
  { label: '5mm', value: 5 },
  { label: '8mm', value: 8 },
];

const PRICES = {
  '12x9': { '3': 699, '5': 799, '8': 899 },
  '16x12': { '3': 999, '5': 1099, '8': 1199 },
  '18x12': { '3': 1199, '5': 1299, '8': 1399 },
  '21x15': { '3': 1499, '5': 1599, '8': 1699 },
  '30x20': { '3': 2499, '5': 2699, '8': 2899 },
  '35x23': { '3': 2999, '5': 3199, '8': 3399 },
  '48x36': { '3': 3499, '5': 3699, '8': 3999 },
};

export default function FrameProductPage() {
  const [selectedSize, setSelectedSize] = useState(SIZE_OPTIONS[4]);
  const [selectedThickness, setSelectedThickness] = useState(3);
  const [designData, setDesignData] = useState(null);
  const [photoImg, setPhotoImg] = useState(null);
  const [mockupImg, setMockupImg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedData = window.frameDesignData || {
      imageUri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      frameShapeId: 'rounded-rect',
      frameColor: '#000000',
      matColor: '#ffffff',
      widthCm: 30,
      heightCm: 20,
      thicknessMm: 20
    };
    
    setDesignData(savedData);

    // Load the mockup background image from public folder
    const mockup = new window.Image();
    mockup.crossOrigin = 'anonymous';
    // Update this path to match your public folder structure
    mockup.src = '/mockup-bg.png'; // or '/images/mockup-bg.jpg' if in images subfolder
    mockup.onload = () => setMockupImg(mockup);
    mockup.onerror = () => {
      console.error('Failed to load mockup image');
      setMockupImg(null);
    };

    if (savedData?.imageUri) {
      const img = new window.Image();
      img.crossOrigin = 'anonymous';
      img.src = savedData.imageUri;
      img.onload = () => {
        setPhotoImg(img);
        setLoading(false);
      };
      img.onerror = () => {
        setLoading(false);
      };
    } else {
      setLoading(false);
    }
  }, []);

  const cmToPx = (cm, maxCm = 121.92) => {
    const scale = 400 / maxCm;
    return cm * scale;
  };

  const renderFrame = () => {
    if (!designData || !photoImg) return null;

    const shapeConfig = FRAME_SHAPES[designData.frameShapeId] || FRAME_SHAPES['rounded-rect'];
    const PREVIEW_WIDTH = cmToPx(selectedSize.widthCm);
    const PREVIEW_HEIGHT = cmToPx(selectedSize.heightCm);
    
    const framePx = 8 + (selectedThickness - 3) * 2;
    
    if (shapeConfig.isCircle) {
      const circleSize = Math.min(PREVIEW_WIDTH, PREVIEW_HEIGHT);
      const offsetXCircle = (PREVIEW_WIDTH - circleSize) / 2;
      const offsetYCircle = (PREVIEW_HEIGHT - circleSize) / 2;
      const centerX = circleSize / 2;
      const centerY = circleSize / 2;

      const outerRadius = circleSize / 2;
      const matRadius = outerRadius - framePx;
      const dualBorderGap = shapeConfig.hasDualBorder ? shapeConfig.innerBorderGap : 0;
      const photoRadius = matRadius - dualBorderGap;

      const photoDiameter = photoRadius * 2;
      const scaleX = photoDiameter / photoImg.width;
      const scaleY = photoDiameter / photoImg.height;
      const imageScale = Math.max(scaleX, scaleY);
      
      const scaledWidth = photoImg.width * imageScale;
      const scaledHeight = photoImg.height * imageScale;
      const photoX = centerX - scaledWidth / 2;
      const photoY = centerY - scaledHeight / 2;

      return (
        <Group x={offsetXCircle} y={offsetYCircle}>
          <Shape
            sceneFunc={(ctx, shape) => {
              ctx.beginPath();
              ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
              ctx.fillStrokeShape(shape);
            }}
            fill={designData.frameColor}
            shadowColor="rgba(0,0,0,0.35)"
            shadowBlur={24}
            shadowOffsetY={10}
          />

          <Shape
            sceneFunc={(ctx, shape) => {
              ctx.beginPath();
              ctx.arc(centerX, centerY, matRadius, 0, Math.PI * 2);
              ctx.fillStrokeShape(shape);
            }}
            fill={designData.matColor}
          />

          {shapeConfig.hasDualBorder && (
            <Shape
              sceneFunc={(ctx, shape) => {
                ctx.beginPath();
                ctx.arc(centerX, centerY, photoRadius, 0, Math.PI * 2);
                ctx.strokeShape(shape);
              }}
              stroke={designData.frameColor}
              strokeWidth={2}
            />
          )}

          <Group
            clipFunc={(ctx) => {
              ctx.beginPath();
              ctx.arc(centerX, centerY, photoRadius, 0, Math.PI * 2);
              ctx.closePath();
            }}
          >
            <KonvaImage
              image={photoImg}
              x={photoX}
              y={photoY}
              width={scaledWidth}
              height={scaledHeight}
            />
          </Group>
        </Group>
      );
    }

    // Rectangle frames
    const innerWidth = PREVIEW_WIDTH - framePx * 2;
    const innerHeight = PREVIEW_HEIGHT - framePx * 2;
    const dualBorderGap = shapeConfig.hasDualBorder ? shapeConfig.innerBorderGap : 0;
    const matInnerWidth = innerWidth - dualBorderGap * 2;
    const matInnerHeight = innerHeight - dualBorderGap * 2;

    const photoAreaWidth = shapeConfig.hasDualBorder ? matInnerWidth : innerWidth;
    const photoAreaHeight = shapeConfig.hasDualBorder ? matInnerHeight : innerHeight;
    
    const scaleX = photoAreaWidth / photoImg.width;
    const scaleY = photoAreaHeight / photoImg.height;
    const imageScale = Math.max(scaleX, scaleY);

    const displayWidth = photoImg.width * imageScale;
    const displayHeight = photoImg.height * imageScale;
    const offsetX = (photoAreaWidth - displayWidth) / 2;
    const offsetY = (photoAreaHeight - displayHeight) / 2;

    return (
      <Group>
        <Rect
          x={0}
          y={0}
          width={PREVIEW_WIDTH}
          height={PREVIEW_HEIGHT}
          fill={designData.frameColor}
          cornerRadius={shapeConfig.cornerRadius}
          shadowColor="rgba(0,0,0,0.35)"
          shadowBlur={24}
          shadowOffsetY={10}
        />

        <Rect
          x={framePx}
          y={framePx}
          width={innerWidth}
          height={innerHeight}
          fill={designData.matColor}
          cornerRadius={Math.max(0, shapeConfig.cornerRadius - framePx / 2)}
        />

        {shapeConfig.hasDualBorder && (
          <Rect
            x={framePx + dualBorderGap}
            y={framePx + dualBorderGap}
            width={matInnerWidth}
            height={matInnerHeight}
            stroke={designData.frameColor}
            strokeWidth={2}
            cornerRadius={Math.max(0, shapeConfig.cornerRadius - framePx / 2 - dualBorderGap)}
          />
        )}

        <Group
          x={framePx + (shapeConfig.hasDualBorder ? dualBorderGap : 0)}
          y={framePx + (shapeConfig.hasDualBorder ? dualBorderGap : 0)}
          clipFunc={(ctx) => {
            const w = photoAreaWidth;
            const h = photoAreaHeight;
            const r = Math.max(
              0,
              shapeConfig.cornerRadius - framePx / 2 - (shapeConfig.hasDualBorder ? dualBorderGap : 0)
            );

            ctx.beginPath();
            ctx.moveTo(r, 0);
            ctx.lineTo(w - r, 0);
            ctx.quadraticCurveTo(w, 0, w, r);
            ctx.lineTo(w, h - r);
            ctx.quadraticCurveTo(w, h, w - r, h);
            ctx.lineTo(r, h);
            ctx.quadraticCurveTo(0, h, 0, h - r);
            ctx.lineTo(0, r);
            ctx.quadraticCurveTo(0, 0, r, 0);
            ctx.closePath();
          }}
        >
          <KonvaImage
            image={photoImg}
            x={offsetX}
            y={offsetY}
            width={displayWidth}
            height={displayHeight}
          />
        </Group>
      </Group>
    );
  };

  const currentPrice = PRICES[selectedSize.label]?.[selectedThickness] || 699;
  const originalPrice = Math.round(currentPrice * 1.8);

  const PREVIEW_WIDTH = cmToPx(selectedSize.widthCm);
  const PREVIEW_HEIGHT = cmToPx(selectedSize.heightCm);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your design...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900">OMGS® Editor</h1>
          <p className="text-sm text-gray-500 mt-1">Home / Acrylic Wall Photo</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center justify-center">
              <div className="relative">
                {mockupImg ? (
                  <div className="relative" style={{ width: '800px', height: '600px' }}>
                    <img 
                      src={mockupImg.src} 
                      alt="Room mockup" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                    
                    {/* Frame overlay positioned on the wall */}
                    <div className="absolute" style={{
                      top: '18%',
                      left: '50%',
                      transform: 'translate(-50%, 0)',
                    }}>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white bg-black bg-opacity-70 px-3 py-1 rounded whitespace-nowrap">
                        {selectedSize.widthInch}" ({selectedSize.widthCm.toFixed(2)} cm)
                      </div>
                      <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-medium text-white bg-black bg-opacity-70 px-3 py-1 rounded whitespace-nowrap">
                        {selectedSize.heightInch}" ({selectedSize.heightCm.toFixed(2)} cm)
                      </div>

                      <Stage width={PREVIEW_WIDTH} height={PREVIEW_HEIGHT}>
                        <Layer>
                          {renderFrame()}
                        </Layer>
                      </Stage>

                      <div className="mt-3 text-center">
                        <span className="text-xs font-medium text-white bg-black bg-opacity-70 px-3 py-1 rounded inline-block">
                          Thickness: {selectedThickness}mm
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 text-xs text-gray-600 bg-white bg-opacity-90 px-3 py-1 rounded">
                      Quick mount: OMGS Adhesive hooks (Included)
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600">
                      {selectedSize.widthInch} inches ({selectedSize.widthCm.toFixed(2)} cm)
                    </div>
                    <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium text-gray-600">
                      {selectedSize.heightInch} inches ({selectedSize.heightCm.toFixed(2)} cm)
                    </div>

                    <Stage width={PREVIEW_WIDTH} height={PREVIEW_HEIGHT}>
                      <Layer>
                        <Rect
                          x={0}
                          y={0}
                          width={PREVIEW_WIDTH}
                          height={PREVIEW_HEIGHT}
                          fill="white"
                        />
                        {renderFrame()}
                      </Layer>
                    </Stage>

                    <div className="mt-4 text-center text-sm font-medium text-gray-600">
                      Thickness: {selectedThickness}mm
                    </div>
                    <div className="mt-6 text-center text-sm text-gray-500">
                      <p>Quick mount: OMGS Adhesive hooks (Included)</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:w-96 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-gray-900">₹{currentPrice}</span>
                <span className="text-lg text-gray-400 line-through">₹{originalPrice}</span>
              </div>
              {selectedSize.label === '12x9' && selectedThickness === 3 && (
                <p className="text-sm text-red-600 font-medium mt-2">Only 6 Acrylic's left!</p>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Acrylic Size (Inch):</h3>
              <div className="grid grid-cols-4 gap-2">
                {SIZE_OPTIONS.map((size) => (
                  <button
                    key={size.label}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedSize.label === size.label
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Acrylic Thickness:</h3>
              <div className="flex gap-3">
                {THICKNESS_OPTIONS.map((thickness) => (
                  <button
                    key={thickness.value}
                    onClick={() => setSelectedThickness(thickness.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedThickness === thickness.value
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {thickness.label}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg text-lg transition-colors shadow-lg">
              Buy it now
            </button>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Check Estimated Delivery Date</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Check
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex gap-6 border-b border-gray-200 mb-6">
            <button className="pb-3 px-2 border-b-2 border-black font-medium text-gray-900">
              Product Details
            </button>
            <button className="pb-3 px-2 font-medium text-gray-500 hover:text-gray-900">
              Reviews
            </button>
            <button className="pb-3 px-2 font-medium text-gray-500 hover:text-gray-900">
              OMGS?
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">Home Décor Gift: Perfect for Home Decor as it's a Beautiful Gift.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6">Why OMGS® Acrylic Photo?</h3>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-red-600">•</span>
                <span>Quick dispatch from <strong>Jaipur / Bengaluru</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">•</span>
                <span><strong>Unidirectional pixel-perfect</strong> direct printing on Acrylic</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">•</span>
                <span><strong>Ultra HD print</strong> with the highest DPI (Resolution)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">•</span>
                <span>Acrylic undergoes <strong>chemical treatment</strong> before printing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">•</span>
                <span><strong>Never peel off</strong>, Even Moisture Environment</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">•</span>
                <span>Unidirectional mode ensures each picture receives <strong>2x printing time</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">•</span>
                <span><strong>Same day processing</strong> of orders</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">•</span>
                <span>Advanced utilization of <strong>Artificial Intelligence</strong> (AI)</span>
              </li>
            </ul>

            <p className="text-gray-600 mt-6 italic">
              The perfect home decor gift with a beautiful gloss finish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}