import React, { useState } from 'react';
import { BotanicalCorner, OrnamentalDivider, VintageMusicArt, WashiTape } from '../FloralElements';

export const MusicalPage: React.FC<{ onNext?: () => void }> = ({ onNext }) => {
  const [isPlayingMelody, setIsPlayingMelody] = useState(false);

  // Official streaming link for Bhoothnath's "Chalo Jaane Do" (T-Series Official)
  const officialSongUrl = "https://www.youtube.com/results?search_query=chalo+jaane+do+bhoothnath+official+song";

  const handleOpenSong = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(officialSongUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-[#FFFDF9] text-vintage-ink overflow-hidden shadow-vintage-paper rounded-sm select-none border-l-2 border-[#8A6A52]/20">
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply z-0"
        style={{
          backgroundImage: `radial-gradient(#8A6A52 0.75px, transparent 0.75px), radial-gradient(#8A6A52 0.75px, #FFFDF9 0.75px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px',
        }}
      />

      {/* Corners */}
      <BotanicalCorner position="top-left" size={55} className="top-2 left-2 z-10" />
      <BotanicalCorner position="top-right" size={55} className="top-2 right-2 z-10" />
      <BotanicalCorner position="bottom-left" size={55} className="bottom-2 left-2 z-10" />
      <BotanicalCorner position="bottom-right" size={55} className="bottom-2 right-2 z-10" />

      {/* Washi Tape */}
      <WashiTape className="-top-1 left-16 z-20" color="rgba(217, 166, 166, 0.6)" rotation={-2} />

      {/* Chapter Header */}
      <div className="relative z-10 text-center pt-2">
        <span className="font-cormorant tracking-[0.25em] text-[10px] sm:text-xs text-[#8A6A52] uppercase font-bold">
          Chapter Four • A Musical Invitation
        </span>
        <div className="w-16 h-[1px] bg-[#C7A46A]/60 mx-auto mt-1" />
      </div>

      {/* Center Stage: Handwritten Invitation */}
      <div className="relative z-10 my-auto text-center flex flex-col items-center px-2 sm:px-4">
        
        {/* Vintage Music Player & Earbuds Illustration */}
        <div className="my-1">
          <VintageMusicArt />
        </div>

        {/* Vintage Ticket / Invitation Card */}
        <div className="relative p-4 sm:p-5 bg-[#F5EDE0] border border-[#C7A46A]/60 rounded-sm shadow-sm max-w-[340px] my-2 text-center">
          
          {/* Handwritten Invitation Message */}
          <p className="font-dancing text-lg sm:text-xl text-[#2C1E19] leading-snug mb-2 font-semibold">
            “If you have really forgiven me, then give me one of your earbuds and play the song...”
          </p>

          <OrnamentalDivider className="my-1.5" />

          {/* Main Visual Highlight: Chalo Jaane Do */}
          <div className="my-2">
            <h3 className="font-playfair text-2xl sm:text-3xl font-black text-[#964B4B] tracking-wide drop-shadow-sm">
              Chalo Jaane Do
            </h3>
            <p className="font-cormorant italic text-xs sm:text-sm text-[#455B45] font-semibold mt-0.5">
              Amitabh Bachchan • Bhoothnath
            </p>
          </div>

          <p className="font-lora italic text-[11px] sm:text-xs text-[#8A6A52] max-w-[260px] mx-auto leading-relaxed mt-2">
            “Chalo jaane do, ab chhodo bhi... itna gussa karke kya paoge?”
          </p>

          {/* Play Our Apology Song Button */}
          <div className="mt-4">
            <button
              onClick={handleOpenSong}
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#455B45] text-[#FFF9EF] font-cormorant text-sm uppercase tracking-widest rounded-full shadow-md hover:bg-[#324532] hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              aria-label="Play Our Apology Song"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="font-bold">Play Our Apology Song</span>
              <svg className="w-3.5 h-3.5 text-[#C7A46A] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>

        {/* Small gentle note */}
        <p className="font-caveat text-sm text-[#8A6A52] italic max-w-[260px]">
          One earbud in your ear, one in mine, and no more anger between us.
        </p>

      </div>

      {/* Bottom Footer & Page Turn Instruction */}
      <div className="relative z-10 text-center pb-2">
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-1.5 font-cormorant italic text-xs sm:text-sm text-[#8A6A52] hover:text-[#455B45] transition-colors cursor-pointer"
        >
          <span>Turn to the back cover of our story</span>
          <span className="transform transition-transform group-hover:translate-x-1">→</span>
        </button>
        <div className="mt-1 text-[10px] font-cormorant text-[#8A6A52]/70 tracking-widest uppercase">
          — Page 5 of 6 —
        </div>
      </div>
    </div>
  );
};

