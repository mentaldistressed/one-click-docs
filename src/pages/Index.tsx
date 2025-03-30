
import React from 'react';
import GenerateButton from "@/components/GenerateButton";
import FloatingElements from "@/components/FloatingElements";
import BackgroundOverlay from "@/components/BackgroundOverlay";
import Logo from "@/components/Logo";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <BackgroundOverlay />
      <FloatingElements />
      
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center animate-fade-in">
        <Logo />
        
        <div className="text-sm text-foreground/70">
          Профессиональные документы в один клик
        </div>
      </header>
      
      <main className="flex-1 w-full max-w-4xl mx-auto flex flex-col items-center justify-center px-6 py-12">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-tight">
            Автоматическая генерация<br />всех ваших документов
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Создавайте профессиональные документы за считанные секунды с помощью нашего интеллектуального генератора
          </p>
          
          <div className="mt-10 pt-4 animate-scale-in">
            <GenerateButton />
          </div>
        </div>
      </main>
      
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 text-center text-sm text-foreground/50 animate-fade-in">
        <p>© 2023 DocuGen. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;
