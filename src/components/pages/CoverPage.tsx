import React from 'react';
import { BotanicalCorner, OrnamentalDivider } from '../FloralElements';

export const CoverPage: React.FC<{ onOpen?: () => void }> = ({ onOpen }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-[#F5EDE0] text-vintage-ink overflow-hidden shadow-vintage-paper rounded-sm select-none border-l-[6px] border-[#2C1E19]/30">
      {/* Vintage Book Spine Highlight on Left */}
      <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#2C1E19]/25 via-[#2C1E19]/10 to-transparent pointer-events-none z-20" />
      
      {/* Paper texture grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply z-10"
        style={{
          backgroundImage: `radial-gradient(#8A6A52 0.75px, transparent 0.75px), radial-gradient(#8A6A52 0.75px, #F5EDE0 0.75px)`,
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px',
        }}
      />

      {/* Ornate Gold Border & Corners */}
      <div className="absolute inset-3 sm:inset-4 border-2 border-[#C7A46A]/60 rounded-sm pointer-events-none z-10" />
      <div className="absolute inset-4 sm:inset-5 border border-dashed border-[#8A6A52]/30 rounded-sm pointer-events-none z-10" />
      
      <BotanicalCorner position="top-left" size={75} className="top-2 left-2 z-20" />
      <BotanicalCorner position="top-right" size={75} className="top-2 right-2 z-20" />
      <BotanicalCorner position="bottom-left" size={75} className="bottom-2 left-2 z-20" />
      <BotanicalCorner position="bottom-right" size={75} className="bottom-2 right-2 z-20" />

      {/* Top Header / Book series note */}
      <div className="relative z-20 text-center pt-3">
        <span className="font-cormorant tracking-[0.35em] text-[10px] sm:text-xs text-[#8A6A52] uppercase font-semibold">
          An Illustrated Anthology of Remorse
        </span>
        <div className="w-16 h-[1px] bg-[#C7A46A]/50 mx-auto mt-1" />
      </div>

      {/* Main Title Centerpiece */}
      <div className="relative z-20 my-auto text-center px-2 flex flex-col items-center">
        {/* Botanical Wreath Illustration */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 mb-3 relative flex items-center justify-center">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-sm">
            {/* Soft gold outer ring */}
            <circle cx="50" cy="50" r="42" stroke="#C7A46A" strokeWidth="1.2" strokeDasharray="3 2" />
            <circle cx="50" cy="50" r="38" stroke="#8A6A52" strokeWidth="0.8" opacity="0.4" />
            
            {/* Green botanical wreath leaves */}
            <path d="M 50 10 C 25 10 12 30 12 52 C 12 72 26 88 50 88" stroke="#455B45" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 50 10 C 75 10 88 30 88 52 C 88 72 74 88 50 88" stroke="#455B45" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Leaves along wreath */}
            <path d="M 22 28 C 16 26 14 34 20 36 C 24 34 26 30 22 28 Z" fill="#9EAD91" />
            <path d="M 12 48 C 6 46 8 54 14 54 C 18 52 16 48 12 48 Z" fill="#455B45" />
            <path d="M 20 70 C 16 74 22 80 26 76 C 26 72 22 70 20 70 Z" fill="#9EAD91" />
            
            <path d="M 78 28 C 84 26 86 34 80 36 C 76 34 74 30 78 28 Z" fill="#9EAD91" />
            <path d="M 88 48 C 94 46 92 54 86 54 C 82 52 84 48 88 48 Z" fill="#455B45" />
            <path d="M 80 70 C 84 74 78 80 74 76 C 74 72 78 70 80 70 Z" fill="#9EAD91" />

            {/* Watercolor Roses in Wreath */}
            <circle cx="50" cy="11" r="7" fill="#D9A6A6" />
            <circle cx="49" cy="10" r="4.5" fill="#F2D6D0" />
            <circle cx="49" cy="9" r="2" fill="#FFF9EF" />

            {/* Side rosebuds */}
            <circle cx="16" cy="40" r="5" fill="#D9A6A6" opacity="0.9" />
            <circle cx="84" cy="40" r="5" fill="#D9A6A6" opacity="0.9" />

            {/* Center Heart Flourish */}
            <path
              d="M 50 44 C 47 40 40 40 38 46 C 36 53 50 63 50 63 C 50 63 64 53 62 46 C 60 40 53 40 50 44 Z"
              fill="#D9A6A6"
              opacity="0.85"
            />
          </svg>
        </div>

        {/* Small introductory phrase */}
        <p className="font-cormorant italic text-sm sm:text-base text-[#8A6A52] tracking-wider mb-1">
          A humble confession in six chapters
        </p>

        {/* Main Title */}
        <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#2C1E19] leading-tight my-1 drop-shadow-sm max-w-[280px] sm:max-w-[340px]">
          The Art of Saying Sorry
        </h1>

        {/* Title parentheses accent */}
        <div className="font-greatvibes text-2xl sm:text-3xl text-[#964B4B] -mt-1 mb-2 font-normal">
          (Again)
        </div>

        <OrnamentalDivider className="my-1.5" />

        {/* Subtitle / Literary description */}
        <p className="font-lora text-xs sm:text-sm text-[#5C4538] max-w-[240px] sm:max-w-[280px] leading-relaxed italic mt-1">
          "Dedicated to the one whose patience I repeatedly test, and whose smile I would do anything to win back."
        </p>

        {/* Author Credit */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="w-6 h-[1px] bg-[#C7A46A]/60" />
          <span className="font-caveat text-sm sm:text-base text-[#455B45] font-semibold tracking-wide">
            By One Genuinely Sorry Author
          </span>
          <span className="w-6 h-[1px] bg-[#C7A46A]/60" />
        </div>
      </div>

      {/* Bottom CTA & Swipe Cue */}
      <div className="relative z-20 text-center pb-2">
        <button
          onClick={onOpen}
          className="group inline-flex flex-col items-center gap-1 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
          aria-label="Open the book to begin"
        >
          <span className="font-dancing text-base sm:text-lg text-[#8A6A52] group-hover:text-[#455B45] transition-colors">
            Open the book to begin...
          </span>
          
          <div className="flex items-center gap-1.5 text-xs font-cormorant text-[#C7A46A] tracking-widest uppercase">
            <span className="animate-pulse">Turn Page</span>
            <svg
              className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </button>

        {/* Subtle page indicator */}
        <div className="mt-2 text-[10px] font-cormorant text-[#8A6A52]/70 tracking-widest uppercase">
          Front Cover • Page 1 of 6
        </div>
      </div>
    </div>
  );
};

