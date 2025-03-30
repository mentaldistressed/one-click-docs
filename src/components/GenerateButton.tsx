
import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const GenerateButton = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Simulate document generation
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Документы созданы!",
        description: "Все документы были успешно сгенерированы.",
        variant: "default",
      });
    }, 2000);
  };

  return (
    <div className="relative">
      <Button
        onClick={handleGenerate}
        disabled={isGenerating}
        className={cn(
          "relative min-w-[260px] h-14 px-8 text-lg font-medium rounded-full glass-card overflow-hidden transition-all duration-300",
          "bg-gradient-to-r from-purple-600/80 to-indigo-600/80 hover:from-purple-500/80 hover:to-indigo-500/80",
          "button-glow shine group",
          isGenerating ? "opacity-90" : "opacity-100"
        )}
      >
        <span className={cn(
          "flex items-center justify-center gap-2 transition-all duration-300",
          isGenerating ? "opacity-0" : "opacity-100"
        )}>
          <FileText className="w-5 h-5" />
          <span>Генерация документов</span>
        </span>
        
        <span className={cn(
          "absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300",
          isGenerating ? "opacity-100" : "opacity-0"
        )}>
          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Генерация...</span>
        </span>
      </Button>
    </div>
  );
};

export default GenerateButton;
