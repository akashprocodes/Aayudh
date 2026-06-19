import React from 'react';
import { Mail, BellRing } from 'lucide-react';

export const NewsletterWidget: React.FC = () => {
  return (
    <div className="bg-[#5B21B6] rounded-2xl p-6 text-white shadow-sm flex-1 flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <BellRing size={120} className="-mr-4 -mt-4" />
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-5 border border-white/10">
          <Mail size={24} className="text-white" />
        </div>
        
        <h3 className="text-xl font-bold mb-2 leading-tight">ताज़ा खबरें सीधे आपके इनबॉक्स में</h3>
        <p className="text-sm text-purple-100 mb-6 opacity-90 leading-relaxed">
          Aayudh की न्यूज़लेटर सब्सक्राइब करें और कोई भी बड़ी खबर मिस न करें।
        </p>
        
        <div className="flex flex-col gap-3 mt-auto">
          <input 
            type="email" 
            placeholder="आपका ईमेल एड्रेस" 
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none focus:bg-white/20 focus:border-white/40 transition-all"
          />
          <button className="w-full bg-[#F59E0B] hover:bg-[#FBBF24] text-slate-900 font-bold rounded-xl px-4 py-3 text-sm transition-colors shadow-sm">
            सब्सक्राइब करें
          </button>
        </div>
      </div>
    </div>
  );
};
