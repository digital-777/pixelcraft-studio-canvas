import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import sample images
import weddingSample from '@/assets/wedding-sample.jpg';
import corporateSample from '@/assets/corporate-sample.jpg';
import productSample from '@/assets/product-sample.jpg';
import heroImage from '@/assets/hero-photographer.jpg';
import StickyNav from '@/components/StickyNav';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Extended portfolio with more items
  const portfolioItems = [
    {
      id: 1,
      category: 'Wedding',
      image: weddingSample,
      title: 'Romantic Wedding Ceremony',
      description: 'Beautiful outdoor wedding capturing intimate moments'
    },
    {
      id: 2,
      category: 'Wedding',
      image: heroImage,
      title: 'Wedding Photography',
      description: 'Professional wedding photography session'
    },
    {
      id: 3,
      category: 'Corporate',
      image: corporateSample,
      title: 'Executive Portraits',
      description: 'Professional corporate headshots and team photos'
    },
    {
      id: 4,
      category: 'Product',
      image: productSample,
      title: 'Product Showcase',
      description: 'High-end product photography for e-commerce'
    },
    {
      id: 5,
      category: 'Wedding',
      image: weddingSample,
      title: 'Bridal Portraits',
      description: 'Elegant bridal portrait session'
    },
    {
      id: 6,
      category: 'Corporate',
      image: corporateSample,
      title: 'Corporate Event',
      description: 'Professional corporate event coverage'
    },
    {
      id: 7,
      category: 'Product',
      image: productSample,
      title: 'Luxury Products',
      description: 'Premium product photography with creative lighting'
    },
    {
      id: 8,
      category: 'Fashion',
      image: heroImage,
      title: 'Fashion Editorial',
      description: 'High-fashion editorial photography session'
    },
    {
      id: 9,
      category: 'Wedding',
      image: weddingSample,
      title: 'Wedding Reception',
      description: 'Capturing the joy and celebration of wedding reception'
    },
    {
      id: 10,
      category: 'Portrait',
      image: corporateSample,
      title: 'Professional Portraits',
      description: 'Creative portrait photography with artistic lighting'
    },
    {
      id: 11,
      category: 'Corporate',
      image: corporateSample,
      title: 'Business Meeting',
      description: 'Corporate photography for annual reports'
    },
    {
      id: 12,
      category: 'Product',
      image: productSample,
      title: 'Tech Products',
      description: 'Modern tech product photography'
    }
  ];

  const categories = ['All', 'Wedding', 'Corporate', 'Product', 'Fashion', 'Portrait'];

  const filteredPortfolio = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  // Animation on scroll
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
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <StickyNav />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-on-scroll">
            <div className="flex justify-center mb-6">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Complete <span className="text-gold">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our comprehensive collection of photography work across different categories and styles
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-on-scroll">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "btn-gold" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPortfolio.map(item => (
              <div
                key={item.id}
                className="portfolio-item group cursor-pointer animate-on-scroll"
                onClick={() => setLightboxImage(item.image)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="text-white text-center p-4">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm mb-3 opacity-90">{item.description}</p>
                      <Badge variant="secondary" className="bg-gold text-primary">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-on-scroll">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Ready to Create Your Own Portfolio?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to capture your special moments and create lasting memories
            </p>
            <Link to="/#contact">
              <Button size="lg" className="btn-gold">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img
              src={lightboxImage}
              alt="Portfolio item"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;