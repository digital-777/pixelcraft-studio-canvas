import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const StickyNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Set active section based on current page
    if (location.pathname === '/portfolio') {
      setActiveSection('portfolio');
    } else {
      setActiveSection('home');
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Only track sections if we're on the home page
      if (location.pathname === '/') {
        const sections = ['home', 'services', 'portfolio', 'testimonials', 'contact'];
        const scrollPosition = window.scrollY + 100; // Reduced offset for better detection
        
        // Special handling for home section
        if (scrollPosition < 300) {
          setActiveSection('home');
          return;
        }
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hello Team PixelCraft! 📸🧡\nI\'m looking to freeze some beautiful memories in time...\nCan you guide me on your session packages and next availability? 🕰️✨\nCan\'t wait to create timeless magic with you. 🎞️🌟');
    window.open(`https://wa.me/9313202075?text=${message}`, '_blank');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}>
            <span className="font-serif">PixelCraft</span>
            <span className="text-gold ml-2">Studio</span>
          </div>
          
          {location.pathname === '/' && (
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map(item => {
                const sectionId = item === 'Home' ? 'home' : item.toLowerCase();
                const isActive = activeSection === sectionId;
                const linkTo = item === 'Home' ? '/' : item === 'Portfolio' ? '/portfolio' : `/#${item.toLowerCase()}`;
                
                const handleClick = (e: React.MouseEvent) => {
                  if (item === 'Home') {
                    e.preventDefault();
                    if (location.pathname === '/') {
                      // If on home page, scroll to top
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      // If on other pages, navigate to home page
                      navigate('/');
                    }
                  } else if (item !== 'Portfolio') {
                    e.preventDefault();
                    if (location.pathname === '/') {
                      // If on home page, scroll to section
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else {
                      // If on other pages, navigate to home page and scroll to section
                      navigate(`/#${item.toLowerCase()}`);
                    }
                  }
                };
                
                return (
                  <Link
                    key={item}
                    to={linkTo}
                    onClick={handleClick}
                    className={`transition-colors duration-300 relative ${
                      isScrolled 
                        ? isActive 
                          ? 'text-gold font-semibold' 
                          : 'text-primary hover:text-gold'
                        : isActive 
                          ? 'text-gold font-semibold' 
                          : 'text-white hover:text-gold'
                    }`}
                  >
                    {item}
                    {isActive && (
                      <div className={`absolute -bottom-1 left-0 w-full h-0.5 transition-all duration-300 ${
                        isScrolled ? 'bg-gold' : 'bg-gold'
                      }`} />
                    )}
                  </Link>
                );
              })}
            </nav>
          )}

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
        {isMenuOpen && location.pathname === '/' && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-3 pt-4">
              {['Home', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map(item => {
                const sectionId = item === 'Home' ? 'home' : item.toLowerCase();
                const isActive = activeSection === sectionId;
                const linkTo = item === 'Home' ? '/' : item === 'Portfolio' ? '/portfolio' : `/#${item.toLowerCase()}`;
                
                const handleClick = (e: React.MouseEvent) => {
                  setIsMenuOpen(false);
                  if (item === 'Home') {
                    e.preventDefault();
                    if (location.pathname === '/') {
                      // If on home page, scroll to top
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      // If on other pages, navigate to home page
                      navigate('/');
                    }
                  } else if (item !== 'Portfolio') {
                    e.preventDefault();
                    if (location.pathname === '/') {
                      // If on home page, scroll to section
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else {
                      // If on other pages, navigate to home page and scroll to section
                      navigate(`/#${item.toLowerCase()}`);
                    }
                  }
                };
                
                return (
                  <Link
                    key={item}
                    to={linkTo}
                    onClick={handleClick}
                    className={`transition-colors duration-300 ${
                      isScrolled 
                        ? isActive 
                          ? 'text-gold font-semibold' 
                          : 'text-primary hover:text-gold'
                        : isActive 
                          ? 'text-gold font-semibold' 
                          : 'text-white hover:text-gold'
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
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