import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  ArrowRight,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import type { Flavor } from '../types';
import avatar1 from '../assets/images/regenerated_image_1790405657706.png';
import avatar2 from '../assets/images/regenerated_image_1790405658367.avif';
import avatar3 from '../assets/images/regenerated_image_1790405658967.png';

interface HeroSectionProps {
  flavors: Flavor[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectFlavor: (index: number) => void;
  onOrderNow: () => void;
  onScrollToMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  flavors,
  currentIndex,
  onPrev,
  onNext,
  onSelectFlavor,
  onOrderNow,
  onScrollToMenu,
}) => {
  const current = flavors[currentIndex] || flavors[0];
  const nextIndex = (currentIndex + 1) % flavors.length;
  const nextNextIndex = (currentIndex + 2) % flavors.length;
  const nextFlavor = flavors[nextIndex];
  const nextNextFlavor = flavors[nextNextIndex];

  return (
    <section 
      id="hero"
      className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden hero-transition pt-4"
      style={{ backgroundColor: current.bgHex }}
    >
      {/* Main Content Area */}
      <div className="relative z-20 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 pt-4 sm:pt-6 pb-20 lg:pb-28">
        
        {/* Left Column: Typography & Call to Action */}
        <div className="w-full lg:w-[420px] xl:w-[460px] flex-shrink-0 flex flex-col items-start text-left text-white space-y-5 relative z-30">
          
          <h1 id="hero-title" className="font-fredoka flex flex-wrap items-baseline gap-x-3 sm:gap-x-4 leading-tight tracking-tight drop-shadow-sm">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] xl:text-[68px] font-bold">
              Gabin Bar
            </span>
            <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold opacity-95 tracking-wide">
              Ice Cream
            </span>
          </h1>

          <p id="hero-desc" className="text-sm sm:text-base text-white/90 max-w-md leading-relaxed font-body whitespace-pre-line">
            {current.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            <button
              id="hero-order-now-btn"
              type="button"
              onClick={onOrderNow}
              className="px-6 sm:px-7 py-3 rounded-full border-2 border-white text-white font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              PESAN SEKARANG
            </button>

            <button
              id="hero-see-menu-btn"
              type="button"
              onClick={onScrollToMenu}
              className="px-4 sm:px-5 py-3 rounded-full text-white/90 font-bold text-xs sm:text-sm tracking-wider uppercase hover:text-white flex items-center gap-2 hover:underline transition-all"
            >
              <span>LIHAT MENU</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Customer Reviews Badge (Clickable link to #reviews) */}
          <a 
            href="#reviews"
            className="pt-4 sm:pt-6 flex items-center gap-4 hover:opacity-95 transition-transform hover:-translate-y-0.5 cursor-pointer group"
          >
            <div className="flex -space-x-2.5 overflow-hidden">
              <img
                className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-white/50 object-cover bg-white/20"
                src={avatar1}
                alt="Reviewer 1"
                referrerPolicy="no-referrer"
              />
              <img
                className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-white/50 object-cover bg-white/20"
                src={avatar2}
                alt="Reviewer 2"
                referrerPolicy="no-referrer"
              />
              <img
                className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-white/50 object-cover bg-white/20"
                src={avatar3}
                alt="Reviewer 3"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <span className="font-bold text-sm text-white font-fredoka group-hover:underline">10Rb+ Ulasan</span>
              </div>
              <p className="text-xs text-white/80">Pelanggan sangat puas</p>
            </div>
          </a>

        </div>

        {/* Center/Right: Centered Pint Showcase Stage */}
        <div className="w-full lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-6xl flex flex-col items-center justify-center relative mt-6 lg:mt-0 lg:pointer-events-none z-25">
          
          {/* Pint Stage Container */}
          <div className="relative flex items-end justify-center w-full max-w-xl lg:max-w-3xl min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] lg:pointer-events-auto">
            
            {/* Background Glow */}
            <div 
              className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ backgroundColor: current.accentColor }}
            />

            {/* Primary Center Pint (Centered in Viewport) */}
            <div 
              key={current.id}
              className="relative z-25 flex flex-col items-center transition-all duration-500 ease-out transform animate-float-slow animate-in fade-in zoom-in-95 cursor-default select-none"
            >
              {/* Pint Image */}
              <div className="relative group flex items-center justify-center">
                <img
                  src={current.image}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="w-52 sm:w-64 md:w-72 lg:w-[320px] xl:w-[350px] max-h-[280px] sm:max-h-[350px] md:max-h-[380px] lg:max-h-[420px] h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] rounded-3xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Next Pint Preview (Positioned right of center, click immediately glides to center) */}
            <div 
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              title={`Klik untuk pindah ke tengah: ${nextFlavor.name}`}
              className="absolute right-2 sm:right-6 lg:left-[calc(50%+160px)] xl:left-[calc(50%+190px)] lg:right-auto bottom-4 sm:bottom-6 z-20 opacity-85 hover:opacity-100 cursor-pointer transition-all duration-300 transform scale-70 sm:scale-75 hover:scale-80 origin-bottom"
            >
              <img
                src={nextFlavor.image}
                alt={nextFlavor.name}
                referrerPolicy="no-referrer"
                className="w-40 sm:w-48 max-h-[240px] sm:max-h-[280px] h-auto object-contain drop-shadow-xl rounded-2xl"
              />
            </div>

            {/* Third Pint Preview (Far right, click immediately glides to center) */}
            <div 
              onClick={(e) => {
                e.stopPropagation();
                onSelectFlavor(nextNextIndex);
              }}
              title={`Klik untuk pindah ke tengah: ${nextNextFlavor.name}`}
              className="hidden lg:flex absolute left-[calc(50%+320px)] xl:left-[calc(50%+370px)] bottom-8 z-15 opacity-55 hover:opacity-90 cursor-pointer transition-all duration-300 transform scale-50 hover:scale-60 origin-bottom"
            >
              <img
                src={nextNextFlavor.image}
                alt={nextNextFlavor.name}
                referrerPolicy="no-referrer"
                className="w-36 sm:w-40 max-h-[180px] sm:max-h-[200px] h-auto object-contain drop-shadow-md rounded-2xl"
              />
            </div>

          </div>

          {/* Carousel Navigation Arrows Below Pint */}
          <div className="relative z-30 flex items-center gap-3 mt-4 lg:pointer-events-auto">
            <button
              id="hero-prev-btn"
              type="button"
              onClick={onPrev}
              aria-label="Previous Flavor"
              className="w-10 h-10 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-lg hover:bg-slate-100 hover:scale-110 active:scale-95 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span
              id="hero-counter-display"
              className="text-xs font-bold text-white font-fredoka tracking-widest px-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] [text-shadow:_0_2px_10px_rgba(0,0,0,0.6),_0_1px_3px_rgba(0,0,0,0.5)]"
            >
              0{currentIndex + 1} / 0{flavors.length}
            </span>
            <button
              id="hero-next-btn"
              type="button"
              onClick={onNext}
              aria-label="Next Flavor"
              className="w-10 h-10 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-lg hover:bg-slate-100 hover:scale-110 active:scale-95 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>

      {/* Social Media Links (Bottom Right) */}
      <div className="absolute right-8 bottom-24 z-30 hidden sm:flex items-center gap-3 text-white/80">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noreferrer" 
          className="p-2 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noreferrer" 
          className="p-2 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noreferrer" 
          className="p-2 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-4 h-4" />
        </a>
      </div>

      {/* Organic High-reaching Curved Wave at Bottom ("Shape Divider nya bikin keatas lagi") */}
      <div className="relative w-full z-10 -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 xl:-mt-48 -mb-1 pointer-events-none overflow-hidden">
        {/* Smooth High-Arching SVG Cream Wave */}
        <svg 
          viewBox="0 0 1440 320" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-44 sm:h-56 md:h-64 lg:h-72 xl:h-80 block"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,210 C120,160 220,260 320,260 C440,260 490,65 620,65 C760,65 830,250 960,250 C1090,250 1170,120 1300,120 C1360,120 1400,140 1440,165 L1440,320 L0,320 Z" 
            fill="#faefe1" 
          />
        </svg>
      </div>

    </section>
  );
};
