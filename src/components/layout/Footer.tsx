'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from '../common/BrandIcons';
import { footerNav } from '@/config/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0a0d14] text-slate-400 font-sans border-t border-slate-800/50">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-0 sm:px-6 lg:px-8">
        
        {/* Top Footer Link Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          
          {/* Contact Us */}
          <div className="pr-4 lg:col-span-1">
            <h3 className="text-[14px] font-bold text-white mb-8 uppercase tracking-[0.2em]">Contact Us</h3>
            
            <ul className="space-y-6 text-[13.5px]">
              <li className="flex items-start gap-4 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="leading-relaxed mt-1">
                  <span className="block text-slate-200 mb-1 font-semibold text-xs tracking-wider uppercase">Registered Address</span>
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors">A-494, Shahpura, Bhopal, Madhya Pradesh, 462016</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="leading-relaxed mt-1">
                  <span className="block text-slate-200 mb-1 font-semibold text-xs tracking-wider uppercase">Office Address</span>
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors">E4/230, E-4, Arera Colony, Bhopal, Madhya Pradesh 462016</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <a href="tel:+919876543210" className="text-slate-400 hover:text-white transition-colors duration-300 mt-0.5">
                  +(91) 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:info@aayudhnews.com" className="text-slate-400 hover:text-white transition-colors duration-300 mt-0.5">
                  info@aayudhnews.com
                </a>
              </li>
            </ul>

            <div className="pt-8 flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/60 hover:border-slate-400 transition-all duration-300" aria-label="Facebook">
                <FacebookIcon className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/60 hover:border-slate-400 transition-all duration-300" aria-label="Twitter">
                <TwitterIcon className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/60 hover:border-slate-400 transition-all duration-300" aria-label="Youtube">
                <YoutubeIcon className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/60 hover:border-slate-400 transition-all duration-300" aria-label="Instagram">
                <InstagramIcon className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Useful Links (Spans 2 columns) */}
          <div className="lg:pl-6 lg:col-span-2">
            <h3 className="text-[14px] font-bold text-white mb-8 uppercase tracking-[0.2em]">Useful Links</h3>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-7 text-[15.5px]">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white hover:pl-1 transition-all duration-300 inline-block">
                  Home
                </Link>
              </li>
              {footerNav.categories.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-slate-300 hover:text-white hover:pl-1 transition-all duration-300 inline-block">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white hover:pl-1 transition-all duration-300 inline-block">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:pl-2 lg:col-span-1">
            <h3 className="text-[14px] font-bold text-white mb-8 uppercase tracking-[0.2em]">Our Services</h3>
            <ul className="space-y-7 text-[15.5px]">
              {footerNav.features.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-slate-300 hover:text-white hover:pl-1 transition-all duration-300 inline-block">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white hover:pl-1 transition-all duration-300 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Gradient Divider */}
        <div className="mt-20 mb-8 h-px w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[13px] text-slate-400 pb-12 font-medium">
          <p>
            Copyright &copy; {new Date().getFullYear()} <span className="text-white font-bold tracking-wide">AAYUDH</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 mt-5 md:mt-0">
            <Link href="/terms" className="hover:text-white transition-colors duration-300">Terms of Services</Link>
            <Link href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
          </div>
        </div>

      </div>
      
      {/* Giant Background Text */}
      <div className="w-full flex justify-center overflow-hidden leading-[0.65] pt-8 pb-0 pointer-events-none select-none relative z-0">
        <span className="text-[30vw] md:text-[340px] font-black tracking-[-0.06em] text-transparent bg-clip-text bg-gradient-to-b from-[#1e293b] via-[#0f172a]/80 to-[#0a0d14]">
          aayudh
        </span>
      </div>
    </footer>
  );
};

export default Footer;
