
import React from 'react';
import { cn } from '@/lib/utils';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main highlight circles */}
      <div className="absolute top-[25%] left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-900/20 to-blue-900/10 opacity-40 blur-3xl animate-float" style={{animationDuration: '20s'}} />
      <div className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-900/20 to-violet-900/10 opacity-30 blur-3xl animate-float" style={{animationDuration: '25s', animationDelay: '2s'}} />
      
      {/* Secondary subtle elements */}
      <div className="absolute top-[40%] right-[30%] w-32 h-32 rounded-full bg-purple-500/5 blur-xl animate-pulse-light" style={{animationDuration: '8s'}} />
      <div className="absolute bottom-[35%] left-[25%] w-40 h-40 rounded-full bg-blue-400/5 blur-xl animate-float" style={{animationDuration: '15s'}} />
      
      {/* Small particles */}
      {Array.from({ length: 15 }).map((_, index) => (
        <div 
          key={index}
          className={cn(
            "absolute rounded-full blur-sm",
            "animate-float opacity-20"
          )}
          style={{
            width: `${5 + Math.random() * 10}px`,
            height: `${5 + Math.random() * 10}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `rgba(${100 + Math.random() * 155}, ${50 + Math.random() * 100}, ${200 + Math.random() * 55}, 0.5)`,
            animationDuration: `${15 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}
      
      {/* Subtle glow at the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-purple-900/10 via-transparent to-transparent opacity-60" />
    </div>
  );
};

export default FloatingElements;
