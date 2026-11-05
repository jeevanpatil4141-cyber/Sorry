import React from 'react';

// Delicate vintage botanical corner ornament
export const BotanicalCorner: React.FC<{
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
}> = ({ className = '', position = 'top-left', size = 90 }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right': return 'scaleX(-1)';
      case 'bottom-left': return 'scaleY(-1)';
      case 'bottom-right': return 'scale(-1, -1)';
      default: return 'none';
    }
  };

  return (
    <div
      className={`pointer-events-none absolute select-none ${className}`}
      style={{
        transform: getTransform(),
        width: size,
        height: size,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-85"
      >
        {/* Main vine */}
        <path
          d="M 6 94 C 8 60 25 25 78 12 C 86 10 92 8 96 6"
          stroke="#455B45"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Secondary branch */}
        <path
          d="M 28 48 C 36 32 50 24 72 20"
          stroke="#455B45"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Soft gold decorative tendril */}
        <path
          d="M 12 80 C 18 68 32 60 44 64 C 54 68 52 82 40 82 C 32 82 28 72 36 66"
          stroke="#C7A46A"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeDasharray="2 1"
        />
        {/* Sage green leaves */}
        <path
          d="M 22 56 C 18 46 12 44 8 46 C 12 52 18 56 22 56 Z"
          fill="#9EAD91"
          opacity="0.85"
        />
        <path
          d="M 38 38 C 34 28 26 26 22 30 C 26 36 34 38 38 38 Z"
          fill="#455B45"
          opacity="0.75"
        />
        <path
          d="M 54 26 C 54 16 46 12 42 16 C 44 24 50 26 54 26 Z"
          fill="#9EAD91"
          opacity="0.8"
        />
        <path
          d="M 72 16 C 74 6 68 4 64 6 C 64 14 70 16 72 16 Z"
          fill="#455B45"
          opacity="0.8"
        />
        {/* Watercolor dusty rose blossom */}
        <circle cx="28" cy="46" r="6.5" fill="#D9A6A6" opacity="0.85" />
        <circle cx="26" cy="45" r="4.5" fill="#F2D6D0" />
        <path
          d="M 26 43 C 28 41 31 43 30 46 C 29 48 26 48 25 46"
          stroke="#8A6A52"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        {/* Small rosebud near tip */}
        <ellipse cx="80" cy="12" rx="4.5" ry="3.5" fill="#D9A6A6" transform="rotate(-25 80 12)" />
        <ellipse cx="80" cy="12" rx="2.5" ry="2" fill="#F2D6D0" transform="rotate(-25 80 12)" />
        <circle cx="88" cy="8" r="2" fill="#C7A46A" />
      </svg>
    </div>
  );
};

// Vintage botanical frame border for book covers
export const BotanicalFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative p-5 sm:p-7 border border-[#C7A46A]/40 rounded-sm ${className}`}>
      {/* Outer fine gold line */}
      <div className="absolute inset-1 border border-[#C7A46A]/25 pointer-events-none rounded-sm" />
      {/* Inner dotted frame */}
      <div className="absolute inset-2 border border-dashed border-[#8A6A52]/20 pointer-events-none" />

      {/* 4 Decorative Corner Ornaments */}
      <BotanicalCorner position="top-left" size={60} className="-top-1 -left-1" />
      <BotanicalCorner position="top-right" size={60} className="-top-1 -right-1" />
      <BotanicalCorner position="bottom-left" size={60} className="-bottom-1 -left-1" />
      <BotanicalCorner position="bottom-right" size={60} className="-bottom-1 -right-1" />

      {children}
    </div>
  );
};

// Vintage ornamental divider with central rosebud
export const OrnamentalDivider: React.FC<{ className?: string; text?: string }> = ({
  className = '',
  text,
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-3 select-none ${className}`}>
      <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="opacity-60">
        <path d="M 0 6 L 30 6" stroke="#C7A46A" strokeWidth="1" />
        <circle cx="34" cy="6" r="2" fill="#C7A46A" />
        <path d="M 12 6 C 18 2 24 2 28 6" stroke="#9EAD91" strokeWidth="0.8" />
      </svg>

      {text ? (
        <span className="font-cormorant italic text-xs tracking-widest text-[#8A6A52] uppercase px-1">
          {text}
        </span>
      ) : (
        <div className="flex items-center gap-1.5 opacity-80">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="4.5" fill="#D9A6A6" />
            <circle cx="10" cy="10" r="2.5" fill="#F2D6D0" />
            <path d="M 10 3 C 8 6 12 7 10 10" stroke="#455B45" strokeWidth="0.8" />
            <path d="M 10 17 C 12 14 8 13 10 10" stroke="#455B45" strokeWidth="0.8" />
          </svg>
        </div>
      )}

      <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="opacity-60 rotate-180">
        <path d="M 0 6 L 30 6" stroke="#C7A46A" strokeWidth="1" />
        <circle cx="34" cy="6" r="2" fill="#C7A46A" />
        <path d="M 12 6 C 18 2 24 2 28 6" stroke="#9EAD91" strokeWidth="0.8" />
      </svg>
    </div>
  );
};

// Washi tape visual decoration
export const WashiTape: React.FC<{
  className?: string;
  pattern?: 'dots' | 'floral' | 'stripes' | 'kraft';
  color?: string;
  rotation?: number;
}> = ({ className = '', pattern = 'dots', color = 'rgba(217, 166, 166, 0.65)', rotation = -3 }) => {
  return (
    <div
      className={`absolute h-4 sm:h-5 w-20 sm:w-24 z-10 pointer-events-none select-none shadow-sm backdrop-blur-[0.5px] ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        backgroundColor: color,
        clipPath: 'polygon(0% 0%, 97% 2%, 100% 98%, 3% 100%, 0% 50%)',
        opacity: 0.85,
      }}
    >
      {pattern === 'dots' && (
        <div className="w-full h-full opacity-35 bg-[radial-gradient(#fff_1.2px,transparent_1.2px)] [background-size:6px_6px]" />
      )}
      {pattern === 'stripes' && (
        <div className="w-full h-full opacity-25 bg-[repeating-linear-gradient(45deg,#fff,#fff_2px,transparent_2px,transparent_6px)]" />
      )}
    </div>
  );
};

