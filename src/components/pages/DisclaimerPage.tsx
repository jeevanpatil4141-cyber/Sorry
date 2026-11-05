import React from 'react';
import { BotanicalCorner, OrnamentalDivider, WashiTape } from '../FloralElements';

export const DisclaimerPage: React.FC<{ onNext?: () => void }> = ({ onNext }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-[#FFF9EF] text-vintage-ink overflow-hidden shadow-vintage-paper rounded-sm select-none border-l-2 border-[#8A6A52]/20">
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply z-10"
        style={{
          backgroundImage: `radial-gradient(#8A6A52 0.75px, transparent 0.75px), radial-gradient(#8A6A52 0.75px, #FFF9EF 0.75px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px',
        }}
      />

      {/* Subtle aged paper edge vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_35px_rgba(138,106,82,0.12)] z-10" />

      {/* Corner Botanical Flourishes */}
      <BotanicalCorner position="top-left" size={55} className="top-2 left-2 z-20" />
      <BotanicalCorner position="top-right" size={55} className="top-2 right-2 z-20" />
      <BotanicalCorner position="bottom-left" size={55} className="bottom-2 left-2 z-20" />
      <BotanicalCorner position="bottom-right" size={55} className="bottom-2 right-2 z-20" />

      {/* Decorative Washi Tape on top corner */}
      <WashiTape className="-top-1 right-12 z-20" pattern="floral" color="rgba(158, 173, 145, 0.45)" rotation={2} />

      {/* Book Imprint Header */}
      <div className="relative z-20 text-center pt-2">
        <span className="font-cormorant tracking-[0.25em] text-[10px] sm:text-xs text-[#8A6A52] uppercase font-bold">
          Preliminary Notice • Imprint
        </span>
        <div className="w-12 h-[1px] bg-[#C7A46A]/60 mx-auto mt-1" />
      </div>

      {/* Center Disclaimers Content */}
      <div className="relative z-20 my-auto px-2 sm:px-4 flex flex-col gap-5 sm:gap-6">
        
        {/* Cute Hello Kitty / Kitten Badge */}
        <div className="flex justify-center -mb-1">
          <div className="relative p-1.5 bg-[#FFF9EF] border border-[#D9A6A6] rounded-full shadow-sm">
            <img
              src="/stickers/hello-kitty-sorry.jpg"
              alt="Cute apology character"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-full"
            />
            {/* Small flower brooch */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#D9A6A6] rounded-full flex items-center justify-center text-[10px] text-white shadow">
              <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="5" fill="#FFF9EF" />
                <circle cx="10" cy="10" r="2.5" fill="#455B45" />
              </svg>
            </div>
          </div>
        </div>

        {/* Disclaimer 01: Literary Style */}
        <div className="relative p-4 sm:p-5 bg-[#F3E8D5]/40 border border-[#8A6A52]/20 rounded-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bodoni font-bold text-xs tracking-wider text-[#455B45] uppercase">
              Disclaimer 01
            </span>
            <div className="flex-1 h-[1px] bg-[#C7A46A]/40" />
            <span className="font-cormorant italic text-[11px] text-[#8A6A52]">Standard Form</span>
          </div>
          
          <p className="font-cormorant text-base sm:text-lg leading-relaxed text-[#2C1E19]">
            “This book contains <span className="font-dancing font-bold text-[#8A6A52] text-lg sm:text-xl">no perfect characters</span>, several questionable decisions, and{' '}
            <span className="font-greatvibes text-[#964B4B] text-xl sm:text-2xl font-normal underline decoration-[#D9A6A6]/60">one genuinely sorry</span> author.”
          </p>
        </div>

        <OrnamentalDivider text="❦" className="my-0" />

        {/* Disclaimer 02: Humorous Author's Warning */}
        <div className="relative p-4 sm:p-5 bg-[#D9A6A6]/10 border border-[#D9A6A6]/60 rounded-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bodoni font-bold text-xs tracking-wider text-[#964B4B] uppercase">
              Disclaimer 02
            </span>
            <div className="flex-1 h-[1px] bg-[#D9A6A6]/60" />
            <span className="font-caveat font-bold text-xs text-[#8A6A52]">Special Warning</span>
          </div>

          <p className="font-lora text-sm sm:text-base leading-relaxed text-[#2C1E19]">
            <strong className="font-playfair text-[#455B45] tracking-wide">Warning:</strong> The author may repeat the same mistakes, but{' '}
            <span className="font-caveat font-bold text-[#455B45] text-lg sm:text-xl bg-[#9EAD91]/20 px-1 rounded">
              promises to keep improving
            </span>{' '}
            the storyline.
          </p>
        </div>

        {/* Small literary stamp */}
        <div className="text-center">
          <span className="font-cormorant italic text-xs text-[#8A6A52]/80">
            Published under the seal of honest reconciliation.
          </span>
        </div>
      </div>

      {/* Bottom Footer & Page Turn Instruction */}
      <div className="relative z-20 text-center pb-2">
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-1.5 font-cormorant italic text-xs sm:text-sm text-[#8A6A52] hover:text-[#455B45] transition-colors cursor-pointer"
        >
          <span>Swipe or click to view the apology gallery</span>
          <span className="transform transition-transform group-hover:translate-x-1">→</span>
        </button>
        <div className="mt-1 text-[10px] font-cormorant text-[#8A6A52]/70 tracking-widest uppercase">
          — Page 2 of 6 —
        </div>
      </div>
    </div>
  );
};

