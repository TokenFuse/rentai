
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
      title: "Automatische Suche",
      description: "Unsere KI durchsucht kontinuierlich mehrere Mietplattformen und findet neue Angebote, die Ihren Kriterien entsprechen - 24/7."
    },
    {
      icon: "🎯",
      title: "Intelligente Filter",
      description: "Erweiterte Filter über die Grundsuche hinaus - Pendelzeit, Nachbarschaftssicherheit, nahegelegene Annehmlichkeiten und mehr."
    },
    {
      icon: "⭐",
      title: "KI-Bewertungssystem",
      description: "Jede Wohnung erhält eine personalisierte Kompatibilitätsbewertung basierend auf Ihren Vorlieben und Ihrem Lebensstil."
    },
    {
      icon: "⚡",
      title: "Auto-Bewerbungen",
      description: "Überspringen Sie die manuelle Arbeit - RentAI bewirbt sich automatisch auf Ihre Top-Matches mit Ihren vorausgefüllten Informationen."
    },
    {
      icon: "📱",
      title: "Sofortige Benachrichtigungen",
      description: "Werden Sie sofort benachrichtigt, wenn wir großartige Matches finden oder Antworten von Vermietern erhalten."
    },
    {
      icon: "🏠",
      title: "Markteinblicke",
      description: "Verstehen Sie Miettrends, Preisprognosen und Nachbarschaftsanalysen, um fundierte Entscheidungen zu treffen."
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
          Zur Warteliste
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
              Wie RentAI funktioniert
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unsere KI-gestützte Plattform übernimmt jeden Schritt Ihrer Wohnungssuche, 
              von der Entdeckung bis zur Bewerbung, damit Sie sich auf das Wesentliche konzentrieren können.
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
              <div className="text-4xl font-bold text-purple-600 mb-2">752</div>
              <div className="text-gray-600">Personen auf der Warteliste</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Erfolgsrate in der Beta</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">5 Std</div>
              <div className="text-gray-600">Durchschnittliche Zeit für perfekte Übereinstimmung</div>
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
            Revolutionierung der Wohnungssuche mit künstlicher Intelligenz
          </p>
          <p className="text-sm text-gray-500">
            © 2024 RentAI. Alle Rechte vorbehalten. | Datenschutzrichtlinie | Nutzungsbedingungen
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
