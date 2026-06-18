'use client';

import React from 'react';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { Video } from '@/types/video';
import { Card } from '../common/Card';

interface ExplainerCardProps {
  video: Video;
  className?: string;
}

export const ExplainerCard: React.FC<ExplainerCardProps> = ({ video, className }) => {
  return (
    <Link href={`/videos?slug=${video.slug}`} className={`block flex flex-col group ${className || ''}`}>

      {/* Light Grayish Video Placeholder Container (matching Image 3) */}
      <div className="w-full aspect-[16/9] bg-[#D6DEE5] rounded-xl overflow-hidden shrink-0 relative transition-transform duration-300 group-hover:scale-[1.02]">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-100"
          loading="lazy"
        />
        {/* Subtle play indicator for UX, though Image 3 is very plain */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
          <Play className="w-10 h-10 text-white fill-white drop-shadow-md" />
        </div>
      </div>

      {/* Centered Text Area */}
      <div className="pt-2 flex-1 flex flex-col items-center text-center">
        <h4 className="font-serif text-[14px] sm:text-[15px] font-bold text-[#111827] leading-[1.3] line-clamp-2">
          {video.title}
        </h4>
        {video.description && (
          <p className="mt-1.5 text-[12px] sm:text-[13px] text-slate-500 line-clamp-2 leading-snug">
            {video.description}
          </p>
        )}
      </div>

    </Link>
  );
};

export default ExplainerCard;
