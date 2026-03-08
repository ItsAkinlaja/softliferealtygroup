import React, { useState } from 'react';
import { ArrowRight, Check, RefreshCw, Home, X } from 'lucide-react';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import Breadcrumbs from '../components/Breadcrumbs';

const LifestyleQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'submitting', 'success'
  const [leadInfo, setLeadInfo] = useState({ name: '', email: '', phone: '' });
  const [finalPersona, setFinalPersona] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What is your primary goal for this property?",
      options: [
        { text: "Primary Residence", type: "Living" },
        { text: "Vacation Home", type: "Leisure" },
        { text: "Investment / Rental", type: "Investment" },
        { text: "Retirement Haven", type: "Living" }
      ]
    },
    {
      id: 2,
      question: "Which setting speaks to your soul?",
      options: [
        { text: "Vibrant City Skyline", type: "Urban" },
        { text: "Serene Waterfront", type: "Coastal" },
        { text: "Quiet Suburban Luxury", type: "Suburban" },
        { text: "Private Gated Estate", type: "Exclusive" }
      ]
    },
    {
      id: 3,
      question: "What is your must-have amenity?",
      options: [
        { text: "Home Gym & Spa", type: "Wellness" },
        { text: "Chef's Kitchen & Wine Cellar", type: "Entertaining" },
        { text: "Smart Home Technology", type: "Modern" },
        { text: "Expansive Outdoor Space", type: "Nature" }
      ]
    },
    {
      id: 4,
      question: "What's your preferred architectural style?",
      options: [
        { text: "Ultra-Modern Minimalist", type: "Modern" },
        { text: "Classic Mediterranean", type: "Classic" },
        { text: "Contemporary Glass & Steel", type: "Modern" },
        { text: "Traditional Estate", type: "Classic" }
      ]
    },
    {
      id: 5,
      question: "Ideally, where would this home be?",
      options: [
        { text: "Dubai, UAE", type: "Global" },
        { text: "Dallas, Texas", type: "Local" },
        { text: "Open to suggestions", type: "Flexible" }
      ]
    }
  ];

  const handleSubmitLead = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    
    // 1. Save to LocalStorage (Mock Backend)
    try {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Fake delay
        
        const resultData = {
            date: new Date().toISOString(),
            lead: leadInfo,
            persona: finalPersona,
            answers: answers
        };
        
        const existingResults = JSON.parse(localStorage.getItem('softlife_quiz_results') || '[]');
        localStorage.setItem('softlife_quiz_results', JSON.stringify([...existingResults, resultData]));
        
        setSubmissionStatus('success');
        setShowLeadForm(false);
        setShowResult(true);

        // 2. Open Mailto Link for real submission
        const subject = `Quiz Result: ${leadInfo.name} - ${finalPersona}`;
        const body = `Name: ${leadInfo.name}\nEmail: ${leadInfo.email}\nPhone: ${leadInfo.phone}\n\nPersona Match: ${finalPersona}\n\nQuiz Answers:\n${answers.map((a, i) => `Q${i+1}: ${a.text}`).join('\n')}`;
        
        window.location.href = `mailto:info@softliferealtygroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Auto-close after 3 seconds
        setTimeout(() => setSubmissionStatus('idle'), 3000);

    } catch (error) {
        console.error("Error saving lead:", error);
        setSubmissionStatus('idle');
    }
  };

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Determine persona immediately
      const types = newAnswers.map(a => a.type);
      let personaTitle = "The Classic Connoisseur"; 
      if (types.includes("Investment")) personaTitle = "The Strategic Investor";
      else if (types.includes("Urban") || types.includes("Modern")) personaTitle = "The Cosmopolitan Trendsetter";
      else if (types.includes("Coastal") || types.includes("Nature")) personaTitle = "The Serenity Seeker";
      
      setFinalPersona(personaTitle);
      setShowLeadForm(true); // Show form instead of result directly
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getResult = () => {
    // Simple logic to determine a "persona" based on answers
    // In a real app, this would be more complex weighting
    const types = answers.map(a => a.type);
    
    if (types.includes("Investment")) return {
      title: "The Strategic Investor",
      desc: "You value ROI, appreciation potential, and prime locations. We recommend looking at high-yield luxury apartments in Dubai Downtown or emerging hotspots in Dallas.",
      link: "/search?type=Investment"
    };
    
    if (types.includes("Urban") || types.includes("Modern")) return {
      title: "The Cosmopolitan Trendsetter",
      desc: "You thrive on energy, convenience, and style. A penthouse in Dubai Marina or a luxury condo in Uptown Dallas fits your fast-paced, sophisticated lifestyle.",
      link: "/search?type=Condo"
    };

    if (types.includes("Coastal") || types.includes("Nature")) return {
      title: "The Serenity Seeker",
      desc: "Peace, privacy, and views are your non-negotiables. Consider a waterfront villa on Palm Jumeirah or a spacious estate in Highland Park.",
      link: "/search?type=Villa"
    };

    return {
      title: "The Classic Connoisseur",
      desc: "You appreciate timeless elegance, grand spaces, and heritage. A traditional estate in a prestigious gated community is your perfect match.",
      link: "/search?type=Estate"
    };
  };

  const result = showResult ? getResult() : null;

  return (
    <div className="bg-beige min-h-screen font-sans text-charcoal">
      <SEO 
        title="Lifestyle Quiz - Find Your Dream Home" 
        description="Take our quick lifestyle quiz to discover your ideal property type and location. Let us curate a home that matches your personality."
        keywords="real estate quiz, home finder quiz, luxury home personality test, softlife realty quiz"
      />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-charcoal flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" alt="Abstract Luxury" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 to-charcoal/90"></div>
        </div>
        <div className="relative z-20 container-custom px-4">
          <Breadcrumbs className="text-white/60 mb-4 justify-center" />
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Discover Your <span className="text-gold italic">Signature Style</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto font-light text-lg">
                Not sure where to start? Answer 5 simple questions to reveal the luxury lifestyle that suits you best.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom px-4 max-w-3xl mx-auto">
            <FadeIn>
                <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm border-t-4 border-gold min-h-[400px] flex flex-col justify-center">
                    {!showResult && !showLeadForm ? (
                        <>
                            <div className="mb-8 flex justify-between items-center text-xs font-bold tracking-widest text-gray-400 uppercase">
                                <span>Question {currentQuestion + 1} of {questions.length}</span>
                                <span className="text-gold">{Math.round(((currentQuestion) / questions.length) * 100)}% Completed</span>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="w-full bg-gray-100 h-1 mb-10 rounded-full overflow-hidden">
                                <div 
                                    className="bg-gold h-full transition-all duration-500 ease-out"
                                    style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                                ></div>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-10 leading-tight">
                                {questions[currentQuestion].question}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <button 
                                        key={index}
                                        onClick={() => handleAnswer(option)}
                                        className="p-6 border border-gray-200 hover:border-gold hover:bg-gold/5 text-left transition-all duration-300 rounded-sm group flex justify-between items-center w-full"
                                    >
                                        <span className="font-medium text-gray-700 group-hover:text-charcoal text-sm md:text-base">{option.text}</span>
                                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 text-gold transition-opacity transform group-hover:translate-x-1 flex-shrink-0 ml-2" />
                                    </button>
                                ))}
                            </div>
                        </>
                    ) : showLeadForm ? (
                        <div className="max-w-md mx-auto animate-fade-in-up">
                            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6 text-center">Your Results Are Ready!</h2>
                            <p className="text-gray-500 text-center mb-8">
                                Enter your details below to unlock your personalized lifestyle persona and property recommendations.
                            </p>
                            <form onSubmit={handleSubmitLead} className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={leadInfo.name}
                                        onChange={(e) => setLeadInfo({...leadInfo, name: e.target.value})}
                                        className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold outline-none transition-colors rounded-sm"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                                    <input 
                                        type="email" 
                                        required
                                        value={leadInfo.email}
                                        onChange={(e) => setLeadInfo({...leadInfo, email: e.target.value})}
                                        className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold outline-none transition-colors rounded-sm"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        value={leadInfo.phone}
                                        onChange={(e) => setLeadInfo({...leadInfo, phone: e.target.value})}
                                        className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold outline-none transition-colors rounded-sm"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={submissionStatus === 'submitting'}
                                    className="btn-primary w-full py-4 flex justify-center items-center"
                                >
                                    {submissionStatus === 'submitting' ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                                    ) : (
                                        <>Unlock My Results <ArrowRight className="ml-2" size={20} /></>
                                    )}
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="text-center animate-fade-in-up">
                            <div className="bg-gold/10 p-6 rounded-full inline-block mb-6">
                                <Home size={48} className="text-gold" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                                Your Match: <span className="text-gold">{finalPersona}</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                                {result ? result.desc : "Discover properties tailored to your unique lifestyle."}
                            </p>
                            
                            <div className="flex flex-col md:flex-row justify-center gap-4">
                                <a href="/contact" className="btn-primary inline-flex items-center justify-center">
                                    Consult an Expert <ArrowRight size={18} className="ml-2" />
                                </a>
                                <button 
                                    onClick={resetQuiz}
                                    className="btn-secondary inline-flex items-center justify-center"
                                >
                                    Retake Quiz <RefreshCw size={18} className="ml-2" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </FadeIn>
        </div>
      </section>

      {/* Success Toast */}
      <div className={`fixed bottom-8 right-8 bg-charcoal text-white p-6 rounded-sm shadow-2xl border-l-4 border-gold transform transition-all duration-500 z-50 flex items-start gap-4 ${submissionStatus === 'success' ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="bg-gold/20 p-2 rounded-full mt-1">
              <Check size={20} className="text-gold" />
          </div>
          <div className="flex-1">
              <h4 className="font-serif font-bold text-lg text-white">Results Saved</h4>
              <p className="text-sm text-white/80">An agent will review your preferences shortly.</p>
          </div>
          <button 
            onClick={() => setSubmissionStatus('idle')}
            className="text-white/50 hover:text-white transition-colors p-1"
          >
            <X size={18} />
          </button>
      </div>

      {/* Why Quiz Info */}
      <section className="py-16 bg-white border-t border-gray-100">
          <div className="container-custom px-4 text-center max-w-4xl mx-auto">
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4">Why take a lifestyle quiz?</h3>
              <p className="text-gray-500 font-light">
                  Finding the perfect home isn't just about bedrooms and square footage—it's about how you live. 
                  Real estate professionals use these insights to curate listings that match your personality, 
                  saving you time and ensuring you find a property that truly feels like home.
              </p>
          </div>
      </section>
    </div>
  );
};

export default LifestyleQuiz;
