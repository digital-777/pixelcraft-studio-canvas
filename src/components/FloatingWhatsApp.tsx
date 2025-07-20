import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingWhatsApp = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/9313202075?text=Hi! I would like to book a photography session.', '_blank');
  };

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
      size="lg"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};

export default FloatingWhatsApp;