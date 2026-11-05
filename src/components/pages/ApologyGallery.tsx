import React from 'react';
import { BotanicalCorner, WashiTape, WaxSeal } from '../FloralElements';

export const ApologyGallery: React.FC<{ onNext?: () => void }> = ({ onNext }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-[#FFFDF9] text-vintage-ink overflow-hidden shadow-vintage-paper rounded-sm select-none border-l-2 border-[#8A6A52]/20">
      {/* Background paper texture & subtle grid/scrapbook lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: `linear-gradient(#8A6A52 0.5px, transparent 0.5px), linear-gradient(90deg, #8A6A52 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(138,106,82,0.1)] z-10" />

      {/* Corners */}
      <BotanicalCorner position="top-left" size={50} className="top-1 left-1 z-20" />
      <BotanicalCorner position="top-right" size={50} className="top-1 right-1 z-20" />

      {/* Header */}
      <div className="relative z-20 text-center pt-1 mb-2">
        <span className="font-cormorant tracking-[0.2em] text-[10px] sm:text-xs text-[#8A6A52] uppercase font-bold">
          Chapter Two • The Scrapbook
        </span>
        <h2 className="font-playfair text-xl sm:text-2xl font-black text-[#2C1E19] tracking-tight mt-0.5">
          I AM REALLY SORRY!
        </h2>
        <p className="font-caveat text-sm sm:text-base text-[#964B4B] font-semibold -mt-0.5">
          A collection of flowers, chocolates & pleading eyes
        </p>
      </div>

      {/* Collage Area - Designed to fit smoothly on mobile without clipping */}
      <div className="relative z-20 flex-1 grid grid-cols-2 gap-2 sm:gap-3 items-center justify-center px-1 my-auto max-h-[72%] overflow-y-auto no-scrollbar">
        
        {/* Item 1: Kitten with Bouquet & KitKat (Uploaded Image 1) */}
        <div className="relative p-2 bg-[#FFF9EF] rounded-sm shadow-sticker border border-[#D9A6A6]/60 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
          <WashiTape className="-top-2 left-6 z-30" color="rgba(217, 166, 166, 0.75)" rotation={-4} />
          <div className="overflow-hidden rounded-sm bg-white p-1">
            <img
              src="/stickers/kitten-bouquet-kitkat.jpg"
              alt="Kitten with roses bouquet and KitKat"
              className="w-full h-24 sm:h-28 object-contain"
            />
          </div>
          <div className="mt-1 text-center">
            <span className="font-caveat font-bold text-xs sm:text-sm text-[#2C1E19]">
              “I Owe You Chocolates & Flowers!”
            </span>
          </div>
        </div>

        {/* Item 2: Fluffy standing kitten with pleading paws (Uploaded Image 3) */}
        <div className="relative p-2 bg-[#FFF9EF] rounded-sm shadow-sticker border border-[#9EAD91]/60 transform rotate-2 hover:rotate-0 transition-transform duration-300">
          <WashiTape className="-top-2 right-4 z-30" color="rgba(158, 173, 145, 0.75)" rotation={3} />
          <div className="overflow-hidden rounded-sm bg-white p-1">
            <img
              src="/stickers/fluffy-kitten-standing.jpg"
              alt="Fluffy kitten standing with pleading paws"
              className="w-full h-24 sm:h-28 object-contain"
            />
          </div>
          <div className="mt-1 text-center">
            <span className="font-caveat font-bold text-xs sm:text-sm text-[#455B45]">
              “One Very Sorry Human.”
            </span>
          </div>
        </div>

        {/* Item 3: Hello Kitty crying with red roses (Uploaded Image 4) */}
        <div className="relative p-2 bg-[#FFF9EF] rounded-sm shadow-sticker border border-[#D9A6A6]/60 transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="overflow-hidden rounded-sm bg-white p-1">
            <img
              src="/stickers/hello-kitty-roses.jpg"
              alt="Hello Kitty crying with red roses"
              className="w-full h-20 sm:h-24 object-contain"
            />
          </div>
          <div className="mt-1 text-center">
            <span className="font-dancing font-bold text-xs text-[#964B4B]">
              “Please Accept These Flowers.”
            </span>
          </div>
        </div>

        {/* Item 4: Cute Speech Bubble / Mini Letter card */}
        <div className="relative p-2.5 bg-[#F2D6D0]/30 rounded-sm shadow-sticker border border-[#D9A6A6] transform -rotate-1 flex flex-col justify-between h-full min-h-[95px]">
          <div className="flex items-center justify-between">
            <span className="font-cormorant font-bold text-[9px] tracking-wider text-[#8A6A52] uppercase">
              Urgent Dispatch
            </span>
            <div className="w-2 h-2 rounded-full bg-[#D9A6A6]" />
          </div>
          <p className="font-caveat text-sm sm:text-base leading-snug text-[#2C1E19] text-center my-1 font-semibold">
            “Sending Flowers Instead of Excuses. I Messed Up. I Know.”
          </p>
          <div className="text-right">
            <span className="font-dancing text-xs text-[#455B45]">Can we turn the page?</span>
          </div>
        </div>

        {/* Full-width sticker banner spanning both columns */}
        <div className="col-span-2 relative p-2 bg-[#F3E8D5]/60 border border-[#8A6A52]/30 rounded-sm shadow-sm flex items-center justify-between px-3">
          <div className="flex items-center gap-2">
            <WaxSeal className="w-8 h-8 scale-90" label="100%" />
            <div className="text-left">
              <p className="font-bodoni font-bold text-xs text-[#2C1E19]">
                “My Bad. Really. Truly. Sincerely.”
              </p>
              <p className="font-cormorant italic text-[11px] text-[#8A6A52]">
                100% Genuine Regret Guaranteed.
              </p>
            </div>
          </div>
          <span className="font-dancing font-bold text-xs text-[#455B45] whitespace-nowrap pl-1">
            Sorry, Sorry!
          </span>
        </div>

      </div>

      {/* Bottom Footer & Page Turn Instruction */}
      <div className="relative z-20 text-center pb-2 pt-1 border-t border-[#8A6A52]/15">
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-1.5 font-cormorant italic text-xs sm:text-sm text-[#8A6A52] hover:text-[#455B45] transition-colors cursor-pointer"
        >
          <span>Turn to the crucial question</span>
          <span className="transform transition-transform group-hover:translate-x-1">→</span>
        </button>
        <div className="mt-0.5 text-[10px] font-cormorant text-[#8A6A52]/70 tracking-widest uppercase">
          — Page 3 of 6 —
        </div>
      </div>
    </div>
  );
};

