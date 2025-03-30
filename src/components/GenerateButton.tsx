import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const GenerateButton = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Show loading state briefly before redirecting
    setTimeout(() => {
      // Redirect to the specified URL
      window.location.href = 'https://docs.rpluslb.ru';
      
      setIsGenerating(false);
      toast({
        title: "Перенаправление...",
        description: "Вы будете перенаправлены на docs.rpluslb.ru",
        variant: "default",
      });
    }, 1000);
  };

  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-white/50 to-white/30 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse-light"></div>
      
      {/* Main button */}
      <Button
        onClick={handleGenerate}
        disabled={isGenerating}
        className={cn(
          "relative min-w-[260px] h-16 px-10 text-lg font-medium rounded-full overflow-hidden z-10",
          "bg-black border border-white/30 hover:bg-zinc-900",
          "shadow-[0_8px_30px_rgb(0,0,0,0.36)]",
          "transition-all duration-500 ease-out",
          isGenerating ? "opacity-90" : "opacity-100",
          "disabled:text-white/70 disabled:border-white/20"
        )}
      >
        <span className={cn(
          "absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_40%)]",
        )}></span>
        
        <span className={cn(
          "flex items-center justify-center gap-2 transition-all duration-300",
          isGenerating ? "opacity-0" : "opacity-100"
        )}>
          Генерация договора
        </span>
        
        <span className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-300",
          isGenerating ? "opacity-100" : "opacity-0"
        )}>
          <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      </Button>
      
      {/* Interactive particle effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full max-w-[400px] max-h-[400px]">
          {Array.from({ length: 8 }).map((_, index) => (
            <div 
              key={index} 
              className={cn(
                "absolute w-1 h-1 rounded-full bg-white",
                "animate-float opacity-0 group-hover:opacity-70"
              )}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenerateButton;
