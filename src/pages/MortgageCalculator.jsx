import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, Calendar, HelpCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FadeIn from '../components/FadeIn';

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [downPayment, setDownPayment] = useState(100000);
  const [propertyTax, setPropertyTax] = useState(6000); // Annual
  const [homeInsurance, setHomeInsurance] = useState(2500); // Annual
  const [hoaFees, setHoaFees] = useState(300); // Monthly

  const calculateMonthlyPayment = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    let monthlyPrincipalInterest = 0;
    if (interestRate === 0) {
        monthlyPrincipalInterest = principal / numberOfPayments;
    } else {
        monthlyPrincipalInterest = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    const monthlyTax = propertyTax / 12;
    const monthlyInsurance = homeInsurance / 12;
    
    return {
        principalInterest: monthlyPrincipalInterest,
        tax: monthlyTax,
        insurance: monthlyInsurance,
        hoa: hoaFees,
        total: monthlyPrincipalInterest + monthlyTax + monthlyInsurance + hoaFees
    };
  };

  const payments = calculateMonthlyPayment();

  return (
    <div className="bg-beige min-h-screen font-sans text-charcoal">
      <SEO 
        title="Mortgage Calculator - SoftLife Realty" 
        description="Estimate your monthly mortgage payments with our comprehensive calculator. Includes taxes, insurance, and HOA fees for accurate planning."
        keywords="mortgage calculator, home loan estimator, monthly payment calculator, real estate finance tool"
      />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] bg-charcoal flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" alt="Financial Planning" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 to-charcoal/90"></div>
        </div>
        
        <div className="relative z-20 container-custom px-4">
          <Breadcrumbs className="text-white/60 mb-4 justify-center" />
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Mortgage <span className="text-gold italic">Calculator</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto font-light text-lg">
                Plan your investment with precision. Estimate your monthly payments including taxes and fees.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Inputs Column */}
                <div className="lg:col-span-7 bg-white p-8 md:p-10 shadow-xl rounded-sm border-t-4 border-gold">
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-8 flex items-center">
                        <Calculator className="mr-3 text-gold" size={24} />
                        Loan Details
                    </h3>
                    
                    <div className="space-y-8">
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Home Price ($)</label>
                                <div className="relative">
                                    <DollarSign size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input 
                                        type="number" 
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-gold outline-none transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Down Payment ($)</label>
                                <div className="relative">
                                    <DollarSign size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input 
                                        type="number" 
                                        value={downPayment}
                                        onChange={(e) => setDownPayment(Number(e.target.value))}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-gold outline-none transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Interest Rate (%)</label>
                                <div className="relative">
                                    <Percent size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input 
                                        type="number" 
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(Number(e.target.value))}
                                        step="0.1"
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-gold outline-none transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Loan Term (Years)</label>
                                <div className="relative">
                                    <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <select 
                                        value={loanTerm}
                                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-gold outline-none transition-colors appearance-none"
                                    >
                                        <option value="15">15 Years</option>
                                        <option value="20">20 Years</option>
                                        <option value="30">30 Years</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Advanced Details Toggle */}
                        <div className="pt-4 border-t border-gray-100">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Additional Costs (Optional)</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Property Tax / Year</label>
                                    <input 
                                        type="number" 
                                        value={propertyTax}
                                        onChange={(e) => setPropertyTax(Number(e.target.value))}
                                        className="w-full p-2 text-sm bg-gray-50 border border-gray-200 focus:border-gold outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Home Insurance / Year</label>
                                    <input 
                                        type="number" 
                                        value={homeInsurance}
                                        onChange={(e) => setHomeInsurance(Number(e.target.value))}
                                        className="w-full p-2 text-sm bg-gray-50 border border-gray-200 focus:border-gold outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">HOA Fees / Month</label>
                                    <input 
                                        type="number" 
                                        value={hoaFees}
                                        onChange={(e) => setHoaFees(Number(e.target.value))}
                                        className="w-full p-2 text-sm bg-gray-50 border border-gray-200 focus:border-gold outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Column */}
                <div className="lg:col-span-5 space-y-8">
                    {/* Total Payment Card */}
                    <div className="bg-charcoal text-white p-8 md:p-10 shadow-2xl rounded-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-gold/10"></div>
                        <div className="relative z-10 text-center">
                            <p className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-4">Estimated Monthly Payment</p>
                            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gold mb-6">
                                ${payments.total.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                            </h2>
                            <div className="space-y-3 text-sm text-gray-300 border-t border-white/10 pt-6">
                                <div className="flex justify-between">
                                    <span>Principal & Interest</span>
                                    <span className="font-bold text-white">${payments.principalInterest.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Property Tax</span>
                                    <span className="font-bold text-white">${payments.tax.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Home Insurance</span>
                                    <span className="font-bold text-white">${payments.insurance.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>HOA Fees</span>
                                    <span className="font-bold text-white">${payments.hoa.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Explainer Box */}
                    <div className="bg-white p-8 shadow-lg border-l-4 border-gray-300">
                        <div className="flex items-start mb-4">
                            <HelpCircle className="text-gold mr-3 mt-1" size={20} />
                            <h4 className="text-lg font-bold text-charcoal">How is this calculated?</h4>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                            This estimation uses a standard amortization formula based on the loan amount, interest rate, and term you provided. 
                            It also factors in estimated property taxes, insurance, and HOA fees to give you a realistic "PITI" (Principal, Interest, Taxes, Insurance) figure.
                        </p>
                        <p className="text-xs text-gray-400 italic">
                            *This is an estimate for planning purposes only. Actual rates and payments may vary based on your credit score, lender, and specific property details.
                        </p>
                    </div>

                    <div className="text-center">
                        <a href="/contact" className="inline-flex items-center text-charcoal font-bold hover:text-gold transition-colors uppercase tracking-widest text-sm border-b border-charcoal pb-1 hover:border-gold">
                            Contact a Mortgage Specialist <ArrowRight size={16} className="ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default MortgageCalculator;
