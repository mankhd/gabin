import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ShoppingCart, Sparkles } from 'lucide-react';
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
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="menu" className="relative w-full min-h-screen min-h-[100dvh] bg-[#93675c] text-white py-8 sm:py-14 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden flex flex-col justify-center">
      
      {/* Background Subtle Gradient Blobs for Depth */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#a3756a]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#7a4f45]/50 blur-3xl pointer-events-none" />

      <div className="max-w-[1480px] mx-auto w-full relative z-10">
        
        {/* Header Row with Animated Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 mb-8 sm:mb-12 pr-14 sm:pr-0"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-amber-200 text-xs font-semibold mb-2.5 border border-white/20 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>100% Es Krim Lembut & Biskuit Renyah</span>
            </div>
            <h2 className="font-fredoka text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-md leading-tight">
              Menu Gabin Ice Cream
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm md:text-base text-white/85 leading-relaxed font-body">
              Setiap gigitan adalah perpaduan sempurna renyahnya biskuit gabin dan lembutnya 100% es krim asli. Nikmati kelezatan aneka rasa pilihan.
            </p>
          </div>
        </motion.div>

        {/* Products Carousel Container */}
        <div className="relative w-full max-w-[1480px] mx-auto">
          
          {/* Navigation Arrow Left (Visible on Android and all devices) */}
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={() => scroll('left')}
            aria-label="Menu sebelumnya"
            className="flex absolute left-1 sm:-left-3 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 text-slate-800 items-center justify-center shadow-2xl hover:bg-white transition-colors cursor-pointer border border-black/10 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>

          {/* Product Cards Container with Generous Padding to Prevent ANY Clipping */}
          <div 
            ref={scrollRef}
            className="flex items-stretch justify-start xl:justify-center gap-5 sm:gap-6 md:gap-7 overflow-x-auto pb-8 pt-24 sm:pt-28 md:pt-32 px-10 sm:px-14 md:px-16 no-scrollbar scroll-smooth w-full snap-x snap-mandatory touch-pan-x"
          >
            {products.map((prod, index) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08, 
                  type: 'spring', 
                  stiffness: 260, 
                  damping: 20 
                }}
                whileHover={{ y: -10 }}
                className="flex-shrink-0 w-[240px] sm:w-64 md:w-72 bg-white rounded-3xl pt-0 pb-6 px-5 sm:px-6 text-center text-slate-900 shadow-xl hover:shadow-2xl flex flex-col justify-between relative mt-12 sm:mt-14 group snap-center transition-shadow duration-300 overflow-visible"
              >
                {/* Protruding Ice Cream Pint with Gentle Floating Animation (Completely Unclipped) */}
                <div className="relative -mt-16 sm:-mt-20 flex justify-center mb-3 sm:mb-4 overflow-visible">
                  <motion.img
                    src={prod.image}
                    alt={prod.title}
                    referrerPolicy="no-referrer"
                    className="w-40 sm:w-44 md:w-48 max-w-[92%] h-auto object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.28)] animate-float-slow group-hover:scale-108 group-hover:-rotate-2 transition-transform duration-300 pointer-events-none select-none"
                  />
                </div>

                {/* Price & Name */}
                <div className="space-y-1 mb-5 sm:mb-6">
                  <div className="font-fredoka text-2xl sm:text-3xl font-bold text-[#2a1d1b] tracking-tight">
                    {prod.price}
                  </div>
                  <p className="text-xs text-slate-500 capitalize tracking-wide font-medium">
                    {prod.subtitle}
                  </p>
                </div>

                {/* Buy Now Button with Bounce Effect */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.94 }}
                  type="button"
                  onClick={() => onBuyNow(prod)}
                  className="w-full py-2.5 px-4 rounded-full bg-[#201817] hover:bg-[#382b29] text-white text-xs font-bold font-fredoka tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-colors cursor-pointer"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>PESAN SEKARANG</span>
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrow Right (Visible on Android and all devices) */}
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={() => scroll('right')}
            aria-label="Menu berikutnya"
            className="flex absolute right-1 sm:-right-3 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 text-slate-800 items-center justify-center shadow-2xl hover:bg-white transition-colors cursor-pointer border border-black/10 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden justify-center items-center gap-2 mt-4 text-white/70 text-xs font-medium">
          <span>👈 Geser untuk melihat semua varian rasa 👉</span>
        </div>

      </div>
    </section>
  );
};