// Wax seal stamp
export const WaxSeal: React.FC<{ className?: string; label?: string }> = ({
  className = '',
  label = 'SORRY',
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-12 h-12 rounded-full shadow-md select-none ${className}`}
      style={{
        background: 'radial-gradient(circle at 35% 35%, #D9A6A6 0%, #A35C5C 70%, #683030 100%)',
        boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.4), 0 3px 6px rgba(44,30,25,0.25)',
      }}
    >
      <div className="w-9 h-9 rounded-full border border-dashed border-[#F3E8D5]/60 flex items-center justify-center">
        <span className="font-bodoni font-bold text-[9px] tracking-widest text-[#FFF9EF] drop-shadow-sm uppercase">
          {label}
        </span>
      </div>
    </div>
  );
};

// Vintage earbud & cassette card illustration for Page 5
export const VintageMusicArt: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 240 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 sm:w-56 h-auto drop-shadow-sm select-none"
      >
        {/* Cassette body / Vintage Player Card */}
        <rect x="25" y="15" width="190" height="95" rx="10" fill="#F3E8D5" stroke="#8A6A52" strokeWidth="2" />
        <rect x="35" y="24" width="170" height="76" rx="6" fill="#FFF9EF" stroke="#C7A46A" strokeWidth="1" />
        
        {/* Label area with soft dusty rose */}
        <rect x="45" y="32" width="150" height="42" rx="4" fill="#D9A6A6" fillOpacity="0.35" stroke="#8A6A52" strokeWidth="0.8" />
        
        {/* Song title on tape */}
        <text x="120" y="48" textAnchor="middle" fill="#455B45" fontFamily="Playfair Display" fontSize="10" fontWeight="600" fontStyle="italic">
          Bhoothnath • Track 04
        </text>
        <text x="120" y="62" textAnchor="middle" fill="#2C1E19" fontFamily="Dancing Script" fontSize="14" fontWeight="700">
          Chalo Jaane Do
        </text>

        {/* Cassette spools */}
        <circle cx="80" cy="85" r="11" fill="#455B45" fillOpacity="0.2" stroke="#455B45" strokeWidth="1.2" />
        <circle cx="80" cy="85" r="4" fill="#8A6A52" />
        <circle cx="160" cy="85" r="11" fill="#455B45" fillOpacity="0.2" stroke="#455B45" strokeWidth="1.2" />
        <circle cx="160" cy="85" r="4" fill="#8A6A52" />

        {/* Small tape window bridge */}
        <rect x="94" y="78" width="52" height="14" rx="2" fill="#F3E8D5" stroke="#8A6A52" strokeWidth="0.8" />
        <line x1="104" y1="85" x2="136" y2="85" stroke="#8A6A52" strokeWidth="2" strokeDasharray="3 2" />

        {/* Intertwined Earbud Cords forming a gentle heart */}
        <path
          d="M 60 110 C 60 124 95 132 120 116 C 145 132 180 124 180 110"
          stroke="#8A6A52"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Left Earbud */}
        <ellipse cx="58" cy="108" rx="5" ry="3.5" fill="#FFF9EF" stroke="#8A6A52" strokeWidth="1.2" transform="rotate(-20 58 108)" />
        <circle cx="58" cy="108" r="1.5" fill="#D9A6A6" />
        <text x="47" y="106" fill="#8A6A52" fontFamily="Caveat" fontSize="10" fontWeight="bold">You</text>

        {/* Right Earbud */}
        <ellipse cx="182" cy="108" rx="5" ry="3.5" fill="#FFF9EF" stroke="#8A6A52" strokeWidth="1.2" transform="rotate(20 182 108)" />
        <circle cx="182" cy="108" r="1.5" fill="#D9A6A6" />
        <text x="191" y="106" fill="#8A6A52" fontFamily="Caveat" fontSize="10" fontWeight="bold">Me</text>

        {/* Floating musical notes & small blossom */}
        <path d="M 32 30 C 32 24 38 22 41 26 L 41 34" stroke="#C7A46A" strokeWidth="1" strokeLinecap="round" />
        <circle cx="33" cy="34" r="2.5" fill="#C7A46A" />

        <path d="M 205 32 C 205 26 211 24 214 28 L 214 36" stroke="#C7A46A" strokeWidth="1" strokeLinecap="round" />
        <circle cx="206" cy="36" r="2.5" fill="#C7A46A" />
      </svg>
    </div>
  );
};

