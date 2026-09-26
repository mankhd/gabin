import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

interface ExploreMenuSectionProps {
  products: Product[];
  onBuyNow: (product: Product) => void;
}

export const ExploreMenuSection: React.FC<ExploreMenuSectionProps> = ({
  products,
  onBuyNow,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="menu" className="relative w-full bg-[#93675c] text-white pt-16 pb-28 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
      
      <div className="max-w-[1480px] mx-auto w-full">
        {/* Header Row */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-sm">
              Menu Gabin Ice Cream
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-body">
              Setiap gigitan adalah perpaduan sempurna renyahnya biskuit gabin dan lembutnya 100% es krim asli. Nikmati kelezatan aneka rasa pilihan.
            </p>
          </div>
        </div>

        {/* Products Carousel / Grid with Left & Right Arrows */}
        <div className="relative w-full max-w-[1480px] mx-auto">
          
          {/* Navigation Arrow Left */}
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Menu sebelumnya"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-xl hover:bg-slate-100 hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Product Cards Container */}
          <div 
            ref={scrollRef}
            className="flex items-stretch justify-start xl:justify-center gap-6 overflow-x-auto pb-8 pt-12 px-2 no-scrollbar scroll-smooth w-fit max-w-full mx-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((prod) => (
              <div
                key={prod.id}
                className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-3xl pt-0 pb-6 px-6 text-center text-slate-900 shadow-xl flex flex-col justify-between relative mt-16 pint-card-hover group"
              >
                {/* Protruding Ice Cream Pint at the Top (Overflow effect as seen in video) */}
                <div className="relative -mt-20 flex justify-center mb-4">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    referrerPolicy="no-referrer"
                    className="w-44 sm:w-48 h-auto object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.25)] group-hover:scale-105 transition-transform duration-300 rounded-2xl"
                  />
                </div>

                {/* Price */}
                <div className="space-y-1 mb-6">
                  <div className="font-fredoka text-2xl sm:text-3xl font-bold text-[#2a1d1b]">
                    {prod.price}
                  </div>
                  <p className="text-xs text-slate-500 capitalize tracking-wide font-medium">
                    {prod.subtitle}
                  </p>
                </div>

                {/* Buy Now Button */}
                <button
                  type="button"
                  onClick={() => onBuyNow(prod)}
                  className="w-full py-2.5 px-4 rounded-full bg-[#201817] hover:bg-[#382b29] text-white text-xs font-bold font-fredoka tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>PESAN SEKARANG</span>
                </button>
              </div>
            ))}
          </div>

          {/* Navigation Arrow Right */}
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Menu berikutnya"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-xl hover:bg-slate-100 hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>
      </div>

      {/* Bottom Wave to Soft Cream Section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,50 C360,100 720,10 1080,70 L1440,30 L1440,100 L0,100 Z" 
            fill="#faefe1" 
          />
        </svg>
      </div>

    </section>
  );
};
