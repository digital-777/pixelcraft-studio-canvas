import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StickyNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/9313202075?text=Hi! I would like to book a photography session.', '_blank');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            <span className="font-serif">PixelCraft</span>
            <span className="text-gold ml-2">Studio</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map(item => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className="text-foreground hover:text-gold transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Instagram className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button onClick={openWhatsApp} className="btn-gold">
              Book Now
            </Button>
          </div>

          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-3 pt-4">
              {['Home', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map(item => (
                <a
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  className="text-foreground hover:text-gold transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button onClick={openWhatsApp} className="btn-gold">
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default StickyNav;