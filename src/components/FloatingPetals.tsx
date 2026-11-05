import React, { useMemo } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  color: string;
}

export const FloatingPetals: React.FC<{ count?: number; active?: boolean }> = ({
  count = 14,
  active = true,
}) => {
  const petals = useMemo<Petal[]>(() => {
    const colors = [
      '#D9A6A6', // dusty rose
      '#F2D6D0', // muted blush
      '#FFF9EF', // warm ivory petal
      '#E8B4B8', // soft pink
    ];

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 14,
      duration: 12 + Math.random() * 10,
      delay: Math.random() * 8,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [count]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute -top-10 opacity-70 will-change-transform"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            animation: `fallingPetal ${petal.duration}s linear ${petal.delay}s infinite`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          <svg viewBox="0 0 30 40" fill="none" className="w-full h-full drop-shadow-sm">
            <path
              d="M 15 2 C 26 10 30 25 18 38 C 10 38 0 25 4 10 C 6 2 12 0 15 2 Z"
              fill={petal.color}
              opacity="0.8"
            />
            {/* Subtle petal vein */}
            <path
              d="M 15 5 C 16 16 15 26 17 34"
              stroke="#FFF9EF"
              strokeWidth="0.8"
              opacity="0.5"
            />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes fallingPetal {
          0% {
            transform: translateY(-20px) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.75;
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(45px);
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(-30px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

