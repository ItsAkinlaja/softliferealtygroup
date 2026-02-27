import React, { useState } from 'react';
import { ArrowRight, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const ConsultationCTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: 'General Inquiry'
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        
        try {
            const response = await fetch("https://formspree.io/f/xpwqrzvk", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                alert('Thank you! Your inquiry has been received. We will contact you shortly.');
                setFormData({ name: '', email: '', phone: '', interest: 'General Inquiry' });
            } else {
                setStatus('error');
                alert('Oops! There was a problem submitting your form. Please try again or email us directly.');
            }
        } catch (error) {
            setStatus('error');
            alert('Oops! There was a problem submitting your form. Please try again or email us directly.');
        }
        
        setStatus('');
    };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-beige overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-12 transform origin-top-right z-0 hidden lg:block"></div>
      
      <div className="container-custom relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
            
            {/* Form Section */}
            <FadeIn direction="right">
                <div className="bg-white p-6 md:p-12 shadow-2xl rounded-sm border-t-4 border-gold relative">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-charcoal">Get in Touch</h3>
                    <div className="h-1 w-16 bg-gold mb-6"></div>
                    <p className="text-sm md:text-base text-gray-500 mb-6 md:mb-8 font-light leading-relaxed">
                        Interested in buying or selling? Fill out the form below and an agent will be in touch shortly.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="group">
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-0 py-3 border-b border-gray-200 focus:border-gold outline-none transition-all bg-transparent placeholder-gray-400 text-charcoal"
                                placeholder="Full Name"
                                required
                            />
                        </div>
                        <div className="group">
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-0 py-3 border-b border-gray-200 focus:border-gold outline-none transition-all bg-transparent placeholder-gray-400 text-charcoal"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div className="group">
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-0 py-3 border-b border-gray-200 focus:border-gold outline-none transition-all bg-transparent placeholder-gray-400 text-charcoal"
                                placeholder="Phone Number"
                                required
                            />
                        </div>
                        <div className="group">
                            <select 
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                className="w-full px-0 py-3 border-b border-gray-200 focus:border-gold outline-none transition-all bg-transparent text-gray-500"
                            >
                                <option>General Inquiry</option>
                                <option>Buying a Home</option>
                                <option>Selling a Home</option>
                                <option>Home Valuation</option>
                                <option>Dubai Real Estate</option>
                            </select>
                        </div>
                        <button type="submit" className="w-full btn-primary mt-8 flex justify-center items-center py-4 text-lg group">
                            Submit Inquiry
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </FadeIn>

            {/* Contact Details */}
            <FadeIn direction="left">
                <div className="flex flex-col justify-center h-full pl-0 lg:pl-8">
                    <h4 className="text-gold font-bold tracking-[0.2em] uppercase mb-4 text-sm">Contact Us</h4>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-charcoal leading-tight">
                        Let's Start a <br/> <span className="italic text-gold">Conversation</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-12 leading-relaxed font-light">
                        Whether you are looking to buy your dream home, sell a property, or invest in Dubai real estate, Anne & Shakirah are here to guide you every step of the way.
                    </p>
                    
                    <div className="space-y-10">
                        <div className="flex items-start group">
                            <div className="bg-white p-3 shadow-md rounded-full text-gold mr-6 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest mb-1 text-gray-400">Phone</h4>
                                <a href="tel:+14698231886" className="block text-xl text-charcoal font-serif hover:text-gold transition-colors">+1 (469) 823-1886</a>
                                <a href="tel:+14699702664" className="block text-xl text-charcoal font-serif hover:text-gold transition-colors">+1 (469) 970-2664</a>
                            </div>
                        </div>

                        <div className="flex items-start group">
                            <div className="bg-white p-3 shadow-md rounded-full text-gold mr-6 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest mb-1 text-gray-400">Email</h4>
                                <a href="mailto:info@softliferealtygroup.com" className="text-xl text-charcoal font-serif hover:text-gold transition-colors">info@softliferealtygroup.com</a>
                            </div>
                        </div>

                        <div className="flex items-start group">
                            <div className="bg-white p-3 shadow-md rounded-full text-gold mr-6 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                                <Instagram size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest mb-1 text-gray-400">Social</h4>
                                <a href="https://instagram.com/softliferealtygroup" target="_blank" rel="noopener noreferrer" className="text-xl text-charcoal font-serif hover:text-gold transition-colors">@softliferealtygroup</a>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a 
                                href="https://wa.me/14698231886" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-[#25D366] text-white px-8 py-3 rounded-full hover:bg-[#128C7E] transition-colors font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <MessageCircle size={20} className="mr-2" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
