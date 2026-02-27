import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ConsultationCTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: 'General Inquiry'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! Your inquiry has been received. We will contact you shortly.');
        setFormData({ name: '', email: '', phone: '', interest: 'General Inquiry' });
    };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Form Section - Now First */}
            <div className="bg-white p-10 shadow-xl border border-gray-100">
                <h3 className="text-3xl font-serif font-bold mb-6 text-black uppercase tracking-wide">Get in Touch</h3>
                <p className="text-gray-500 mb-8 font-light">
                    Interested in buying or selling? Fill out the form below and an agent will be in touch shortly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none transition-colors bg-transparent placeholder-gray-400"
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none transition-colors bg-transparent placeholder-gray-400"
                            placeholder="Email Address"
                            required
                        />
                    </div>
                    <div>
                        <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none transition-colors bg-transparent placeholder-gray-400"
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div>
                        <select 
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none transition-colors bg-transparent text-gray-700"
                        >
                            <option>General Inquiry</option>
                            <option>Buying a Home</option>
                            <option>Selling a Home</option>
                            <option>Home Valuation</option>
                            <option>Dubai Real Estate</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full btn-primary mt-6 flex justify-center items-center">
                        Submit Inquiry
                        <ArrowRight size={18} className="ml-2" />
                    </button>
                </form>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-4xl font-serif font-bold mb-6 text-black uppercase tracking-wide">Let's Connect</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
                Whether you are looking to buy your dream home, sell a property, or invest in Dubai real estate, Anne & Shakirah are here to guide you every step of the way.
              </p>
              
              <div className="space-y-8">
                  <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest mb-2 text-gray-400">Phone</h4>
                      <p className="text-xl text-black font-medium">+1 (469) 823-1886</p>
                      <p className="text-xl text-black font-medium">+1 (469) 970-2664</p>
                  </div>

                  <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest mb-2 text-gray-400">Email</h4>
                      <a href="mailto:info@softliferealtygroup.com" className="text-xl text-black font-medium hover:text-gray-600 transition-colors">
                          info@softliferealtygroup.com
                      </a>
                  </div>

                   <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest mb-2 text-gray-400">Social</h4>
                      <a href="https://instagram.com/softliferealtygroup" target="_blank" rel="noopener noreferrer" className="text-xl text-black font-medium hover:text-gray-600 transition-colors">
                          @softliferealtygroup
                      </a>
                  </div>
                  
                  <div className="pt-4">
                      <a 
                        href="https://wa.me/14698231886" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-[#25D366] text-white px-6 py-3 font-bold uppercase tracking-wide hover:bg-[#128C7E] transition-colors shadow-lg"
                      >
                          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2 fill-white stroke-none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                          Chat on WhatsApp
                      </a>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
