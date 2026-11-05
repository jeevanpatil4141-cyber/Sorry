import React from 'react';
import { BotanicalCorner, OrnamentalDivider, WaxSeal } from '../FloralElements';

export const BackCoverPage: React.FC<{ onRestart?: () => void }> = ({ onRestart }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-[#F5EDE0] text-vintage-ink overflow-hidden shadow-vintage-paper rounded-sm select-none border-r-[6px] border-[#2C1E19]/30">
      {/* Right Book Spine/Edge Shadow */}
      <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#2C1E19]/25 via-[#2C1E19]/10 to-transparent pointer-events-none z-20" />

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

      <BotanicalCorner position="top-left" size={70} className="top-2 left-2 z-20" />
      <BotanicalCorner position="top-right" size={70} className="top-2 right-2 z-20" />
      <BotanicalCorner position="bottom-left" size={70} className="bottom-2 left-2 z-20" />
      <BotanicalCorner position="bottom-right" size={70} className="bottom-2 right-2 z-20" />

      {/* Top Header */}
      <div className="relative z-20 text-center pt-2">
        <span className="font-cormorant tracking-[0.3em] text-[10px] sm:text-xs text-[#8A6A52] uppercase font-bold">
          The Conclusion • Epilogue
        </span>
        <div className="w-16 h-[1px] bg-[#C7A46A]/60 mx-auto mt-1" />
      </div>

      {/* Centerpiece: The Two Exact Quotes */}
      <div className="relative z-20 my-auto px-2 sm:px-4 flex flex-col gap-4 sm:gap-5 text-center">
        
        {/* Quote 1 */}
        <div className="relative p-4 sm:p-5 bg-[#FFF9EF]/80 border border-[#8A6A52]/20 rounded-sm shadow-sm">
          <div className="font-cormorant text-[10px] sm:text-xs tracking-widest uppercase text-[#8A6A52] mb-1">
            Critical Review • Note 01
          </div>
          <p className="font-cormorant text-base sm:text-lg leading-relaxed text-[#2C1E19] font-medium">
            “<span className="font-playfair text-[#2C1E19]">Some books have unexpected plot twists.</span>{' '}
            <span className="font-dancing text-lg sm:text-xl text-[#964B4B] font-bold">
              Unfortunately, this one has me.
            </span>”
          </p>
        </div>

        <OrnamentalDivider className="my-0" />

        {/* Quote 2 */}
        <div className="relative p-4 sm:p-5 bg-[#FFF9EF]/80 border border-[#8A6A52]/20 rounded-sm shadow-sm">
          <div className="font-cormorant text-[10px] sm:text-xs tracking-widest uppercase text-[#8A6A52] mb-1">
            Author’s Certification • Note 02
          </div>
          <p className="font-lora text-sm sm:text-base leading-relaxed text-[#2C1E19]">
            “<span className="font-medium text-[#455B45]">No readers were intentionally annoyed during the writing of this book.</span>{' '}
            <span className="font-caveat font-bold text-base sm:text-lg text-[#8A6A52]">
              Any resemblance to actual incidents is entirely intentional.
            </span>”
          </p>
        </div>

        {/* Small Wax Seal & Publisher Barcode / Hallmark */}
        <div className="flex items-center justify-center gap-4 mt-1">
          <WaxSeal className="w-9 h-9" label="FIN" />
          <div className="text-left border-l border-[#8A6A52]/30 pl-3">
            <span className="block font-bodoni text-[9px] uppercase tracking-widest text-[#455B45] font-bold">
              Apology Press • Edition № 1
            </span>
            <span className="block font-caveat text-xs text-[#8A6A52]">
              Forever hoping for your smile.
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Footer & Restart CTA */}
      <div className="relative z-20 text-center pb-2">
        <button
          onClick={onRestart}
          className="group inline-flex items-center gap-2 px-5 py-2 bg-[#FFF9EF] border border-[#8A6A52]/40 rounded-full font-cormorant text-xs sm:text-sm text-[#2C1E19] shadow-sm hover:shadow hover:bg-white active:scale-95 transition-all cursor-pointer"
          aria-label="Read again from the beginning"
        >
          <svg className="w-3.5 h-3.5 text-[#8A6A52] transform group-hover:-rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="tracking-wide">Read Again from Beginning</span>
        </button>

        <div className="mt-2 text-[10px] font-cormorant text-[#8A6A52]/70 tracking-widest uppercase">
          Back Cover • Page 6 of 6
        </div>
      </div>
    </div>
  );
};

