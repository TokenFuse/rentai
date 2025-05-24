
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

const HeroSection = ({ onJoinWaitlist }: HeroSectionProps) => {
  return (
    <div className="text-center mb-16">
      <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-8">
        🚀 Coming Soon - Revolutionary AI Technology
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Find Your Perfect
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block">
          Apartment with AI
        </span>
      </h1>
      
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        RentAI automatically searches, filters, scores, and applies to apartments that match your preferences. 
        Say goodbye to endless scrolling and manual applications.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          onClick={onJoinWaitlist}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Join Free Waitlist
        </Button>
        <p className="text-sm text-gray-500">
          🎉 First 1000 users get lifetime free access
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
