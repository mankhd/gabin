import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import type { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="reviews" className="relative w-full bg-[#faefe1] py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 overflow-hidden">
      <div className="w-full space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3b2723]">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-sm sm:text-base text-[#6b4c43] font-body">
            Cerita jujur dari para penikmat Gabin Ice Cream yang selalu kembali untuk rasa favorit mereka.
          </p>
        </div>

        {/* Decorative Doodles (matching video green squiggle) */}
        <div className="relative">
          
          {/* Top Left Doodle */}
          <div className="absolute -top-6 left-4 sm:left-12 pointer-events-none opacity-70">
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12C8 2 16 22 24 12C32 2 40 22 46 12" stroke="#489e66" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Bottom Right Doodle */}
          <div className="absolute -bottom-6 right-4 sm:right-12 pointer-events-none opacity-70">
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12C8 2 16 22 24 12C32 2 40 22 46 12" stroke="#489e66" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {testimonials.map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="bg-white rounded-3xl p-7 shadow-lg border border-[#ebd9c5] flex flex-col justify-between space-y-6 hover:shadow-xl transition-shadow duration-200"
              >
                {/* Quote Mark */}
                <div className="text-[#3b2723] opacity-80">
                  <Quote className="w-8 h-8 fill-[#3b2723]" />
                </div>

                {/* Quote Body */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-body">
                  "{t.quote}"
                </p>

                {/* Author Info with Initial Badge */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-[#ebd9c5] text-[#3b2723] flex items-center justify-center font-bold text-xs font-fredoka">
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="font-fredoka font-bold text-sm text-[#2b1f1d]">
                      {t.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Arrows Bottom Center */}
          <div className="flex items-center justify-center gap-3 pt-8">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-white border border-[#ebd9c5] text-[#3b2723] flex items-center justify-center shadow-md hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-white border border-[#ebd9c5] text-[#3b2723] flex items-center justify-center shadow-md hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
