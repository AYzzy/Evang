import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Target, Users, Calendar, TrendingUp, CheckCircle } from 'lucide-react';

const Campaigns = () => {
  const [, setHoveredCard] = useState<number | null>(null);

  const campaigns = [
    {
      id: 1,
      title: 'Food Support Program',
      description: 'Providing nutritious meals and food packages to families facing food insecurity in our community. Help us ensure no one goes hungry.',
      goal: 10000,
      raised: 7500,
      donors: 234,
      daysLeft: 15,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=500&fit=crop',
      icon: Heart,
      color: 'from-rose-500 to-pink-600',
    },
    {
      id: 2,
      title: 'Skills Development',
      description: 'Empowering individuals with vocational training and employability skills for a brighter future and financial independence.',
      goal: 15000,
      raised: 9200,
      donors: 189,
      daysLeft: 22,
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop',
      icon: Target,
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 3,
      title: 'Community Wellbeing',
      description: 'Creating inclusive social activities that bring people together and promote mental wellbeing and community bonds.',
      goal: 8000,
      raised: 5600,
      donors: 145,
      daysLeft: 30,
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=500&fit=crop',
      icon: Users,
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  const features = [
    {
      title: 'Transparent Process',
      description: '100% of your donation goes directly to the cause you choose to support.',
      icon: CheckCircle,
    },
    {
      title: 'Tax Deductible',
      description: 'All donations are tax-deductible. Receive a receipt for your records.',
      icon: CheckCircle,
    },
    {
      title: 'Regular Updates',
      description: 'Receive updates on how your donation is making a difference.',
      icon: CheckCircle,
    },
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
              <p className="text-[#c9a962] text-sm uppercase tracking-[0.3em] mb-4 font-medium">Support Our Cause</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">ONGOING CAMPAIGNS</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#c9a962] to-[#b8984d] mb-6" />
              <p className="text-gray-200 text-lg leading-relaxed mb-8">
                Your generosity can transform lives. Browse our active campaigns and choose a cause that resonates with your heart.
              </p>
              <a 
                href="https://www.paypal.com/paypalme/evangelicalmission"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a962] to-[#b8984d] text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:shadow-xl hover:shadow-[#c9a962]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <Heart className="w-5 h-5" />
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Cards */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm uppercase tracking-[0.2em] mb-4 font-medium">Active Campaigns</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4 font-serif">MAKE AN IMPACT</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a962] to-[#b8984d] mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <div 
                key={campaign.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                onMouseEnter={() => setHoveredCard(campaign.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${campaign.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <campaign.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {campaign.donors} donors
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {campaign.daysLeft} days left
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#1a365d] mb-3 group-hover:text-[#c9a962] transition-colors">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {campaign.description}
                  </p>

                  {/* Progress */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">Raised</span>
                      <span className="text-sm font-semibold text-[#1a365d]">
                        £{campaign.raised.toLocaleString()} of £{campaign.goal.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${campaign.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                      />
                    </div>
                    <div className="mt-2 text-right">
                      <span className="text-sm font-semibold text-[#c9a962]">
                        {Math.round((campaign.raised / campaign.goal) * 100)}% funded
                      </span>
                    </div>
                  </div>

                  {/* Button */}
                  <a 
                    href="https://www.paypal.com/paypalme/evangelicalmission"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#c9a962] to-[#b8984d] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#c9a962]/30 transition-all duration-300"
                  >
                    <Heart className="w-4 h-4" />
                    Donate Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a962] text-sm uppercase tracking-[0.2em] mb-4 font-medium">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6 font-serif">YOUR DONATION MATTERS</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#c9a962] to-[#b8984d] mb-8" />
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#c9a962] to-[#b8984d] rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1a365d] mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a 
                  href="https://www.paypal.com/paypalme/evangelicalmission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#c9a962] font-semibold hover:gap-4 transition-all duration-300"
                >
                  Learn More About Our Impact
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop" 
                alt="Donation Impact"
                className="rounded-3xl shadow-2xl w-full"
              />
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#c9a962] to-[#b8984d] rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#1a365d]">£50K+</p>
                    <p className="text-sm text-gray-500">Total Raised</p>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#c9a962]/20 rounded-2xl -z-10" />
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">READY TO MAKE A DIFFERENCE?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Every contribution, no matter how small, helps us continue our vital work in supporting vulnerable communities.
          </p>
          <a 
            href="https://www.paypal.com/paypalme/evangelicalmission"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a962] to-[#b8984d] text-white px-10 py-4 rounded-full font-semibold uppercase tracking-wide hover:shadow-xl hover:shadow-[#c9a962]/30 transition-all duration-300 hover:-translate-y-1"
          >
            <Heart className="w-5 h-5" />
            Donate Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Campaigns;
