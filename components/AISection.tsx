
import React, { useState, useMemo } from 'react';
import { generateServiceConsultation } from '../services/geminiService';
import { GenerationState } from '../types';

const DOCUMENT_LISTS: Record<string, string[]> = {
  'Home Loan': ['Aadhaar Card', 'PAN Card', '3 Months Salary Slips', '6 Months Bank Statement', 'Form 16 / ITR', 'Property Documents'],
  'Personal Loan': ['Aadhaar Card', 'PAN Card', '3 Months Salary Slips', '6 Months Bank Statement', 'Address Proof'],
  'Business Loan': ['Business PAN', 'Owner Aadhaar', '2 Years ITR', 'GST Registration', '12 Months Bank Statement'],
  'PAN Card': ['Aadhaar Card', 'Passport size Photo', 'Signature'],
  'Domicile/Income Cert': ['Aadhaar Card', 'Ration Card', 'School Leaving Certificate', 'Affidavit / Self Declaration'],
  'Digital Services': ['Company Profile', 'Logo (High Res)', 'Domain Access', 'Content/Images for Site']
};

const AISection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [serviceType, setServiceType] = useState('Financial Services');
  const [selectedDocCategory, setSelectedDocCategory] = useState<string | null>(null);
  
  const [emiData, setEmiData] = useState({
    amount: 1000000,
    rate: 8.5,
    years: 20
  });

  const [status, setStatus] = useState<GenerationState>({
    loading: false,
    result: null,
    error: null
  });

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setStatus({ loading: true, result: null, error: null });
    try {
      const advice = await generateServiceConsultation(query, serviceType);
      setStatus({ loading: false, result: advice, error: null });
    } catch (err) {
      setStatus({ loading: false, result: null, error: 'Network error. Please try again.' });
    }
  };

  const emiResult = useMemo(() => {
    const p = emiData.amount;
    const r = emiData.rate / 12 / 100;
    const n = emiData.years * 12;
    if (r === 0) return (p / n).toFixed(0);
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return emi.toFixed(0);
  }, [emiData]);

  const totalPayment = useMemo(() => {
    return (parseFloat(emiResult) * emiData.years * 12).toFixed(0);
  }, [emiResult, emiData]);

  const totalInterest = useMemo(() => {
    return (parseFloat(totalPayment) - emiData.amount).toFixed(0);
  }, [totalPayment, emiData]);

  return (
    <div id="ai-advisor" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 py-24 rounded-3xl">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <div>
            <h2 className="text-[#0A3D62] font-bold uppercase tracking-widest text-xs mb-4">Investo Intelligence</h2>
            <h3 className="text-4xl font-extrabold text-slate-800 mb-6">Your Strategic <span className="text-[#FF8C00]">Planning Hub</span></h3>
            <p className="text-slate-500 text-lg leading-relaxed">
              Plan your finances with precision or check required documents instantly. Our tools are designed to give you clarity before you initiate your consultation.
            </p>
          </div>

          <div className="bg-white border border-slate-100 p-10 rounded-3xl shadow-sm">
            <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-[#78C800]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              Document Requirements
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.keys(DOCUMENT_LISTS).map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedDocCategory(selectedDocCategory === cat ? null : cat)}
                  className={`px-3 py-2 text-[10px] font-bold rounded-xl border transition-all uppercase tracking-wider ${selectedDocCategory === cat ? 'bg-[#0A3D62] border-[#0A3D62] text-white shadow-lg' : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-[#0A3D62]'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            {selectedDocCategory && (
              <div className="mt-8 p-8 bg-slate-50 rounded-2xl border-l-4 border-[#78C800] animate-fade-in">
                <p className="text-[#0A3D62] text-xs font-bold uppercase mb-4 tracking-widest">{selectedDocCategory} Checklist:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {DOCUMENT_LISTS[selectedDocCategory].map((doc, i) => (
                    <li key={i} className="flex items-center text-slate-600 text-sm">
                      <svg className="w-4 h-4 mr-2 text-[#78C800]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="bg-white border border-slate-100 p-10 rounded-3xl shadow-sm">
            <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-[#0A3D62]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              Premium EMI Calculator
            </h4>
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[10px] text-slate-400 mb-2 uppercase font-bold tracking-widest">Loan Amount (₹)</label>
                  <input 
                    type="number" 
                    value={emiData.amount}
                    onChange={(e) => setEmiData({...emiData, amount: parseFloat(e.target.value) || 0})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 font-bold focus:ring-1 focus:ring-[#0A3D62] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 mb-2 uppercase font-bold tracking-widest">Rate (%)</label>
                  <input 
                    type="number" 
                    step="0.1"
                    value={emiData.rate}
                    onChange={(e) => setEmiData({...emiData, rate: parseFloat(e.target.value) || 0})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 font-bold focus:ring-1 focus:ring-[#0A3D62] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 mb-2 uppercase font-bold tracking-widest">Years</label>
                  <input 
                    type="number" 
                    value={emiData.years}
                    onChange={(e) => setEmiData({...emiData, years: parseFloat(e.target.value) || 0})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 font-bold focus:ring-1 focus:ring-[#0A3D62] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-8 bg-[#0A3D62] rounded-2xl shadow-xl">
                <div className="text-center">
                  <p className="text-[10px] text-white/60 mb-1 uppercase tracking-widest">Monthly EMI</p>
                  <p className="text-2xl font-bold text-white">₹{parseFloat(emiResult).toLocaleString()}</p>
                </div>
                <div className="text-center border-x border-white/10">
                  <p className="text-[10px] text-white/60 mb-1 uppercase tracking-widest">Interest</p>
                  <p className="text-2xl font-bold text-[#78C800]">₹{parseFloat(totalInterest).toLocaleString()}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-white/60 mb-1 uppercase tracking-widest">Total</p>
                  <p className="text-2xl font-bold text-[#FF8C00]">₹{parseFloat(totalPayment).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Consultation Section */}
        <div className="sticky top-40">
          <div className="bg-white p-12 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0A3D62]/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="mb-10 text-center">
              <h4 className="text-2xl font-extrabold text-[#0A3D62] mb-2">Service Consultant AI</h4>
              <p className="text-slate-400 text-sm italic font-medium">Expert preliminary guidance in seconds.</p>
            </div>

            <form onSubmit={handleConsult} className="space-y-8">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Service Stream</label>
                <select 
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-800 font-medium focus:ring-2 focus:ring-[#0A3D62] outline-none appearance-none"
                >
                  <option>Financial Services</option>
                  <option>Digital Services</option>
                  <option>CSC (Govt) Services</option>
                  <option>Office Support</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Your Inquiry</label>
                <textarea 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. How can I accelerate my home loan application for a property in Akole?"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-800 focus:ring-2 focus:ring-[#0A3D62] h-40 outline-none resize-none"
                  required
                />
              </div>
              <button 
                type="submit"
                disabled={status.loading}
                className={`w-full py-5 rounded-full font-bold text-lg transition-all ${status.loading ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-[#0A3D62] hover:bg-[#002244] text-white shadow-xl active:scale-95'}`}
              >
                {status.loading ? 'Analyzing...' : 'Generate Action Plan'}
              </button>
            </form>

            {status.result && (
              <div className="mt-10 p-8 bg-slate-50 border border-slate-100 rounded-3xl animate-fade-in max-h-80 overflow-y-auto">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-2.5 h-2.5 bg-[#FF8C00] rounded-full animate-pulse"></div>
                  <p className="text-[#0A3D62] text-[10px] font-bold uppercase tracking-widest">Recommended Approach</p>
                </div>
                <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                  {status.result}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISection;
