import React from 'react';
import { Trophy } from 'lucide-react';

export const CricketScoreWidget: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-5 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C3121E] animate-pulse"></span>
          <span className="text-[11px] font-bold text-[#C3121E] uppercase tracking-wider">Live Match</span>
        </div>
        <Trophy size={16} className="text-brand-yellow" />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-700 text-xs">IND</div>
            <span className="font-bold text-slate-800">India</span>
          </div>
          <div className="text-right">
            <div className="font-black text-xl text-slate-900 leading-none">185/3</div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">18.4 Overs</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-green-50 border border-green-100 flex items-center justify-center font-bold text-green-700 text-xs">AUS</div>
            <span className="font-bold text-slate-800">Australia</span>
          </div>
          <div className="text-right opacity-50">
            <div className="font-black text-xl text-slate-900 leading-none">0/0</div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">Yet to bat</div>
          </div>
        </div>
      </div>
      
      <div className="mt-5 bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
        <span className="text-[11px] font-semibold text-slate-600">India won the toss and elected to bat</span>
      </div>
    </div>
  );
};
