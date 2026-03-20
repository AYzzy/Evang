import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ZoomIn, ChevronLeft, ChevronRight, Grid3X3, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=800&fit=crop', alt: 'Community Event', category: 'events' },
    { id: 2, src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=800&fit=crop', alt: 'Volunteer Work', category: 'volunteers' },
    { id: 3, src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=800&fit=crop', alt: 'Food Distribution', category: 'programs' },
    { id: 4, src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=800&fit=crop', alt: 'Community Gathering', category: 'events' },
    { id: 5, src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=800&fit=crop', alt: 'Team Building', category: 'volunteers' },
    { id: 6, src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=800&fit=crop', alt: 'Skills Training', category: 'programs' },
    { id: 7, src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&h=800&fit=crop', alt: 'Charity Event', category: 'events' },
    { id: 8, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=800&fit=crop', alt: 'Community Support', category: 'programs' },
    { id: 9, src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=800&fit=crop', alt: 'Volunteer Team', category: 'volunteers' },
    { id: 10, src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=800&fit=crop', alt: 'Outreach Program', category: 'programs' },
    { id: 11, src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=800&fit=crop', alt: 'Community Meeting', category: 'events' },
    { id: 12, src: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&h=800&fit=crop', alt: 'Food Program', category: 'programs' },
  ];

  const filters = [
    { id: 'all', label: 'All Photos', icon: Grid3X3 },
    { id: 'events', label: 'Events', icon: ImageIcon },
    { id: 'programs', label: 'Programs', icon: ImageIcon },
    { id: 'volunteers', label: 'Volunteers', icon: ImageIcon },
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredImages.length
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex].id);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&h=1080&fit=crop)' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/70 to-[#1a365d]/50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center animate-fadeInUp">
            <p className="text-[#c9a962] text-sm uppercase tracking-[0.3em] mb-4 font-medium">Our Journey</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">GALLERY</h1>
            <div className="flex items-center justify-center gap-4 text-white/80">
              <Link to="/" className="hover:text-[#c9a962] transition-colors">Home</Link>
              <span className="w-8 h-px bg-white/40" />
              <span className="text-[#c9a962]">Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === f.id
                    ? 'bg-gradient-to-r from-[#c9a962] to-[#b8984d] text-white shadow-lg shadow-[#c9a962]/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <f.icon className="w-4 h-4" />
                {f.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className={`group relative aspect-square overflow-hidden rounded-2xl cursor-pointer animate-fadeInUp ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(image.id)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fadeIn"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>
          
          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <img 
            src={filteredImages.find(img => img.id === selectedImage)?.src}
            alt={filteredImages.find(img => img.id === selectedImage)?.alt}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
