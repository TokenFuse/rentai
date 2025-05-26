
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Ungültige E-Mail",
        description: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        // Handle duplicate email error specifically
        if (error.code === '23505') {
          toast({
            title: "E-Mail bereits registriert",
            description: "Diese E-Mail-Adresse steht bereits auf der Warteliste!",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Erfolgreich angemeldet! 🎉",
          description: "Sie stehen jetzt auf der RentAI Warteliste. Wir benachrichtigen Sie, sobald es verfügbar ist!",
        });
        setEmail('');
      }
    } catch (error) {
      console.error('Error saving email:', error);
      toast({
        title: "Fehler",
        description: "Es gab einen Fehler beim Speichern Ihrer E-Mail. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2">Bereit, deine Wohnungssuche zu revolutionieren?</h2>
        <p className="text-purple-100">Schliesse dich Hunderten anderen an, die auf RentAI warten</p>
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Gib deine E-Mail-Adresse ein"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white text-gray-900 border-0 placeholder:text-gray-500"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg transition-all duration-200"
          >
            {isLoading ? 'Anmelden...' : 'Zur Warteliste'}
          </Button>
        </div>
        <p className="text-sm text-purple-100 mt-4 text-center">
          Kein Spam, niemals. Wir kontaktieren dich nur, wenn RentAI bereit für den Start ist.
        </p>
      </form>
    </div>
  );
};

export default WaitlistForm;
