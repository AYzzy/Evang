import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/campaigns', label: 'Ongoing Campaigns' },
    { path: '/blog-2', label: 'Blog' },
    { path: '/contact-us', label: 'Contact Us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img 
                src="https://evangelicalmisions.org/wp-content/uploads/2026/01/evangelical_mission_logo.png" 
                alt="Evangelical Missions" 
                className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-14'}`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'text-[#c9a962]' 
                    : scrolled ? 'text-gray-800 hover:text-[#c9a962]' : 'text-white hover:text-[#c9a962]'
                }`}
              >
                {item.label}
                <span 
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#c9a962] transition-all duration-300 ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Donate Button */}
            <a 
              href="https://www.paypal.com/paypalme/evangelicalmission"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a962] to-[#b8984d] text-white px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide hover:shadow-lg hover:shadow-[#c9a962]/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4" />
              Donate
            </a>

            {/* Search Icon */}
            <button className={`p-2 rounded-full transition-all duration-300 ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}>
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Icon */}
            <button className={`p-2 rounded-full transition-all duration-300 relative ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}>
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#c9a962] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 text-sm font-medium uppercase tracking-wide rounded-lg transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'bg-[#c9a962]/10 text-[#c9a962]' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#c9a962]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="https://www.paypal.com/paypalme/evangelicalmission"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#c9a962] to-[#b8984d] text-white px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wide mt-2"
            >
              <Heart className="w-4 h-4" />
              Donate Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
