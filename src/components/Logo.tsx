
import React from 'react';
import { FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-white/20 rounded-xl opacity-80 animate-pulse-light"></div>
        <FileText className="w-5 h-5 text-white relative z-10" />
      </div>
      <div className="font-semibold text-xl text-gradient">DocuGen</div>
    </div>
  );
};

export default Logo;
