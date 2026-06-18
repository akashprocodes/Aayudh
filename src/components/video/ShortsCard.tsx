'use client';

import React from 'react';
import { Play } from 'lucide-react';
import { Short } from '@/types/shorts';

interface ShortsCardProps {
  short: Short;
  onClick?: () => void;
  isActive?: boolean;
}

export const ShortsCard: React.FC<ShortsCardProps> = ({ short, onClick, isActive = false }) => {
  // Helper to color half the title yellow and half white, matching the editorial reference image
  const renderOverlayTitle = (title?: string) => {
    if (!title) return null;
    let firstHalf = '';
    let secondHalf = '';
    
    if (title.includes('|')) {
      const parts = title.split('|');
      firstHalf = parts[0].trim();
      secondHalf = parts[1].trim();
    } else {
      const words = title.split(' ');
      if (words.length <= 1) {
        return (
          <span className="block drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
            <span className="text-yellow-400 font-extrabold">{title}</span>
          </span>
        );
      }
      const mid = Math.ceil(words.length / 2);
      firstHalf = words.slice(0, mid).join(' ');
      secondHalf = words.slice(mid).join(' ');
    }

    return (
      <span className="block drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
        <span className="text-yellow-400 font-extrabold block">{firstHalf}</span>
        <span className="text-white block mt-0.5 font-bold">{secondHalf}</span>
      </span>
    );
  };

  return (
    <div
      onClick={onClick}
      className={`relative rounded-xl overflow-hidden bg-white hover:shadow-md border border-slate-200 flex flex-col cursor-pointer transition-all duration-300 w-[165px] sm:w-[185px] shrink-0 ${
        isActive ? 'ring-2 ring-brand-purple' : ''
      }`}
    >
      {/* Top Media/Gradient Section with 9:16 Aspect Ratio */}
      <div className="relative aspect-[9/16] bg-slate-950 overflow-hidden shrink-0">
        {short.thumbnail ? (
          <img
            src={short.thumbnail}
            alt={short.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-tr ${short.bgColor || 'from-indigo-400 to-purple-600'}`} />
        )}

        {/* Dark overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

        {/* Top Brand Logo Overlay */}
        <div className="absolute top-3 left-0 right-0 flex flex-col items-center pointer-events-none select-none z-10">
          <div className="w-[22px] h-[22px] bg-[#e01a22] rounded flex flex-col items-center justify-center text-white p-0.5 shadow shadow-black/30">
            <div className="grid grid-cols-2 gap-0 text-[7px] font-extrabold leading-none w-full text-center">
              <span>ख़</span>
              <span>ब</span>
              <span>र</span>
              <span>ग</span>
            </div>
          </div>
          <span className="text-[6px] font-black text-white tracking-widest mt-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">खबरगांव</span>
        </div>

        {/* Center/Upper Headline Text Overlay */}
        {short.overlayTitle && (
          <div className="absolute inset-x-0 top-[28%] px-2.5 text-center pointer-events-none z-10">
            <h3 className="font-serif text-sm sm:text-base leading-tight tracking-wide">
              {renderOverlayTitle(short.overlayTitle)}
            </h3>
          </div>
        )}

        {/* Play Button Overlay (Bottom-Right) */}
        <div className="absolute bottom-3 right-3 bg-white text-slate-900 rounded p-1 shadow shadow-black/25 z-10">
          <Play className="w-3.5 h-3.5 fill-current text-slate-900 ml-0.5" />
        </div>
      </div>

      {/* Bottom Caption Area */}
      <div className="p-3 bg-white border-t border-slate-100 flex-1 flex items-center">
        <h4 className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug font-sans">
          {short.title}
        </h4>
      </div>
    </div>
  );
};

export default ShortsCard;
