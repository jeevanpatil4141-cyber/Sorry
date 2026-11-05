import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CoverPage } from './pages/CoverPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { ApologyGallery } from './pages/ApologyGallery';
import { ForgivenessPage } from './pages/ForgivenessPage';
import { MusicalPage } from './pages/MusicalPage';
import { BackCoverPage } from './pages/BackCoverPage';
import { sounds } from '../utils/audio';
import { Volume2, VolumeX, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

interface BookProps {
  onPageChange?: (pageIndex: number) => void;
}

export const Book: React.FC<BookProps> = ({ onPageChange }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [hasForgiven, setHasForgiven] = useState<boolean>(false);

  const totalPages = 6;
  const bookRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Turn to specific page with sound effect & 3D flipping animation
  const goToPage = useCallback((targetPage: number, direction?: 'next' | 'prev') => {
    if (isFlipping) return;
    if (targetPage < 0 || targetPage >= totalPages) return;
    if (targetPage === currentPage) return;

    const dir = direction || (targetPage > currentPage ? 'next' : 'prev');
    setFlipDirection(dir);
    setIsFlipping(true);
    sounds.playPageTurn();

    setTimeout(() => {
      setCurrentPage(targetPage);
      onPageChange?.(targetPage);
      setTimeout(() => {
        setIsFlipping(false);
      }, 350);
    }, 320);
  }, [currentPage, isFlipping, onPageChange, totalPages]);

  const handleNext = useCallback(() => {
    if (currentPage < totalPages - 1) {
      goToPage(currentPage + 1, 'next');
    }
  }, [currentPage, goToPage, totalPages]);

  const handlePrev = useCallback(() => {
    if (currentPage > 0) {
      goToPage(currentPage - 1, 'prev');
    }
  }, [currentPage, goToPage]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    // If target is an interactive button or slider, or interacting on the Forgiveness Page, don't hijack swipe
    const target = e.target as HTMLElement;
    if (
      target.closest('button') ||
      target.closest('a') ||
      (currentPage === 3 && !hasForgiven)
    ) {
      touchStartX.current = null;
      touchStartY.current = null;
      return;
    }
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Verify horizontal swipe intent (horizontal distance > 45px and more horizontal than vertical)
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // Swiped Left -> Go to Next Page
        handleNext();
      } else {
        // Swiped Right -> Go to Prev Page
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Keyboard navigation (Left / Right Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Toggle Mute Audio
  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  // Render Page Content
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 0:
        return <CoverPage onOpen={handleNext} />;
      case 1:
        return <DisclaimerPage onNext={handleNext} />;
      case 2:
        return <ApologyGallery onNext={handleNext} />;
      case 3:
        return (
          <ForgivenessPage
            onNext={handleNext}
            onForgivenStateChange={setHasForgiven}
          />
        );
      case 4:
        return <MusicalPage onNext={handleNext} />;
      case 5:
        return <BackCoverPage onRestart={() => goToPage(0, 'prev')} />;
      default:
        return <CoverPage onOpen={handleNext} />;
    }
  };

  const pageTitles = [
    'Front Cover',
    'Disclaimers',
    'Apology Gallery',
    'The Question',
    'Musical Apology',
    'Back Cover',
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 select-none">
      
      {/* Top Floating Controls Bar */}
      <header className="w-full max-w-md sm:max-w-lg flex items-center justify-between px-3 py-2 z-40 text-[#FFF9EF]/80">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#C7A46A]" />
          <span className="font-cormorant text-xs sm:text-sm tracking-wider uppercase text-[#F3E8D5] font-semibold">
            {pageTitles[currentPage]}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Audio Mute/Unmute */}
          <button
            onClick={toggleAudio}
            className="p-1.5 rounded-full bg-[#3D271D]/60 hover:bg-[#3D271D] text-[#C7A46A] border border-[#C7A46A]/30 transition-colors shadow-sm cursor-pointer"
            title={isMuted ? 'Unmute paper sounds' : 'Mute paper sounds'}
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Physical Storybook Stage */}
      <div className="relative w-full max-w-[420px] sm:max-w-[460px] md:max-w-[490px] h-[82vh] sm:h-[84vh] max-h-[760px] min-h-[520px] flex items-center justify-center perspective-[2000px]">
        
        {/* Book Spine Outer Frame & Hardcover Leather/Linen Rim */}
        <div className="absolute inset-0 bg-[#1D1410] rounded-[6px] shadow-book-outer transform -rotate-[0.5deg] scale-[1.01] pointer-events-none" />
        
        {/* Underneath Page Stack Effect (Simulates thickness of real book pages) */}
        <div className="absolute -right-2 top-2 bottom-2 w-3 bg-[#E5D8C3] rounded-r-sm border-r border-[#C7A46A]/40 shadow-sm pointer-events-none opacity-80" />
        <div className="absolute -right-1 top-1 bottom-1 w-2 bg-[#EFE3CF] rounded-r-sm border-r border-[#C7A46A]/30 shadow-sm pointer-events-none opacity-90" />
        <div className="absolute -bottom-1 left-2 right-2 h-2 bg-[#E5D8C3] rounded-b-sm border-b border-[#C7A46A]/30 shadow-sm pointer-events-none opacity-80" />

        {/* The Active Page with 3D Flip Mechanics */}
        <main
          ref={bookRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`relative w-full h-full rounded-[4px] overflow-hidden transform-gpu transition-all duration-300 ease-out z-20 ${
            isFlipping
              ? flipDirection === 'next'
                ? 'rotate-y-[-16deg] translate-x-[-8px] scale-[0.985] shadow-2xl'
                : 'rotate-y-[16deg] translate-x-[8px] scale-[0.985] shadow-2xl'
              : 'rotate-y-0 translate-x-0 scale-100 shadow-xl'
          }`}
          style={{
            transformOrigin: flipDirection === 'next' ? 'left center' : 'right center',
          }}
        >
          {/* Dynamic 3D Page Turning Crease Shadow Overlay */}
          <div
            className={`absolute inset-0 pointer-events-none z-40 transition-opacity duration-300 ${
              isFlipping
                ? 'opacity-35 bg-gradient-to-r from-transparent via-[#2C1E19]/40 to-transparent'
                : 'opacity-0'
            }`}
          />

          {/* Page Content */}
          <div className="w-full h-full relative">
            {renderCurrentPage()}
          </div>
        </main>

        {/* Left Bookmark Leaf Arrow */}
        {currentPage > 0 && (
          <button
            onClick={handlePrev}
            disabled={isFlipping}
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-40 w-9 h-11 sm:w-11 sm:h-14 rounded-l-full bg-[#FFF9EF] text-[#455B45] border border-r-0 border-[#C7A46A]/60 shadow-md flex items-center justify-start pl-1 sm:pl-2 hover:bg-[#F3E8D5] active:scale-90 transition-all cursor-pointer opacity-90 hover:opacity-100"
            aria-label="Previous Page"
            title="Previous Page"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Right Bookmark Leaf Arrow */}
        {currentPage < totalPages - 1 && (
          <button
            onClick={handleNext}
            disabled={isFlipping}
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-40 w-9 h-11 sm:w-11 sm:h-14 rounded-r-full bg-[#FFF9EF] text-[#455B45] border border-l-0 border-[#C7A46A]/60 shadow-md flex items-center justify-end pr-1 sm:pr-2 hover:bg-[#F3E8D5] active:scale-90 transition-all cursor-pointer opacity-90 hover:opacity-100 animate-pulse"
            aria-label="Next Page"
            title="Next Page"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Bottom Reading Status & Quick Page Jump Bar */}
      <footer className="w-full max-w-md sm:max-w-lg mt-3 flex flex-col items-center gap-1.5 z-40">
        
        {/* Dots Pagination */}
        <nav aria-label="Book pages" className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentPage === idx
                  ? 'w-7 h-2 bg-[#C7A46A] shadow-sm'
                  : 'w-2 h-2 bg-[#FFF9EF]/40 hover:bg-[#FFF9EF]/80'
              }`}
              title={`Jump to Page ${idx + 1}: ${pageTitles[idx]}`}
              aria-label={`Jump to Page ${idx + 1}: ${pageTitles[idx]}`}
            />
          ))}
        </nav>

        {/* Elegant Micro-instruction */}
        <p className="font-cormorant italic text-xs text-[#F3E8D5]/70 tracking-wider">
          Swipe horizontally or tap page edges to turn • Page {currentPage + 1} of {totalPages}
        </p>
      </footer>
    </div>
  );
};

