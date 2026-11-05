import React from 'react';
import { Book } from './components/Book';
import { FloatingPetals } from './components/FloatingPetals';

export const App: React.FC = () => {
  return (
    <div className="relative w-screen h-screen h-[100dvh] overflow-hidden flex flex-col items-center justify-center">
      {/* Background Ambient Lighting & Vignette */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,rgba(199,164,106,0.08)_0%,rgba(0,0,0,0.45)_100%)]" />

      {/* Floating Rose Petals Particle System */}
      <FloatingPetals count={16} active={true} />

      {/* The Storybook Core */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <Book />
      </div>
    </div>
  );
};

export default App;

