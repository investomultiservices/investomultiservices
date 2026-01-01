
import React, { useState } from 'react';
import AISection from './AISection';
import { DB } from '../services/supabaseClient';

interface ValidationErrors {
  first_name?: string;
  last_name?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    subject: 'Loan Inquiry',
    message: ''
  });
  
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'first_name' || name === 'last_name') {
      if (!value.trim()) {
        error = 'This field is required';
      } else if (value.trim().length < 2) {
        error = 'Must be at least 2 characters';
      }
    }
    if (name === 'message') {
      if (!value.trim()) {
        error = 'Message cannot be empty';
      } else if (value.trim().length < 10) {
        error = 'Please provide more details (min 10 chars)';
      }
    }
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const isFormValid = () => {
    const fnErr = validateField('first_name', formData.first_name);
    const lnErr = validateField('last_name', formData.last_name);
    const msgErr = validateField('message', formData.message);
    return !fnErr && !lnErr && !msgErr;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation check
    const fnErr = validateField('first_name', formData.first_name);
    const lnErr = validateField('last_name', formData.last_name);
    const msgErr = validateField('message', formData.message);
    
    if (fnErr || lnErr || msgErr) {
      setErrors({ first_name: fnErr, last_name: lnErr, message: msgErr });
      setTouched({ first_name: true, last_name: true, message: true });
      return;
    }

    setStatus('submitting');
    try {
      await DB.submitEnquiry({
        ...formData,
        created_at: new Date().toISOString()
      });
      setStatus('success');
      setFormData({ first_name: '', last_name: '', subject: 'Loan Inquiry', message: '' });
      setErrors({});
      setTouched({});
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="animate-fade-up">
            <h2 className="text-[#78C800] font-bold uppercase text-xs tracking-widest mb-4">Contact Us</h2>
            <h1 className="text-5xl font-extrabold text-slate-800 mb-8">Get in Touch with Our <span className="text-[#0A3D62]">Experts</span></h1>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Have questions about your PAN card, home loan, or starting a website? We're here to help you navigate through every step with professional precision.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#0A3D62] flex-shrink-0 group-hover:bg-[#0A3D62] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold text-lg mb-1">Office Address</h4>
                  <p className="text-slate-500 font-medium">Old ITI, opposite sarvodaya school,<br />Rajur, Akole - 422604</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#78C800] flex-shrink-0 group-hover:bg-[#78C800] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold text-lg mb-1">Call Support</h4>
                  <p className="text-slate-500 font-medium">+91 95299 22984<br />+91 81086 10755</p>
                </div>
              </div>

              <div className="flex items-start space-x-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#FF8C00] flex-shrink-0 group-hover:bg-[#FF8C00] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-slate-500 font-medium">investomultiservices@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-2xl relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">First Name</label>
                  <input 
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    type="text" 
                    placeholder="John"
                    className={`w-full bg-slate-50 border ${errors.first_name && touched.first_name ? 'border-rose-500' : 'border-slate-200'} rounded-xl px-4 py-3 text-slate-800 focus:ring-2 focus:ring-[#0A3D62] outline-none transition-all`} 
                  />
                  {errors.first_name && touched.first_name && (
                    <p className="absolute -bottom-5 left-1 text-[10px] font-bold text-rose-500">{errors.first_name}</p>
                  )}
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Last Name</label>
                  <input 
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    type="text" 
                    placeholder="Doe"
                    className={`w-full bg-slate-50 border ${errors.last_name && touched.last_name ? 'border-rose-500' : 'border-slate-200'} rounded-xl px-4 py-3 text-slate-800 focus:ring-2 focus:ring-[#0A3D62] outline-none transition-all`} 
                  />
                  {errors.last_name && touched.last_name && (
                    <p className="absolute -bottom-5 left-1 text-[10px] font-bold text-rose-500">{errors.last_name}</p>
                  )}
                </div>
              </div>
              <div className="pt-2">
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:ring-2 focus:ring-[#0A3D62] outline-none appearance-none"
                >
                  <option>Loan Inquiry</option>
                  <option>Life Insurance Inquiry</option>
                  <option>Mediclaim Inquiry</option>
                  <option>Digital Website Design</option>
                  <option>CSC/Govt Certification</option>
                  <option>Other Support</option>
                </select>
              </div>
              <div className="relative">
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Tell us how we can help..."
                  className={`w-full bg-slate-50 border ${errors.message && touched.message ? 'border-rose-500' : 'border-slate-200'} rounded-xl px-4 py-3 text-slate-800 focus:ring-2 focus:ring-[#0A3D62] h-32 outline-none resize-none transition-all`}
                ></textarea>
                {errors.message && touched.message && (
                  <p className="absolute -bottom-5 left-1 text-[10px] font-bold text-rose-500">{errors.message}</p>
                )}
              </div>
              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={status === 'submitting' || !isFormValid()}
                  className="w-full py-4 bg-[#0A3D62] hover:bg-[#002244] text-white rounded-xl font-bold shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            {status === 'success' && (
              <div className="absolute inset-0 bg-[#0A3D62] rounded-[2rem] flex flex-col items-center justify-center text-center p-8 animate-fade-in z-10 shadow-2xl">
                <svg className="w-20 h-20 text-[#78C800] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                <h3 className="text-3xl font-bold text-white mb-3">Message Received!</h3>
                <p className="text-slate-300 font-medium">Thank you for reaching out. One of our experts will contact you shortly.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-[#78C800] underline font-bold hover:text-white transition-colors">Send another message</button>
              </div>
            )}
            
            {status === 'error' && (
              <p className="mt-4 text-center text-rose-500 text-sm font-bold">Failed to send. Please check your connection.</p>
            )}
          </div>
        </div>

        <div className="mt-32">
          <AISection />
        </div>
      </div>
    </div>
  );
};

export default Contact;
