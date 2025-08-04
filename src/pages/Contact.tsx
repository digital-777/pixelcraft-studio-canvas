import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Facebook } from 'lucide-react';
import StickyNav from '@/components/StickyNav';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PageLoader } from '@/components/ui/loader';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9313202075',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@pixelcraftstudio.com',
      description: 'Send us your requirements'
    },
    {
      icon: MapPin,
      title: 'Studio Location',
      details: 'Rajkot, Gujarat, India',
      description: 'Visit our studio for consultation'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Sat: 9AM - 7PM',
      description: 'Sunday by appointment'
    }
  ];

  const services = [
    'Wedding Photography',
    'Pre-Wedding Shoots',
    'Corporate Events',
    'Maternity Photography',
    'Fashion Photography',
    'Product Photography',
    'Event Photography',
    'Family Portraits'
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hello Team PixelCraft! 📸🧡
    
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message: ${formData.message}

Looking forward to working with you! 🕰️✨`);
    window.open(`https://wa.me/9313202075?text=${message}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp();
  };

  if (isLoading) {
    return <PageLoader message="Loading contact information..." />;
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
              Get In
              <span className="block text-gold">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Ready to capture your special moments? Let's discuss your photography needs and bring your vision to life
            </p>
            <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="btn-gold">
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-serif font-bold mb-4">Contact Information</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach us. Choose what's most convenient for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-on-scroll">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <info.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-lg font-medium text-gold mb-2">{info.details}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="contact-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="animate-on-scroll">
              <CardContent className="p-8">
                <h3 className="text-3xl font-serif font-bold mb-6">Send us a Message</h3>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input 
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Required</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your photography needs, event details, preferred dates, etc." 
                      rows={5} 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="btn-gold w-full text-lg py-6">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact & Social */}
            <div className="animate-on-scroll space-y-8">
              {/* Quick Contact */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Quick Contact</h3>
                  <div className="space-y-6">
                    <Button onClick={() => window.open('tel:+919313202075')} variant="outline" className="w-full justify-start text-left p-6">
                      <Phone className="w-5 h-5 mr-3 text-gold" />
                      <div>
                        <div className="font-semibold">Call Now</div>
                        <div className="text-sm text-muted-foreground">+91 9313202075</div>
                      </div>
                    </Button>
                    
                    <Button onClick={() => window.open('mailto:hello@pixelcraftstudio.com')} variant="outline" className="w-full justify-start text-left p-6">
                      <Mail className="w-5 h-5 mr-3 text-gold" />
                      <div>
                        <div className="font-semibold">Email Us</div>
                        <div className="text-sm text-muted-foreground">hello@pixelcraftstudio.com</div>
                      </div>
                    </Button>
                    
                    <Button onClick={openWhatsApp} className="btn-gold w-full justify-start text-left p-6">
                      <MessageCircle className="w-5 h-5 mr-3" />
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-sm">Instant response guaranteed</div>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Follow Our Work</h3>
                  <p className="text-muted-foreground mb-6">
                    Stay updated with our latest photography work and behind-the-scenes content
                  </p>
                  <div className="flex space-x-4">
                    <Button onClick={() => window.open('https://instagram.com/pixelcraftstudio', '_blank')} className="flex-1">
                      <Instagram className="w-5 h-5 mr-2" />
                      Instagram
                    </Button>
                    <Button onClick={() => window.open('https://facebook.com/pixelcraftstudio', '_blank')} variant="outline" className="flex-1">
                      <Facebook className="w-5 h-5 mr-2" />
                      Facebook
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">By Appointment</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Emergency bookings and weekend shoots available on request
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Create Something Beautiful Together</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your story deserves to be told beautifully. Contact us today and let's start planning your perfect photography session.
            </p>
            <Button onClick={openWhatsApp} size="lg" className="btn-gold">
              Start Your Photography Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;