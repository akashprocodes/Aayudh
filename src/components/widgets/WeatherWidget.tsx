import React from 'react';
import { CloudSun, Wind, Droplets } from 'lucide-react';

export const WeatherWidget: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl p-5 text-white shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-20">
        <CloudSun size={90} />
      </div>
      
      <div className="relative z-10">
        <h3 className="text-xs font-bold uppercase tracking-wider mb-1 text-blue-100">Bhopal, MP</h3>
        <div className="flex items-end gap-3 mb-5">
          <span className="text-5xl font-black font-sans leading-none">32°</span>
          <span className="text-base font-medium text-blue-50 mb-1 leading-none">Partly Cloudy</span>
        </div>
        
        <div className="flex items-center justify-between text-xs font-medium bg-black/15 rounded-xl p-3 backdrop-blur-sm border border-white/10">
          <div className="flex items-center gap-2">
            <Wind size={15} className="text-blue-200" />
            <span>12 km/h</span>
          </div>
          <div className="w-[1px] h-4 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <Droplets size={15} className="text-blue-200" />
            <span>45% Hum</span>
          </div>
        </div>
      </div>
    </div>
  );
};
