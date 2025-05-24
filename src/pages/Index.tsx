
import React, { useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import WaitlistForm from '@/components/WaitlistForm';

const Index = () => {
  const waitlistRef = useRef<HTMLDivElement>(null);

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: "🔍",
      title: "Automatic Search",
      description: "Our AI continuously scans multiple rental platforms, finding new listings that match your criteria 24/7."
    },
    {
      icon: "🎯",
      title: "Smart Filtering",
      description: "Advanced filters beyond basic search - commute time, neighborhood safety, nearby amenities, and more."
    },
    {
      icon: "⭐",
      title: "AI Scoring System",
      description: "Each apartment gets a personalized compatibility score based on your preferences and lifestyle."
    },
    {
      icon: "⚡",
      title: "Auto Applications",
      description: "Skip the manual work - RentAI applies to your top matches automatically with your pre-filled information."
    },
    {
      icon: "📱",
      title: "Instant Notifications",
      description: "Get notified immediately when we find great matches or receive responses from landlords."
    },
    {
      icon: "🏠",
      title: "Market Insights",
      description: "Understand rental trends, price predictions, and neighborhood analysis to make informed decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg"></div>
          <span className="text-2xl font-bold text-gray-900">RentAI</span>
        </div>
        <button 
          onClick={scrollToWaitlist}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
        >
          Join Waitlist
        </button>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <HeroSection onJoinWaitlist={scrollToWaitlist} />

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How RentAI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform handles every step of your apartment search, 
              from discovery to application, so you can focus on what matters most.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 mb-20 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10,000+</div>
              <div className="text-gray-600">People on Waitlist</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate in Beta</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">72 hrs</div>
              <div className="text-gray-600">Average Time to Find Perfect Match</div>
            </div>
          </div>
        </div>

        {/* Waitlist Form */}
        <div ref={waitlistRef}>
          <WaitlistForm />
        </div>

        {/* Footer */}
        <footer className="text-center mt-20 py-8 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded"></div>
            <span className="text-xl font-bold text-gray-900">RentAI</span>
          </div>
          <p className="text-gray-600 mb-4">
            Revolutionizing apartment hunting with artificial intelligence
          </p>
          <p className="text-sm text-gray-500">
            © 2024 RentAI. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
