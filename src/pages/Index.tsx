
import React from 'react';
import GenerateButton from "@/components/GenerateButton";
import FloatingElements from "@/components/FloatingElements";
import BackgroundOverlay from "@/components/BackgroundOverlay";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <BackgroundOverlay />
      <FloatingElements />
      
      <main className="flex-1 w-full flex flex-col items-center justify-center px-6 py-12">
        <div className="animate-scale-in">
          <GenerateButton />
        </div>
      </main>
    </div>
  );
};

export default Index;
