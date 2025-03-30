
import React from 'react';

const BackgroundOverlay = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#080808]"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07),transparent_70%)] animate-pulse-light" style={{animationDuration: '10s'}}></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)] animate-pulse-light" style={{animationDuration: '8s', animationDelay: '3s'}}></div>
      </div>
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Light beam effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-32 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)] rotate-[30deg] animate-pulse-light" style={{animationDuration: '15s'}}></div>
      
      {/* Star-like subtle light points */}
      {Array.from({ length: 20 }).map((_, index) => (
        <div 
          key={index}
          className="absolute w-[1px] h-[1px] rounded-full bg-white opacity-70 animate-pulse-light"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default BackgroundOverlay;
