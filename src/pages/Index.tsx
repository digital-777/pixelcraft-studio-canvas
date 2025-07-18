import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Camera, Heart, Users, Briefcase, Baby, Shirt, Package, Star, Phone, Mail, MapPin, Instagram, Facebook, Menu, X, Send } from 'lucide-react';

// Import images
import heroImage from '@/assets/hero-photographer.jpg';
import weddingSample from '@/assets/wedding-sample.jpg';
import corporateSample from '@/assets/corporate-sample.jpg';
import productSample from '@/assets/product-sample.jpg';
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const services = [{
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Capturing your special day with elegance and emotion'
  }, {
    icon: Heart,
    title: 'Pre-Wedding Shoots',
    description: 'Romantic sessions that tell your love story'
  }, {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Professional coverage for business occasions'
  }, {
    icon: Baby,
    title: 'Maternity Shoots',
    description: 'Beautiful moments of expecting mothers'
  }, {
    icon: Shirt,
    title: 'Fashion Photography',
    description: 'High-end fashion and portrait sessions'
  }, {
    icon: Package,
    title: 'Product Photography',
    description: 'Stunning commercial product imagery'
  }];
  const portfolioItems = [{
    id: 1,
    category: 'Wedding',
    image: weddingSample,
    title: 'Elegant Wedding'
  }, {
    id: 2,
    category: 'Corporate',
    image: corporateSample,
    title: 'Executive Portrait'
  }, {
    id: 3,
    category: 'Product',
    image: productSample,
    title: 'Luxury Product'
  }, {
    id: 4,
    category: 'Wedding',
    image: weddingSample,
    title: 'Romantic Ceremony'
  }, {
    id: 5,
    category: 'Corporate',
    image: corporateSample,
    title: 'Business Headshot'
  }, {
    id: 6,
    category: 'Product',
    image: productSample,
    title: 'Premium Showcase'
  }];
  const testimonials = [{
    name: 'Sarah & Michael',
    text: 'PixelCraft Studio captured our wedding day perfectly. Every moment was beautifully preserved.',
    rating: 5,
    category: 'Wedding'
  }, {
    name: 'Jennifer Tech Corp',
    text: 'Professional, creative, and delivered exceptional corporate headshots for our entire team.',
    rating: 5,
    category: 'Corporate'
  }, {
    name: 'Emma Johnson',
    text: 'The maternity shoot was magical. They made me feel comfortable and the photos are stunning.',
    rating: 5,
    category: 'Maternity'
  }];
  const pricingPlans = [{
    name: 'Starter',
    price: '$299',
    features: ['2-hour session', '25 edited photos', 'Online gallery', 'Basic retouching'],
    popular: false
  }, {
    name: 'Premium',
    price: '$599',
    features: ['4-hour session', '75 edited photos', 'Online gallery', 'Advanced retouching', 'Print release'],
    popular: true
  }, {
    name: 'Elite',
    price: '$999',
    features: ['Full day coverage', '150+ edited photos', 'Online gallery', 'Premium retouching', 'Print release', 'Second photographer'],
    popular: false
  }];
  const filteredPortfolio = selectedCategory === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === selectedCategory);
  useEffect(() => {
    // Animate elements on scroll
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
    animatedElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hi! I would like to book a photography session.', '_blank');
  };
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              <span className="font-serif">PixelCraft</span>
              <span className="text-gold ml-2">Studio</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['About', 'Services', 'Portfolio', 'Pricing', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-foreground hover:text-gold transition-colors duration-300">
                  {item}
                </a>)}
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

            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-border">
              <nav className="flex flex-col space-y-3 pt-4">
                {['About', 'Services', 'Portfolio', 'Pricing', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-foreground hover:text-gold transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                    {item}
                  </a>)}
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
            </div>}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Professional photographer in action" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        
        <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Capturing Moments
            <span className="block text-gold">That Matter</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in animate-delay-200">
            Professional photography for every occasion
          </p>
          <div className="space-x-4 animate-fade-in animate-delay-300">
            <Button onClick={scrollToContact} size="lg" className="btn-gold">
              Book a Shoot
            </Button>
            <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-primary text-white">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">About PixelCraft Studio</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              With over 8 years of experience in professional photography, PixelCraft Studio has been 
              capturing life's most precious moments with artistry and passion. We believe that every 
              photograph should tell a story, evoke emotion, and preserve memories that last a lifetime.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of skilled photographers combines technical expertise with creative vision to 
              deliver exceptional results across all types of photography – from intimate weddings to 
              corporate events, from fashion shoots to product photography.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional photography services tailored to capture your unique moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-on-scroll">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our collection of memorable captures
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {['All', 'Wedding', 'Corporate', 'Product'].map(category => <Button key={category} variant={selectedCategory === category ? "default" : "outline"} onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? "btn-gold" : ""}>
                  {category}
                </Button>)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map(item => <div key={item.id} className="group cursor-pointer animate-on-scroll">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="animate-on-scroll">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.category} Client</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Pricing Plans</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your photography needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => <Card key={index} className={`relative animate-on-scroll ${plan.popular ? 'ring-2 ring-gold shadow-xl scale-105' : ''}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gold text-primary px-4 py-1">Most Popular</Badge>
                  </div>}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gold mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => <li key={i} className="text-muted-foreground">{feature}</li>)}
                  </ul>
                  <Button onClick={openWhatsApp} className={plan.popular ? 'btn-gold w-full' : 'w-full'} variant={plan.popular ? 'default' : 'outline'}>
                    Request Booking
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to capture your special moments? Let's discuss your photography needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">hello@pixelcraftstudio.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold">Studio Location</p>
                    <p className="text-muted-foreground">123 Photography Lane, Creative District</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button onClick={openWhatsApp} className="btn-gold">
                  <Send className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </div>
            </div>

            <Card className="animate-on-scroll">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" type="tel" />
                  <Textarea placeholder="Tell us about your photography needs..." rows={4} />
                  <Button type="submit" className="btn-gold w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="font-serif">PixelCraft</span>
                <span className="text-gold ml-2">Studio</span>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Professional photography services capturing life's most precious moments.
              </p>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Wedding Photography</li>
                <li>Corporate Events</li>
                <li>Portrait Sessions</li>
                <li>Product Photography</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
                <li><a href="#portfolio" className="hover:text-gold transition-colors">Portfolio</a></li>
                <li><a href="#pricing" className="hover:text-gold transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>+1 (555) 123-4567</li>
                <li>hello@pixelcraftstudio.com</li>
                <li>123 Photography Lane</li>
                <li>Creative District</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 PixelCraft Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;