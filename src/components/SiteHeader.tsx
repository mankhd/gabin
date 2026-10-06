import React from 'react';
import { MapPin, Phone, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

interface SiteHeaderProps {
  totalCartCount: number;
  badgeTrigger: number;
  onOpenCart: () => void;
  onOpenLocation: () => void;
  onOpenContact: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  totalCartCount,
  badgeTrigger,
  onOpenCart,
  onOpenLocation,
  onOpenContact,
}) => {
  return (
    <header className="sticky top-0 left-0 w-full z-40 bg-[#2b1f1d]/92 backdrop-blur-md border-b border-white/10 shadow-lg pt-[max(6px,env(safe-area-inset-top,6px))] transition-all">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 flex items-center justify-between gap-3">
        {/* Big Brand Logo */}
        <a href="#menu" className="inline-flex items-center group" aria-label="Gabin Ice Cream">
          <img
            src="/assets/images/logo.png"
            alt="Gabin Ice Cream Logo"
            className="h-14 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.38)] group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Header Navigation Actions */}
        <nav className="flex items-center gap-1.5 sm:gap-3" aria-label="Navigasi Header">
          {/* Lokasi Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={onOpenLocation}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-fredoka text-xs sm:text-sm font-semibold border border-white/20 transition-all cursor-pointer backdrop-blur-sm"
          >
            <MapPin className="w-4 h-4 text-rose-300" />
            <span>Lokasi</span>
          </motion.button>

          {/* Kontak Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-fredoka text-xs sm:text-sm font-semibold border border-white/20 transition-all cursor-pointer backdrop-blur-sm"
          >
            <Phone className="w-4 h-4 text-emerald-300" />
            <span>Kontak</span>
          </motion.button>

          {/* Cart Trigger */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={onOpenCart}
            aria-label="Buka Keranjang Belanja"
            className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#201817] text-amber-300 flex items-center justify-center border-2 border-white/25 shadow-md hover:bg-[#382b29] transition-all cursor-pointer ml-1"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            {totalCartCount > 0 && (
              <motion.span
                key={badgeTrigger}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-red-600 text-white text-[11px] font-bold font-fredoka rounded-full min-w-5 h-5 px-1 flex items-center justify-center border-2 border-[#201817] shadow-sm"
              >
                {totalCartCount}
              </motion.span>
            )}
          </motion.button>
        </nav>
      </div>
    </header>
  );
};
