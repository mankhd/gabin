import React from 'react';
import { SCOOP_IMAGE } from '../data';

export const SummerQuoteSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full bg-[#faefe1] pt-0 pb-16 sm:pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 overflow-hidden">
      
      {/* Floating Decorative Scoops on Left and Right (matching video at 00:06) */}
      <div className="absolute left-4 sm:left-12 top-[48%] -translate-y-1/2 pointer-events-none opacity-80 sm:opacity-100">
        <div className="relative">
          <img
            src={SCOOP_IMAGE}
            alt="Artisan Scoop"
            referrerPolicy="no-referrer"
            className="w-16 sm:w-24 h-auto object-contain drop-shadow-md rounded-full transform -rotate-12 animate-float-slow"
          />
          {/* Mini crumble */}
          <div className="w-3 h-3 rounded-full bg-[#6a4439] absolute -bottom-2 right-2 opacity-60" />
          <div className="w-2 h-2 rounded-full bg-[#6a4439] absolute -top-1 left-4 opacity-50" />
        </div>
      </div>

      <div className="absolute right-4 sm:right-12 top-[48%] -translate-y-1/2 pointer-events-none opacity-80 sm:opacity-100">
        <div className="relative">
          <img
            src={SCOOP_IMAGE}
            alt="Artisan Scoop"
            referrerPolicy="no-referrer"
            className="w-20 sm:w-28 h-auto object-contain drop-shadow-md rounded-full transform rotate-12 animate-float-reverse"
          />
          <div className="w-4 h-4 rounded-full bg-[#6a4439] absolute -bottom-3 left-1 opacity-60" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#6a4439] absolute top-1 right-2 opacity-50" />
        </div>
      </div>

      {/* Main Quote Text */}
      <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 relative z-10 -mt-10 sm:-mt-16 md:-mt-20 lg:-mt-24 pt-0 pb-6 sm:pb-8">
        <div className="flex flex-col items-center gap-4 sm:gap-5 text-center">
          <a 
            href="#reviews"
            className="inline-flex items-center gap-2 bg-[#eedbc9] hover:bg-[#e5cdb7] text-[#624036] px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-fredoka text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase shadow-sm border border-[#624036]/15 transition-transform hover:-translate-y-0.5"
          >
            <span className="text-amber-500 tracking-wider">★★★★★</span>
            <span>100+ Ulasan Pelanggan Puas</span>
          </a>

          <h2 className="font-fredoka text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-[#624036] leading-snug sm:leading-tight lg:leading-[1.26] tracking-tight max-w-4xl mx-auto">
            Renyahnya gabin, lembutnya ice cream, dan manisnya kebahagiaan dalam setiap gigitan. <br className="hidden md:inline" />
            Dibuat dengan bahan berkualitas untuk rasa yang creamy dan bikin nagih!
          </h2>
        </div>
      </div>

      {/* Organic chocolate wavy curve transition into Explore section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C320,120 480,10 780,80 C1080,140 1260,20 1440,70 L1440,120 L0,120 Z" 
            fill="#93675c" 
          />
        </svg>
      </div>

    </section>
  );
};
