
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully Joined! 🎉",
        description: "You're now on the RentAI waitlist. We'll notify you when it's ready!",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2">Ready to Transform Your Apartment Hunt?</h2>
        <p className="text-purple-100">Join thousands of others waiting for RentAI</p>
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email address"
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
            {isLoading ? 'Joining...' : 'Join Waitlist'}
          </Button>
        </div>
        <p className="text-sm text-purple-100 mt-4 text-center">
          No spam, ever. We'll only contact you when RentAI is ready to launch.
        </p>
      </form>
    </div>
  );
};

export default WaitlistForm;
