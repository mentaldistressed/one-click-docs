
import React from 'react';
import { cn } from '@/lib/utils';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Purple circle */}
      <div className="absolute top-[15%] left-[15%] w-64 h-64 rounded-full bg-gradient-purple opacity-20 blur-3xl animate-float" />
      
      {/* Blue circle */}
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-gradient-blue opacity-20 blur-3xl animate-float animation-delay-2000" />
      
      {/* Small shapes */}
      <div className="absolute top-[40%] right-[30%] w-24 h-24 rounded-full bg-purple-500/10 blur-xl animate-pulse-light" />
      <div className="absolute bottom-[30%] left-[25%] w-32 h-32 rounded-full bg-blue-400/10 blur-xl animate-float" />
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-dots opacity-50" />
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-background to-transparent" />
    </div>
  );
};

export default FloatingElements;
