import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, Mail, Phone, ArrowRight, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Ongoing Campaigns', path: '/campaigns' },
    { label: 'Blog', path: '/blog-2' },
    { label: 'Contact Us', path: '/contact-us' },
  ];

  const whatWeDo = [
    'Education',
    'Health',
    'Social Services',
    'Microfinance',
    'Infrastructure',
    'Emergency Response',
  ];

  // const newsroom = [
  //   'Press Releases',
  //   'Official Statements',
  //   'Emergency Reports',
  //   'Blog & News',
  //   'Features',
  //   'Press Contacts',
  // ];

  return (
    <footer className="bg-[#1a365d] text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a962] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="https://evangelicalmisions.org/wp-content/uploads/2026/01/evangelical_mission_logo.png" 
                alt="Evangelical Missions" 
                className="h-16 brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              We're a faith & community-focused charity organisation supporting the vulnerables through practical care, compassion, and empowerment.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-[#c9a962] mt-0.5 flex-shrink-0" />
                <span>Benjamin Court Betterton Road<br />Rainham RM13 8NE</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-5 h-5 text-[#c9a962] flex-shrink-0" />
                <a href="mailto:hi@evangelicalmisions.org" className="hover:text-[#c9a962] transition-colors">
                  hi@evangelicalmisions.org
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-5 h-5 text-[#c9a962] flex-shrink-0" />
                <span>+44 7397 099852</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#c9a962]" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-[#c9a962] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#c9a962]" />
              What We Do
            </h3>
            <ul className="space-y-3">
              {whatWeDo.map((item) => (
                <li key={item}>
                  <span className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#c9a962]" />
              Newsletter
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to receive updates on our latest campaigns and impact stories.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#c9a962] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-[#c9a962] to-[#b8984d] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[#c9a962]/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {subscribed ? (
                  <>
                    <Heart className="w-4 h-4" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Evangelical Missions. Made with <Heart className="w-4 h-4 inline text-[#c9a962]" /> by AYzzy 
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#c9a962] hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@evangelicalmissions6528" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#c9a962] hover:text-white transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
