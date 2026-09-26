import React, { useState } from 'react';
import { ArrowDown, Sparkles, Heart } from 'lucide-react';
import type { FaqItem } from '../types';

interface FaqSectionProps {
  items: FaqItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faqs" className="w-full bg-[#faefe1] py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
      <div className="w-full">
        
        {/* Rounded Forest Green Box (matching video 00:09) */}
        <div className="bg-[#489e66] text-white rounded-[40px] p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          {/* Subtle background circles */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-black/5 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-fredoka text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Pertanyaan Umum
              </h2>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-body max-w-sm">
                Jawaban lengkap seputar produk, kualitas bahan, daya simpan, dan pengiriman Gabin Ice Cream.
              </p>

              {/* Bottom Decorative Badges */}
              <div className="pt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shadow-inner">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shadow-inner">
                  <Heart className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Right Column: Accordion Questions */}
            <div className="lg:col-span-7 space-y-3">
              {items.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-white text-slate-800 rounded-3xl overflow-hidden transition-all duration-200 shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className="w-full py-4 px-6 sm:px-7 flex items-center justify-between gap-4 text-left transition-colors hover:bg-slate-50"
                    >
                      <span className="font-fredoka font-semibold text-sm sm:text-base text-[#241a18]">
                        {item.question}
                      </span>
                      
                      {/* Arrow Icon in Circle Button (matches video exactly) */}
                      <span 
                        className={`w-9 h-9 rounded-full bg-[#3d8557] text-white flex-shrink-0 flex items-center justify-center transition-transform duration-300 ${
                          isOpen ? 'rotate-180 bg-[#255737]' : ''
                        }`}
                      >
                        <ArrowDown className="w-4 h-4" />
                      </span>
                    </button>

                    {/* Collapsible Answer */}
                    {isOpen && (
                      <div className="px-6 sm:px-7 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-body border-t border-slate-100">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
