import React, { useState } from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FadeIn from '../components/FadeIn';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    category: "General",
    items: [
      {
        question: "Where are you located?",
        answer: "SoftLife Realty Group operates internationally with a dual presence. Our primary offices are located in Dallas, Texas, and Dubai, UAE, allowing us to serve clients across both North American and Middle Eastern luxury markets."
      },
      {
        question: "What types of properties do you specialize in?",
        answer: "We specialize in luxury residential properties, including penthouses, waterfront estates, and investment-grade off-plan developments. Our portfolio covers both ready-to-move-in homes and strategic pre-construction opportunities."
      }
    ]
  },
  {
    category: "Buying & Selling",
    items: [
      {
        question: "How do I start the home buying process?",
        answer: "The first step is a consultation to understand your lifestyle needs and investment goals. From there, we can guide you through pre-approval (if financing), curate a list of properties, and arrange private viewings."
      },
      {
        question: "Do you offer property management services?",
        answer: "Yes, for our investment clients, especially those purchasing in Dubai remotely, we offer comprehensive property management solutions to ensure your asset is maintained and generating yield."
      }
    ]
  },
  {
    category: "International Investment",
    items: [
      {
        question: "Can foreigners buy property in Dubai?",
        answer: "Absolutely. Dubai has designated 'freehold' areas where foreign nationals can own property with 100% ownership rights. This includes popular areas like Downtown Dubai, Palm Jumeirah, and Dubai Marina."
      },
      {
        question: "What is the Golden Visa program?",
        answer: "The UAE Golden Visa is a long-term residency visa (5 or 10 years) granted to investors who purchase property worth at least AED 2 million (approx. $545,000). It allows you to live, work, and study in the UAE with 100% business ownership."
      }
    ]
  }
];

const FAQItem = ({ item, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={toggle}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-charcoal group-hover:text-gold'}`}>
          {item.question}
        </span>
        <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={20} className={`transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-gray-400'}`} />
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 font-light leading-relaxed pr-8">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState("0-0"); // Default open first item

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-beige min-h-screen font-sans text-charcoal pb-24">
      <SEO 
        title="Frequently Asked Questions" 
        description="Answers to common questions about buying luxury real estate in Dallas and Dubai, the Golden Visa program, and our services."
        keywords="real estate faq, dubai property questions, golden visa faq, dallas home buying help"
      />
      
      {/* Header */}
      <section className="relative h-[40vh] min-h-[300px] bg-charcoal flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-charcoal to-black"></div>
        </div>
        
        <div className="relative z-20 container-custom px-4">
          <Breadcrumbs className="text-white/60 mb-4 justify-center" />
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              Common <span className="text-gold italic">Questions</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto font-light text-lg">
              Everything you need to know about our services and the luxury market.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="container-custom px-4 -mt-16 relative z-30">
        <div className="bg-white shadow-2xl rounded-sm overflow-hidden border-t-4 border-gold">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Sidebar / Navigation (Desktop) */}
                <div className="lg:col-span-4 bg-gray-50 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
                    <h3 className="text-2xl font-serif font-bold mb-6 text-charcoal">Categories</h3>
                    <ul className="space-y-4">
                        {faqs.map((cat, i) => (
                            <li key={i}>
                                <a href={`#cat-${i}`} className="flex items-center text-gray-600 hover:text-gold transition-colors font-medium">
                                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                                    {cat.category}
                                </a>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="mt-12 p-6 bg-charcoal text-white rounded-sm text-center">
                        <h4 className="font-serif font-bold mb-2">Still have questions?</h4>
                        <p className="text-sm text-gray-400 mb-6">Our team is ready to provide personalized answers.</p>
                        <a href="/contact" className="inline-block bg-gold text-white px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-charcoal transition-colors">
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* FAQ Content */}
                <div className="lg:col-span-8 p-8 md:p-12">
                    {faqs.map((category, catIndex) => (
                        <div key={catIndex} id={`cat-${catIndex}`} className="mb-12 last:mb-0">
                            <h3 className="text-xl font-bold uppercase tracking-widest text-gold mb-6 border-b border-gray-100 pb-2">
                                {category.category}
                            </h3>
                            <div className="space-y-2">
                                {category.items.map((item, itemIndex) => {
                                    const indexKey = `${catIndex}-${itemIndex}`;
                                    return (
                                        <FAQItem 
                                            key={itemIndex} 
                                            item={item} 
                                            isOpen={openIndex === indexKey}
                                            toggle={() => toggleAccordion(indexKey)}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
