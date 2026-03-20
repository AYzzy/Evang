import { useState } from 'react';
import { Search, MapPin, Globe, Mail, Phone, Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const Blog = () => {
  // Tab state for future use
  // const [activeTab, setActiveTab] = useState<'latest' | 'popular' | 'comments'>('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'news', label: 'News' },
    { id: 'events', label: 'Events' },
    { id: 'stories', label: 'Stories' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Community Outreach Program Reaches 500+ Families',
      excerpt: 'Our recent community outreach program has successfully reached over 500 families in need, providing essential food supplies and support services. This milestone represents months of dedicated work.',
      date: 'March 15, 2026',
      author: 'Sarah Johnson',
      category: 'news',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=500&fit=crop',
      views: 1234,
      comments: 45,
      readTime: '5 min read',
      featured: true,
    },
    {
      id: 2,
      title: 'Skills Training Workshop: Empowering 50 Individuals',
      excerpt: 'We are proud to announce the successful completion of our vocational skills training workshop, empowering 50 individuals with new employable skills for a brighter future.',
      date: 'March 10, 2026',
      author: 'Michael Chen',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop',
      views: 892,
      comments: 32,
      readTime: '4 min read',
      featured: false,
    },
    {
      id: 3,
      title: 'Annual Volunteer Appreciation Day 2026',
      excerpt: 'Join us in celebrating our dedicated volunteers who have contributed countless hours to making our mission a reality. Their commitment drives everything we do.',
      date: 'March 5, 2026',
      author: 'Emily Davis',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=500&fit=crop',
      views: 756,
      comments: 28,
      readTime: '3 min read',
      featured: false,
    },
    {
      id: 4,
      title: 'Success Story: From Refugee to Community Leader',
      excerpt: 'Meet Amara, whose journey from refugee to community leader inspires us all. Her story is a testament to the power of resilience and community support.',
      date: 'February 28, 2026',
      author: 'David Wilson',
      category: 'stories',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=500&fit=crop',
      views: 2156,
      comments: 67,
      readTime: '8 min read',
      featured: true,
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || post.id !== featuredPost?.id);

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a365d] to-[#2d4a6f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#c9a962] text-sm uppercase tracking-[0.3em] mb-4 font-medium">Latest Updates</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">OUR BLOG</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Stay updated with our latest news, events, and inspiring stories from the communities we serve.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            {featuredPost && !searchQuery && selectedCategory === 'all' && (
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg mb-8">
                <div className="relative h-80">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-[#c9a962] text-white text-xs font-semibold uppercase rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-4 mb-4 text-white/80 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-serif">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-200 line-clamp-2">{featuredPost.excerpt}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Filter Tabs */}
            <div className="bg-white rounded-2xl shadow-sm p-2 mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      selectedCategory === cat.id
                        ? 'bg-gradient-to-r from-[#c9a962] to-[#b8984d] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#1a365d] text-xs font-semibold uppercase rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-gray-400 text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1a365d] mb-3 group-hover:text-[#c9a962] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{post.views} views</span>
                      <button className="text-[#c9a962] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg">No blog posts found.</p>
                <p className="text-gray-400 text-sm">Try adjusting your search or filter.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#1a365d] mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 transition-all"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#1a365d] mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.slice(1).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-[#c9a962]/10 text-[#c9a962]'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      {cat.label}
                    </span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {blogPosts.filter(p => p.category === cat.id).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-[#1a365d] to-[#2d4a6f] rounded-2xl shadow-sm p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#c9a962] mt-0.5" />
                  <div className="text-sm text-gray-200">
                    <p>Benjamin Court Betterton Road</p>
                    <p>Rainham RM13 8NE</p>
                    <p>United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#c9a962]" />
                  <a 
                    href="http://www.evangelicalmisions.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-[#c9a962] hover:underline"
                  >
                    www.evangelicalmisions.org
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#c9a962]" />
                  <a 
                    href="mailto:hi@evangelicalmisions.org"
                    className="text-sm text-[#c9a962] hover:underline"
                  >
                    hi@evangelicalmisions.org
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#c9a962]" />
                  <span className="text-sm text-gray-200">+44 7397 099852</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
