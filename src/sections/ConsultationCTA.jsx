import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import FadeIn from '../components/FadeIn';

import emailjs from '@emailjs/browser';

const ConsultationCTA = ({ embedded = false }) => {
    const location = useLocation();
    
    // Helper to get interest from URL - memoized to be safe for useEffect
    const getInterestFromUrl = useCallback(() => {
        const params = new URLSearchParams(location.search);
        return params.get('interest');
    }, [location.search]);

    // Initialize state with URL params
    const [formData, setFormData] = useState(() => {
        const params = new URLSearchParams(location.search);
        const interestParam = params.get('interest');
        return {
            name: '',
            email: '',
            phone: '',
            interest: interestParam ? `Inquiry about: ${interestParam}` : 'General Inquiry'
        };
    });

    // Track the last processed interest param to avoid redundant updates
    // and to safely trigger updates only when the URL actually changes
    const lastInterestParam = useRef(getInterestFromUrl());

    useEffect(() => {
        const currentInterestParam = getInterestFromUrl();
        
        // Only update if the interest param has changed from what we last saw
        if (currentInterestParam !== lastInterestParam.current) {
            lastInterestParam.current = currentInterestParam;
            
            if (currentInterestParam) {
                // Defer the state update to the next animation frame to avoid synchronous set state warning
                // This ensures we're out of the current render cycle
                requestAnimationFrame(() => {
                    setFormData(prev => ({
                        ...prev,
                        interest: `Inquiry about: ${currentInterestParam}`
                    }));
                });
            }
        }
    }, [getInterestFromUrl]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [submissionStatus, setSubmissionStatus] = useState(null);

    const notificationRef = useRef(null);

    useEffect(() => {
        if (submissionStatus === 'success' || submissionStatus === 'error') {
            notificationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [submissionStatus]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus('loading');
        
        try {
            await emailjs.send(
                'service_21ikgyr', // EmailJS Service ID
                'template_nfrqzwo', // EmailJS Template ID
                formData,
                '7QT4dzGrbB_qTuBzp' // EmailJS Public Key
            );
            setSubmissionStatus('success');
            setFormData({ name: '', email: '', phone: '', interest: 'General Inquiry' });
        } catch (error) {
            console.error("EmailJS submission error:", error);
            setSubmissionStatus('error');
        }
    };


    if (embedded) {
        return (
            <div className="bg-white relative">
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
                        <textarea
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className="w-full px-0 py-3 border-b border-gray-200 focus:border-gold outline-none transition-all bg-transparent placeholder-gray-400 text-charcoal h-24 resize-none"
                            placeholder="Tell us about your interest (e.g., specific property, neighborhood, price range)"
                        ></textarea>
                    </div>
                    <div className="pt-4">
                        <button type="submit" className="w-full bg-charcoal hover:bg-gray-900 text-white !text-white font-serif font-bold py-4 text-lg flex justify-center items-center group relative overflow-hidden transition-all duration-300 shadow-xl disabled:opacity-90" disabled={submissionStatus === 'loading'}>
                            {submissionStatus === 'loading' ? (
                                <span className="relative z-10 flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </span>
                            ) : (
                                <span className="relative z-10 flex items-center">
                                    Submit Inquiry <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                </span>
                            )}
                            <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
                        </button>
                    </div>
                </form>

                <div ref={notificationRef} className="mt-6">
                    {submissionStatus === 'success' && (
                        <FadeIn>
                            <div className="p-8 bg-charcoal text-white rounded-sm text-center shadow-2xl border border-white/10 relative overflow-hidden group">
                                {/* Decorative elements */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                
                                <div className="mb-6 flex justify-center">
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                                        <ArrowRight className="text-white transform rotate-[-45deg]" size={32} />
                                    </div>
                                </div>
                                
                                <h4 className="text-2xl font-serif font-bold mb-3 tracking-wider uppercase text-white !text-white">Inquiry Received</h4>
                                <p className="text-white !text-white font-light leading-relaxed max-w-xs mx-auto mb-8 opacity-90">
                                    Thank you for choosing Soft Life Realty Group. One of our luxury specialists will review your request and contact you shortly.
                                </p>
                                
                                <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white !text-white font-bold">Expect a response within 24 hours</p>
                                    <button 
                                        onClick={() => setSubmissionStatus(null)}
                                        className="text-xs text-white hover:text-gray-300 transition-colors uppercase tracking-widest font-bold underline underline-offset-4"
                                    >
                                        Send another inquiry
                                    </button>
                                </div>
                            </div>
                        </FadeIn>
                    )}

                    {submissionStatus === 'error' && (
                        <div className="p-6 bg-red-50 border border-red-100 text-red-800 rounded-sm text-center shadow-lg">
                            <p className="font-bold mb-2">Submission Error</p>
                            <p className="text-sm font-light opacity-80">There was a problem submitting your form. Please try again or email us directly at <a href="mailto:info@softliferealtygroup.com" className="underline font-medium">info@softliferealtygroup.com</a></p>
                            <button 
                                onClick={() => setSubmissionStatus(null)}
                                className="mt-4 text-xs font-bold uppercase tracking-widest underline"
                            >
                                Try again
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

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
                            <textarea
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                className="w-full px-0 py-3 border-b border-gray-200 focus:border-gold outline-none transition-all bg-transparent placeholder-gray-400 text-charcoal h-24 resize-none"
                                placeholder="Tell us about your interest (e.g., specific property, neighborhood, price range)"
                            ></textarea>
                        </div>
                        <div className="pt-4">
                            <button type="submit" className="w-full bg-charcoal hover:bg-gray-900 text-white !text-white font-serif font-bold py-4 text-lg flex justify-center items-center group relative overflow-hidden transition-all duration-300 shadow-xl disabled:opacity-90" disabled={submissionStatus === 'loading'}>
                                {submissionStatus === 'loading' ? (
                                    <span className="relative z-10 flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    <span className="relative z-10 flex items-center">
                                        Submit Inquiry <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                    </span>
                                )}
                                <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
                            </button>
                        </div>
                    </form>

                    <div ref={notificationRef} className="mt-6">
                        {submissionStatus === 'success' && (
                            <FadeIn>
                                <div className="p-8 bg-charcoal text-white rounded-sm text-center shadow-2xl border border-white/10 relative overflow-hidden group">
                                    {/* Decorative elements */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                    
                                    <div className="mb-6 flex justify-center">
                                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                                            <ArrowRight className="text-white transform rotate-[-45deg]" size={32} />
                                        </div>
                                    </div>
                                    
                                    <h4 className="text-2xl font-serif font-bold mb-3 tracking-wider uppercase text-white !text-white">Inquiry Received</h4>
                                      <p className="text-white !text-white font-light leading-relaxed max-w-xs mx-auto mb-8 opacity-90">
                                          Thank you for choosing Soft Life Realty Group. One of our luxury specialists will review your request and contact you shortly.
                                      </p>
                                      
                                      <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                                          <p className="text-[10px] uppercase tracking-[0.2em] text-white !text-white font-bold">Expect a response within 24 hours</p>
                                        <button 
                                            onClick={() => setSubmissionStatus(null)}
                                            className="text-xs text-white hover:text-gray-300 transition-colors uppercase tracking-widest font-bold underline underline-offset-4"
                                        >
                                            Send another inquiry
                                        </button>
                                    </div>
                                </div>
                            </FadeIn>
                        )}

                        {submissionStatus === 'error' && (
                            <div className="p-6 bg-red-50 border border-red-100 text-red-800 rounded-sm text-center shadow-lg">
                                <p className="font-bold mb-2">Submission Error</p>
                                <p className="text-sm font-light opacity-80">There was a problem submitting your form. Please try again or email us directly at <a href="mailto:info@softliferealtygroup.com" className="underline font-medium">info@softliferealtygroup.com</a></p>
                                <button 
                                    onClick={() => setSubmissionStatus(null)}
                                    className="mt-4 text-xs font-bold uppercase tracking-widest underline"
                                >
                                    Try again
                                </button>
                            </div>
                        )}
                    </div>
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