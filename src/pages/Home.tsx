import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Users, DollarSign, Award, ArrowRight, Play } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop',
      subtitle: 'Making a Difference',
      title: 'HELP WHERE IT\'S NEEDED MOST',
      description: 'Join us in our mission to support vulnerable communities and create lasting change.',
    },
    {
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop',
      subtitle: 'Together We Can',
      title: 'BRINGING HOPE TO LIFE',
      description: 'Every donation helps us provide food, education, and support to those in need.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 468, suffix: '', label: 'Successful Projects', icon: Award },
    { value: 1534, suffix: '', label: 'People Impacted', icon: Users },
    { value: 24, suffix: 'K', prefix: '$', label: 'Money Donated', icon: DollarSign },
    { value: 189, suffix: '', label: 'Total Volunteers', icon: Heart },
  ];

  const testimonials = [
    {
      quote: "I learned that men stand to gain from a violence-free environment…and it inspired me to believe in myself as a man who can be a part of the solution to.",
      name: "Simon R. Green",
      role: "Refugee",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: "I learned that men stand to gain from a violence-free environment…and it inspired me to believe in myself as a man who can be a part of the solution to.",
      name: "Mia Brown",
      role: "Refugee",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: "I learned that men stand to gain from a violence-free environment…and it inspired me to believe in myself as a man who can be a part of the solution to.",
      name: "Jack Holl",
      role: "Refugee",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/70 to-transparent" />
            </div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl animate-fadeInUp">
                  <p className="text-[#c9a962] text-sm uppercase tracking-[0.3em] mb-4 font-medium">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-serif">
                    {slide.title}
                  </h1>
                  <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to="/campaigns"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a962] to-[#b8984d] text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:shadow-xl hover:shadow-[#c9a962]/30 transition-all duration-300 hover:-translate-y-1"
                    >
                      <Heart className="w-5 h-5" />
                      Make Donation
                    </Link>
                    <Link 
                      to="/about-us"
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wide border border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                    >
                      <Play className="w-5 h-5" />
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#c9a962] transition-all duration-300 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#c9a962] transition-all duration-300 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'w-10 bg-[#c9a962]' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-widest rotate-90 origin-center translate-y-8">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f8f9fa] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop" 
                  alt="What We Do"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#c9a962]/20 rounded-2xl -z-0" />
              <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-[#c9a962]/30 rounded-2xl -z-0" />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c9a962] to-[#b8984d] rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1a365d]">10+</p>
                    <p className="text-sm text-gray-500">Years of Service</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-[#c9a962] text-sm uppercase tracking-[0.2em] mb-4 font-medium">About Our Mission</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6 font-serif">WHAT WE DO</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#c9a962] to-[#b8984d] mb-8" />
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Evangelical Missions Ministry is a faith-based, community-focused charitable organisation dedicated to supporting vulnerable individuals and strengthening communities through practical care, compassion, and empowerment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We exist to respond to human need with dignity, hope, and purposeful action, guided by the Christian values of love, service, justice, and respect for all people.
              </p>
              <Link 
                to="/about-us"
                className="inline-flex items-center gap-2 text-[#c9a962] font-semibold hover:gap-4 transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-[#1a365d] to-[#2d4a6f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#c9a962] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-[#c9a962]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">
                  {stat.prefix}{stat.value}{stat.suffix}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a962]/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm uppercase tracking-[0.2em] mb-4 font-medium">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4 font-serif">VOICES OF HOPE</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a962] to-[#b8984d] mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-[#c9a962] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-serif">"</span>
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed pt-4">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#c9a962]"
                  />
                  <div>
                    <p className="font-semibold text-[#1a365d]">{testimonial.name}</p>
                    <p className="text-[#c9a962] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=800&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/85" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="text-[#c9a962] text-sm uppercase tracking-[0.2em] mb-4 font-medium">Make a Difference</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">READY TO CHANGE LIVES?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Your support can help us reach more communities and create lasting positive change. Every contribution matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/campaigns"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a962] to-[#b8984d] text-white px-10 py-4 rounded-full font-semibold uppercase tracking-wide hover:shadow-xl hover:shadow-[#c9a962]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </Link>
            <Link 
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full font-semibold uppercase tracking-wide border border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
