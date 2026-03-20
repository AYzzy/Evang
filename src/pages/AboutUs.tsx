import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Globe, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Faith in Action',
      description: 'Guided by the teachings of Jesus Christ and the Great Commission, we live out our faith through service, love, and genuine care for others.',
    },
    {
      icon: Users,
      title: 'Compassion',
      description: 'We respond to human need with kindness, empathy, and respect, supporting individuals and families with dignity at all times.',
    },
    {
      icon: Globe,
      title: 'Inclusivity',
      description: 'Our services are open to everyone, regardless of background, belief, age, gender, or circumstance.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Safeguarding, transparency, and accountability are fundamental to how we operate.',
    },
  ];

  const features = [
    'Community food support initiatives',
    'Skills development and employability programmes',
    'Inclusive social and wellbeing activities',
    'Partnership with local councils and organizations',
    'Culturally sensitive and responsive services',
    'Safe, welcoming, and respectful environments',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[500px] lg:h-[600px] bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&h=1080&fit=crop)' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/70 to-[#1a365d]/50" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl animate-fadeInUp">
              <p className="text-[#c9a962] text-sm uppercase tracking-[0.3em] mb-4 font-medium">Discover Our Story</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">ABOUT US</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#c9a962] to-[#b8984d] mb-6" />
              <p className="text-gray-200 text-lg leading-relaxed">
                Learn about our mission, vision, and the values that drive us to make a difference in communities around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f8f9fa] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-[#1a365d] to-[#2d4a6f] rounded-3xl p-10 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a962]/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="relative">
                <div className="w-16 h-16 bg-[#c9a962]/20 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-[#c9a962]" />
                </div>
                <h2 className="text-3xl font-bold mb-6 font-serif">OUR VISION</h2>
                <p className="text-gray-200 leading-relaxed mb-8">
                  A society where no one is left hungry, isolated, or without opportunity, and where strong, resilient communities are built through compassion, inclusion, and faith put into action.
                </p>
                <Link 
                  to="/campaigns"
                  className="inline-flex items-center gap-2 text-[#c9a962] font-semibold hover:gap-4 transition-all duration-300"
                >
                  Get Involved
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white border-2 border-[#f8f9fa] rounded-3xl p-10 relative overflow-hidden group hover:shadow-2xl hover:border-[#c9a962]/20 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a962]/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c9a962] to-[#b8984d] rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1a365d] mb-6 font-serif">OUR MISSION</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Inspired by the Great Commission in Matthew 28:19, Evangelical Missions Ministry serves communities through practical acts of love, compassion, and empowerment. We support individuals and families facing hardship through food support, skills development, and inclusive community activities.
                </p>
                <Link 
                  to="/campaigns"
                  className="inline-flex items-center gap-2 text-[#c9a962] font-semibold hover:gap-4 transition-all duration-300"
                >
                  Get Involved
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#f8f9fa]" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm uppercase tracking-[0.2em] mb-4 font-medium">What Drives Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4 font-serif">OUR CORE VALUES</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a962] to-[#b8984d] mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#c9a962] to-[#b8984d] rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a962] text-sm uppercase tracking-[0.2em] mb-4 font-medium">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6 font-serif">MAKING A DIFFERENCE</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#c9a962] to-[#b8984d] mb-8" />
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Evangelical Missions Ministry is a faith-based, community-focused charitable organisation dedicated to supporting vulnerable individuals and strengthening communities through practical care, compassion, and empowerment.
                </p>
                <p>
                  Our mission is rooted in the belief that every individual has inherent worth and the potential to thrive when given the right support. While our inspiration comes from our Christian faith, our services are open to everyone, regardless of background, belief, age, gender, or circumstance.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a962] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=500&fit=crop" 
                  alt="Community Support"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=500&fit=crop" 
                  alt="Helping Hands"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=500&fit=crop" 
                  alt="Team Work"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover -mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=500&fit=crop" 
                  alt="Community Event"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c9a962]/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-[#c9a962]/30 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1a365d] to-[#2d4a6f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#c9a962] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">JOIN OUR MISSION</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Together, we can break cycles of hardship, restore hope, and help individuals and families build stronger, more resilient futures.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
