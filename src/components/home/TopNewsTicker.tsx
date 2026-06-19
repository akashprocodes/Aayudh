'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Article } from '@/types/article';

interface TopNewsTickerProps {
  news: Article[];
}

export const TopNewsTicker: React.FC<TopNewsTickerProps> = ({ news }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!news || news.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 4000); // 4 seconds

    return () => clearInterval(timer);
  }, [news]);

  const handleNext = () => {
    if (!news || news.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const handlePrev = () => {
    if (!news || news.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  if (!news || news.length === 0) return null;

  return (
    <div className="mt-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-4 shadow-sm mb-2">
      <div className="font-sans font-black text-red-600 tracking-widest text-[13px] uppercase shrink-0">
        BREAKING :
      </div>
      <div className="flex-1 overflow-hidden min-w-0 relative h-[22px]">
        {news.map((item, index) => (
          <Link
            href={`/news/${item.slug}`}
            key={index}
            className={`absolute top-0 left-0 w-full whitespace-nowrap overflow-hidden text-ellipsis font-serif font-bold text-[15px] text-yellow-600 cursor-pointer hover:text-red-600 transition-all duration-500 ease-in-out block ${index === currentIndex
              ? 'opacity-100 translate-y-0 z-10'
              : index < currentIndex
                ? 'opacity-0 -translate-y-4 -z-10 pointer-events-none'
                : 'opacity-0 translate-y-4 -z-10 pointer-events-none'
              }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-1.5 shrink-0 ml-2">
        <button
          onClick={handlePrev}
          className="p-1.5 hover:bg-slate-200 rounded-md transition-colors text-slate-600 hover:text-slate-900 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
        </button>
        <button
          onClick={handleNext}
          className="p-1.5 hover:bg-slate-200 rounded-md transition-colors text-slate-600 hover:text-slate-900 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};
