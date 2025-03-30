
import React from 'react';

const BackgroundOverlay = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1629] via-[#121933] to-[#0c1023]"></div>
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Radial gradient at the center */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent"></div>
    </div>
  );
};

export default BackgroundOverlay;
