import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Briefcase, Baby, Shirt, Package, Camera, Clock, Star } from 'lucide-react';
import StickyNav from '@/components/StickyNav';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PageLoader } from '@/components/ui/loader';

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Capturing your special day with elegance and emotion',
      features: ['Full day coverage', 'Bridal preparations', 'Ceremony & reception', 'Couple portraits'],
      price: 'Starting from $999'
    },
    {
      icon: Heart,
      title: 'Pre-Wedding Shoots',
      description: 'Romantic sessions that tell your love story',
      features: ['Location scouting', 'Multiple outfit changes', 'Natural & candid shots', 'Creative concepts'],
      price: 'Starting from $299'
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional coverage for business occasions',
      features: ['Conference photography', 'Team events', 'Executive portraits', 'Product launches'],
      price: 'Starting from $599'
    },
    {
      icon: Baby,
      title: 'Maternity Shoots',
      description: 'Beautiful moments of expecting mothers',
      features: ['Studio & outdoor options', 'Prop styling', 'Partner & family shots', 'Artistic poses'],
      price: 'Starting from $399'
    },
    {
      icon: Shirt,
      title: 'Fashion Photography',
      description: 'High-end fashion and portrait sessions',
      features: ['Model portfolios', 'Brand campaigns', 'Editorial shoots', 'Style consulting'],
      price: 'Starting from $799'
    },
    {
      icon: Package,
      title: 'Product Photography',
      description: 'Stunning commercial product imagery',
      features: ['E-commerce photos', 'Lifestyle shots', 'White background', 'Creative styling'],
      price: 'Starting from $199'
    }
  ];

  const additionalServices = [
    { icon: Camera, title: 'Event Photography', description: 'Birthday parties, anniversaries, and celebrations' },
    { icon: Users, title: 'Family Portraits', description: 'Timeless family memories in beautiful settings' },
    { icon: Star, title: 'Personal Branding', description: 'Professional headshots for entrepreneurs and professionals' }
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hello Team PixelCraft! 📸🧡\nI\'m interested in your photography services...\nCan you provide more details about packages and availability? 🕰️✨');
    window.open(`https://wa.me/9313202075?text=${message}`, '_blank');
  };

  if (isLoading) {
    return <PageLoader message="Loading our services..." />;
  }

  return (
    <div className="min-h-screen bg-background">
      <StickyNav />
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary/10 to-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Photography
              <span className="block text-gold">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional photography services tailored to capture your unique moments with artistry and passion
            </p>
            <Button onClick={openWhatsApp} size="lg" className="btn-gold">
              <Clock className="w-5 h-5 mr-2" />
              Book a Session
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From intimate moments to grand celebrations, we cover every aspect of your photography needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-on-scroll">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-center">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gold mb-4">{service.price}</p>
                    <Button onClick={openWhatsApp} className="w-full" variant="outline">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-serif font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We also specialize in these photography services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-on-scroll">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Book Your Session?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your photography needs and create something beautiful together
            </p>
            <div className="space-x-4">
              <Button onClick={openWhatsApp} size="lg" className="btn-gold">
                Book Now
              </Button>
              <Button variant="outline" size="lg" onClick={openWhatsApp}>
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;