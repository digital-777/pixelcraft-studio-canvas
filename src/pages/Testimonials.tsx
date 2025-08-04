import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import StickyNav from '@/components/StickyNav';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PageLoader } from '@/components/ui/loader';

// Import images
import client1 from '@/assets/client-1.jpg';
import client2 from '@/assets/client-2.jpg';
import client3 from '@/assets/client-3.jpg';

const Testimonials = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const testimonials = [
    {
      name: 'Sarah & Michael',
      text: 'PixelCraft Studio captured our wedding day perfectly. Every moment was beautifully preserved with such attention to detail. The team was professional, creative, and made us feel so comfortable throughout the entire process.',
      rating: 5,
      category: 'Wedding',
      image: client1,
      location: 'Mumbai'
    },
    {
      name: 'Jennifer Martinez',
      text: 'Professional, creative, and delivered exceptional corporate headshots for our entire team. The quality exceeded our expectations and the turnaround time was impressive. Highly recommended for any business photography needs!',
      rating: 5,
      category: 'Corporate',
      image: client2,
      location: 'Delhi'
    },
    {
      name: 'Emma Johnson',
      text: 'The maternity shoot was magical. They made me feel comfortable and the photos are absolutely stunning. Every shot captured the emotion and beauty of this special time in our lives. Thank you for these precious memories!',
      rating: 5,
      category: 'Maternity',
      image: client3,
      location: 'Bangalore'
    },
    {
      name: 'Rajesh Patel',
      text: 'Amazing product photography for our e-commerce business. The attention to detail and lighting made our products look premium. Sales increased significantly after using their photos on our website.',
      rating: 5,
      category: 'Product',
      image: client1,
      location: 'Ahmedabad'
    },
    {
      name: 'Priya Sharma',
      text: 'The pre-wedding shoot was beyond our expectations. Creative concepts, beautiful locations, and perfect execution. We couldn\'t be happier with the results. Worth every penny!',
      rating: 5,
      category: 'Pre-Wedding',
      image: client2,
      location: 'Jaipur'
    },
    {
      name: 'David Wilson',
      text: 'Fashion photography at its finest. The team understood our vision perfectly and delivered images that showcased our collection beautifully. Professional, creative, and reliable.',
      rating: 5,
      category: 'Fashion',
      image: client3,
      location: 'Chennai'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hello Team PixelCraft! 📸🧡\nI saw your amazing testimonials and would love to work with you...\nCan you help me with my photography needs? 🕰️✨');
    window.open(`https://wa.me/9313202075?text=${message}`, '_blank');
  };

  if (isLoading) {
    return <PageLoader message="Loading testimonials..." />;
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
              Client
              <span className="block text-gold">Testimonials</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Don't just take our word for it - hear from our satisfied clients who trusted us with their precious moments
            </p>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gold ml-2">5.0 Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <Card className="animate-on-scroll">
                <CardContent className="p-12">
                  <div className="text-center">
                    <Quote className="w-12 h-12 text-gold mx-auto mb-6" />
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name} 
                      className="w-24 h-24 rounded-full object-cover border-4 border-gold mx-auto mb-6" 
                    />
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-2xl text-muted-foreground mb-8 italic leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div>
                      <p className="text-xl font-semibold">{testimonials[currentTestimonial].name}</p>
                      <p className="text-muted-foreground">{testimonials[currentTestimonial].category} Client • {testimonials[currentTestimonial].location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Arrows */}
              <button 
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary hover:bg-gold hover:text-white transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary hover:bg-gold hover:text-white transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentTestimonial === index ? 'bg-gold' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Read more testimonials from our happy clients across different photography services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-on-scroll">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold mr-4" 
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.category} • {testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground italic">
                    "{testimonial.text.length > 120 ? testimonial.text.substring(0, 120) + '...' : testimonial.text}"
                  </p>
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Create Your Own Success Story?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our happy clients and let us capture your special moments with the same passion and professionalism
            </p>
            <Button onClick={openWhatsApp} size="lg" className="btn-gold">
              Book Your Session Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;