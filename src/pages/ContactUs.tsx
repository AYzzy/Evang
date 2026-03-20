import { useState } from 'react';
import { Mail, Phone, Twitter, MapPin, ChevronDown, ChevronUp, Send, Heart } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const faqs = [
    {
      id: 1,
      question: 'What does Evangelical Missions do?',
      answer: 'Evangelical Missions Ministry is dedicated to supporting vulnerable individuals and communities through practical care, compassion, and empowerment. Our programs include food support, skills development, and community wellbeing initiatives.',
    },
    {
      id: 2,
      question: 'How can I volunteer with your organization?',
      answer: 'We welcome volunteers! You can sign up through our website or contact us directly. We have various opportunities including event support, food distribution, skills training, and administrative help.',
    },
    {
      id: 3,
      question: 'Are donations tax-deductible?',
      answer: 'Yes, all donations to Evangelical Missions Ministry are tax-deductible. You will receive a receipt for your records after making a donation.',
    },
    {
      id: 4,
      question: 'How is my donation used?',
      answer: '100% of your donation goes directly to supporting our programs and the communities we serve. We maintain full transparency and provide regular updates on how funds are utilized.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop)' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/70 to-[#1a365d]/50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center animate-fadeInUp">
            <p className="text-[#c9a962] text-sm uppercase tracking-[0.3em] mb-4 font-medium">Get in Touch</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">CONTACT US</h1>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to us for any inquiries, partnerships, or to learn more about our work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white relative -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#c9a962] to-[#b8984d] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Visit Us</h3>
              <p className="text-gray-600">
                Benjamin Court Betterton Road<br />
                Rainham RM13 8NE<br />
                United Kingdom
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#c9a962] to-[#b8984d] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Email Us</h3>
              <a 
                href="mailto:hi@evangelicalmisions.org" 
                className="text-gray-600 hover:text-[#c9a962] transition-colors"
              >
                hi@evangelicalmisions.org
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#c9a962] to-[#b8984d] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Call Us</h3>
              <a 
                href="tel:+447397099852" 
                className="text-gray-600 hover:text-[#c9a962] transition-colors"
              >
                +44 7397 099852
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ Section */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <p className="text-[#c9a962] text-sm uppercase tracking-[0.2em] mb-4 font-medium">Send a Message</p>
              <h2 className="text-4xl font-bold text-[#1a365d] mb-6 font-serif">GET IN TOUCH</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#c9a962] to-[#b8984d] mb-8" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 transition-all resize-none"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#c9a962] to-[#b8984d] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#c9a962]/30 transition-all duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <Heart className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div>
              <p className="text-[#c9a962] text-sm uppercase tracking-[0.2em] mb-4 font-medium">Common Questions</p>
              <h2 className="text-4xl font-bold text-[#1a365d] mb-6 font-serif">FREQUENTLY ASKED</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#c9a962] to-[#b8984d] mb-8" />
              
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div 
                    key={faq.id} 
                    className="bg-white rounded-2xl shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-[#1a365d] pr-4">{faq.question}</span>
                      <div className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === faq.id ? 'bg-[#c9a962]' : ''}`}>
                        {openFaq === faq.id ? (
                          <ChevronUp className={`w-4 h-4 ${openFaq === faq.id ? 'text-white' : 'text-gray-500'}`} />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        )}
                      </div>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${openFaq === faq.id ? 'max-h-48' : 'max-h-0'}`}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#c9a962] to-[#b8984d] rounded-2xl flex items-center justify-center">
            <Twitter className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#1a365d] mb-2">Follow Us</h3>
          <p className="text-[#c9a962] font-medium mb-4">#EvangelicalMissions</p>
          <p className="text-gray-600 max-w-md mx-auto">
            Stay connected with us on social media for the latest updates, stories, and opportunities to get involved.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1a365d] to-[#2d4a6f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#c9a962] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">SUPPORT OUR MISSION</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Your contribution helps us continue our vital work in supporting vulnerable communities and creating lasting change.
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

export default ContactUs;
