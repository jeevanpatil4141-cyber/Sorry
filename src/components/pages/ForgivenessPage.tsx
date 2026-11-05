import React, { useState, useRef, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { BotanicalCorner, OrnamentalDivider, WaxSeal } from '../FloralElements';
import { sounds } from '../../utils/audio';

export const ForgivenessPage: React.FC<{
  onNext?: () => void;
  onForgivenStateChange?: (forgiven: boolean) => void;
}> = ({ onNext, onForgivenStateChange }) => {
  const [hasForgiven, setHasForgiven] = useState<boolean>(false);
  const [dodgeCount, setDodgeCount] = useState<number>(0);
  const [noPosition, setNoPosition] = useState<{ x: number; y: number; rotate: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const noBtnRef = useRef<HTMLButtonElement>(null);
  const lastDodgeTime = useRef<number>(0);

  // Playful status micro-messages that update as she chases the NO button
  const dodgeMessages = [
    "Wait, are you sure? Look at those kitten eyes!",
    "Oops! The NO button slipped away!",
    "Notice how YES is getting bigger and friendlier?",
    "Error 404: 'NO' is temporarily out of order!",
    "Look how bright and shiny YES is now!",
    "The button refused to be clicked!",
    "Resistance is futile, YES is inevitable!",
  ];

  // Subtitles for the expanding YES button
  const yesSubtitles = [
    "(Please)",
    "(Look, I'm growing!)",
    "(Much easier to click!)",
    "(I'm right here!)",
    "(A sign from destiny!)",
    "(The only right choice!)",
  ];

  // Smooth progressive scale for YES button (centered, never overflows)
  // Starts at 1.0, increases smoothly up to ~1.6
  const yesScale = Math.min(1 + dodgeCount * 0.11, 1.62);

  // Playful runaway logic
  const triggerDodge = useCallback((cursorX?: number, cursorY?: number) => {
    if (hasForgiven) return;

    // Debounce very rapid triggers (at least 140ms between jumps)
    const now = Date.now();
    if (now - lastDodgeTime.current < 140) return;
    lastDodgeTime.current = now;

    sounds.playDodge();
    setDodgeCount((prev) => prev + 1);

    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();

    // Safe boundaries: keep button inside page, avoiding borders and headers
    const safePaddingX = 22;
    const safeTop = containerRect.height * 0.42;
    const safeBottom = containerRect.height * 0.82;
    const btnWidth = 78;
    const btnHeight = 38;

    const minX = safePaddingX;
    const maxX = Math.max(minX + 20, containerRect.width - safePaddingX - btnWidth);
    const minY = safeTop;
    const maxY = Math.max(minY + 20, safeBottom - btnHeight);

    // Pick new random coordinates that are sufficiently far from current pointer/touch
    let candidateX = minX + Math.random() * (maxX - minX);
    let candidateY = minY + Math.random() * (maxY - minY);

    // If cursor coordinates are known, ensure candidate is at least 75px away
    if (cursorX !== undefined && cursorY !== undefined) {
      const relCursorX = cursorX - containerRect.left;
      const relCursorY = cursorY - containerRect.top;
      for (let attempt = 0; attempt < 8; attempt++) {
        const dist = Math.hypot(candidateX - relCursorX, candidateY - relCursorY);
        if (dist > 75) break;
        candidateX = minX + Math.random() * (maxX - minX);
        candidateY = minY + Math.random() * (maxY - minY);
      }
    }

    // Playful rotation angle between -12deg and +12deg to look like it skidded
    const randomRotate = Math.round((Math.random() * 24 - 12));

    setNoPosition({
      x: Math.round(candidateX),
      y: Math.round(candidateY),
      rotate: randomRotate,
    });
  }, [hasForgiven]);

  // Handle pointer/touch interaction on NO button
  const handleNoInteraction = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    let clientX: number | undefined;
    let clientY: number | undefined;

    if ('touches' in e && (e as React.TouchEvent).touches.length > 0) {
      clientX = (e as React.TouchEvent).touches[0].clientX;
      clientY = (e as React.TouchEvent).touches[0].clientY;
    } else if ('clientX' in e) {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    triggerDodge(clientX, clientY);
  };

  // Proximity detection on desktop: when cursor gets close to the NO button, run away
  const handleContainerMouseMove = (e: React.MouseEvent) => {
    if (hasForgiven || !noBtnRef.current) return;
    const btnRect = noBtnRef.current.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

    // If cursor gets within 60px of the button center, run away!
    if (dist < 60) {
      triggerDodge(e.clientX, e.clientY);
    }
  };

  // Handle YES button click
  const handleYesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setHasForgiven(true);
    onForgivenStateChange?.(true);
    sounds.playChime();

    // Trigger flower petal celebration with canvas-confetti
    try {
      const petalColors = ['#D9A6A6', '#F2D6D0', '#FFF9EF', '#C7A46A', '#9EAD91'];
      
      confetti({
        particleCount: 55,
        spread: 80,
        origin: { y: 0.6 },
        colors: petalColors,
        scalar: 1.25,
        shapes: ['circle'],
        ticks: 280,
      });

      setTimeout(() => {
        confetti({
          particleCount: 45,
          angle: 60,
          spread: 60,
          origin: { x: 0.15, y: 0.65 },
          colors: petalColors,
        });
        confetti({
          particleCount: 45,
          angle: 120,
          spread: 60,
          origin: { x: 0.85, y: 0.65 },
          colors: petalColors,
        });
      }, 260);
    } catch {
      // Confetti fallback
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleContainerMouseMove}
      className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-[#FFF9EF] text-vintage-ink overflow-hidden shadow-vintage-paper rounded-sm select-none border-l-2 border-[#8A6A52]/20 no-dodge-zone"
    >
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply z-0"
        style={{
          backgroundImage: `radial-gradient(#8A6A52 0.75px, transparent 0.75px), radial-gradient(#8A6A52 0.75px, #FFF9EF 0.75px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px',
        }}
      />

      {/* Corners */}
      <BotanicalCorner position="top-left" size={60} className="top-2 left-2 z-10" />
      <BotanicalCorner position="top-right" size={60} className="top-2 right-2 z-10" />
      <BotanicalCorner position="bottom-left" size={60} className="bottom-2 left-2 z-10" />
      <BotanicalCorner position="bottom-right" size={60} className="bottom-2 right-2 z-10" />

      {/* Chapter Header */}
      <div className="relative z-10 text-center pt-2">
        <span className="font-cormorant tracking-[0.25em] text-[10px] sm:text-xs text-[#8A6A52] uppercase font-bold">
          Chapter Three • The Verdict
        </span>
        <div className="w-16 h-[1px] bg-[#C7A46A]/60 mx-auto mt-1" />
      </div>

      {/* Main Interactive Stage */}
      <div className="relative z-10 my-auto text-center flex flex-col items-center px-2">
        
        {/* Character Illustration Holding Bouquet */}
        <div className="relative mb-3">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#D9A6A6] p-1 bg-white shadow-md mx-auto">
            <img
              src="/stickers/fluffy-kitten-standing.jpg"
              alt="Cute kitten asking for forgiveness"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Heart Badge */}
          <div className="absolute -bottom-2 right-1 transform translate-x-1">
            <WaxSeal className="w-8 h-8 scale-90" label="♥" />
          </div>
        </div>

        {/* Main Question */}
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#2C1E19] tracking-tight mb-1">
          Do you forgive me?
        </h2>

        <p className="font-caveat text-base sm:text-lg text-[#8A6A52] max-w-[280px] leading-tight min-h-[44px] flex items-center justify-center">
          {hasForgiven
            ? "Your kindness is the sweetest chapter in this book."
            : dodgeCount > 0
            ? dodgeMessages[Math.min(dodgeCount - 1, dodgeMessages.length - 1)]
            : "Please take a gentle breath before deciding..."}
        </p>

        <OrnamentalDivider className="my-1.5" />

        {/* Success State When YES is Clicked */}
        {hasForgiven ? (
          <div className="mt-2 p-4 bg-[#F2D6D0]/40 border border-[#D9A6A6] rounded-sm max-w-[320px] shadow-sm animate-fade-in">
            <div className="flex items-center justify-center gap-1.5 mb-1.5">
              <span className="text-sm font-dancing text-[#964B4B] font-bold">Forever Grateful</span>
            </div>
            <p className="font-cormorant text-base sm:text-lg text-[#2C1E19] leading-snug italic font-medium">
              “That means a lot. Thank you for giving this little story another chance.”
            </p>
            
            <div className="mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext?.();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#455B45] text-[#FFF9EF] font-cormorant text-sm uppercase tracking-wider rounded-sm shadow-md hover:bg-[#334433] transition-colors cursor-pointer"
              >
                <span>Turn to Page 5 for Our Song</span>
                <span className="text-base">→</span>
              </button>
            </div>
          </div>
        ) : (
          /* Normal State: Interactive Centered YES Button & Escaping NO Button */
          <div className="relative mt-3 w-full min-h-[110px] flex items-center justify-center">
            
            {/* Centered YES Button - Progressively grows smoothly on every NO escape */}
            <div
              style={{
                transform: `scale(${yesScale})`,
                transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease',
              }}
              className="z-20 relative"
            >
              <button
                onClick={handleYesClick}
                className="px-6 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-[#D9A6A6] via-[#F2D6D0] to-[#D9A6A6] text-[#2C1E19] font-playfair font-bold text-base sm:text-lg rounded-full shadow-md hover:shadow-lg border border-[#C7A46A]/60 hover:brightness-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                aria-label="Yes, I forgive you"
              >
                <span>YES</span>
                <span className="text-xs font-cormorant italic tracking-wide text-[#455B45]">
                  {yesSubtitles[Math.min(dodgeCount, yesSubtitles.length - 1)]}
                </span>
              </button>
            </div>

            {/* Runaway NO Button */}
            {noPosition === null ? (
              /* Initial position next to YES */
              <div className="ml-5 z-30">
                <button
                  ref={noBtnRef}
                  onMouseEnter={handleNoInteraction}
                  onPointerEnter={handleNoInteraction}
                  onTouchStart={handleNoInteraction}
                  onPointerDown={handleNoInteraction}
                  onClick={handleNoInteraction}
                  className="px-5 py-2 bg-[#F3E8D5] text-[#8A6A52] font-cormorant text-sm font-semibold tracking-wider rounded-full border border-[#8A6A52]/30 shadow-sm cursor-pointer hover:bg-white transition-all select-none touch-none"
                  aria-label="No"
                >
                  NO
                </button>
              </div>
            ) : (
              /* Flying NO button stationed at random coordinate within container */
              <div
                style={{
                  position: 'absolute',
                  left: `${noPosition.x}px`,
                  top: `${noPosition.y}px`,
                  transform: `rotate(${noPosition.rotate}deg)`,
                  transition: 'left 0.28s cubic-bezier(0.2, 0.9, 0.3, 1.2), top 0.28s cubic-bezier(0.2, 0.9, 0.3, 1.2), transform 0.28s ease-out',
                }}
                className="z-30 pointer-events-auto"
              >
                <button
                  ref={noBtnRef}
                  onMouseEnter={handleNoInteraction}
                  onPointerEnter={handleNoInteraction}
                  onTouchStart={handleNoInteraction}
                  onPointerDown={handleNoInteraction}
                  onClick={handleNoInteraction}
                  className="px-4 py-1.5 bg-[#F3E8D5] text-[#8A6A52] font-cormorant text-xs sm:text-sm font-semibold tracking-wider rounded-full border border-[#8A6A52]/40 shadow-md cursor-pointer active:scale-90 select-none touch-none hover:bg-white"
                  aria-label="No"
                >
                  NO
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Footer & Page Turn Instruction */}
      <div className="relative z-10 text-center pb-2">
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-1.5 font-cormorant italic text-xs sm:text-sm text-[#8A6A52] hover:text-[#455B45] transition-colors cursor-pointer"
        >
          <span>Continue reading to our apology song</span>
          <span className="transform transition-transform group-hover:translate-x-1">→</span>
        </button>
        <div className="mt-1 text-[10px] font-cormorant text-[#8A6A52]/70 tracking-widest uppercase">
          — Page 4 of 6 —
        </div>
      </div>
    </div>
  );
};
