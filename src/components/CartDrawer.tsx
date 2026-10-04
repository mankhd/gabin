import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag, Trash2, ExternalLink } from 'lucide-react';
import type { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  waFallbackUrl?: string | null;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  waFallbackUrl,
}) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs cursor-pointer"
            onClick={onClose}
          />

          {/* Drawer Panel with Spring Slide-in */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 240 }}
            className="relative w-full max-w-md bg-[#faefe1] text-[#3b2723] h-full shadow-2xl z-10 flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-[#ebd9c5] flex items-center justify-between bg-white shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#faefe1] flex items-center justify-center text-[#3b2723]">
                  <ShoppingBag className="w-4 h-4 text-[#3b2723]" />
                </div>
                <div>
                  <h2 className="font-fredoka text-lg sm:text-xl font-bold leading-tight">Keranjang Belanja</h2>
                  <p className="text-[11px] text-slate-500">{items.reduce((s, i) => s + i.quantity, 0)} item dalam pesanan</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={onClose}
                aria-label="Tutup keranjang"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Item List with Staggered Animations */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
              
              {/* WhatsApp Fallback Redirect Notice if popup is blocked */}
              {waFallbackUrl && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 text-center space-y-2 mb-4 shadow-sm"
                >
                  <p className="text-xs font-bold text-emerald-900">
                    ✅ Format pesanan WhatsApp telah disiapkan!
                  </p>
                  <p className="text-[11px] text-emerald-700">
                    Klik tombol di bawah jika WhatsApp tidak terbuka otomatis:
                  </p>
                  <a
                    href={waFallbackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold font-fredoka shadow-sm transition-all"
                  >
                    <span>Lanjut ke WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </motion.div>
              )}

              {items.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-3"
                >
                  <div className="w-16 h-16 rounded-full bg-[#f3e2cd] flex items-center justify-center mx-auto text-[#8c6d64]">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <p className="font-fredoka text-lg text-[#634b45] font-semibold">Keranjang masih kosong</p>
                  <p className="text-xs text-[#8c6d64] max-w-xs mx-auto">
                    Yuk pilih varian rasa Gabin Ice Cream favorit Anda dan klik pesan!
                  </p>
                </motion.div>
              ) : (
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#ebd9c5] flex items-center gap-3.5 shadow-xs hover:shadow-md transition-shadow"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-xl bg-slate-50 p-1"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-fredoka font-bold text-sm text-[#2b1f1d] truncate">{item.name}</h3>
                        <p className="text-xs font-semibold text-[#8c6d64]">Rp {item.price.toLocaleString('id-ID')} / pcs</p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <motion.button
                            whileTap={{ scale: 0.85 }}
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            aria-label="Kurangi jumlah"
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </motion.button>
                          
                          <motion.span 
                            key={item.quantity}
                            initial={{ scale: 1.25 }}
                            animate={{ scale: 1 }}
                            className="text-sm font-bold font-fredoka px-1.5 min-w-[24px] text-center text-[#2b1f1d]"
                          >
                            {item.quantity}
                          </motion.span>
                          
                          <motion.button
                            whileTap={{ scale: 0.85 }}
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            aria-label="Tambah jumlah"
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </motion.button>

                          <motion.button
                            whileTap={{ scale: 0.85 }}
                            type="button"
                            onClick={() => onRemoveItem(item.id)}
                            aria-label="Hapus produk"
                            title="Hapus dari keranjang"
                            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors ml-1 cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="font-fredoka font-bold text-sm text-[#2b1f1d]">
                          Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer Checkout with Safe Area Bottom */}
            {items.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 sm:p-6 pb-[max(1.5rem,env(safe-area-inset-bottom,1.5rem))] bg-white border-t border-[#ebd9c5] space-y-3.5 shadow-lg"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 font-medium">Subtotal</span>
                  <span className="font-fredoka font-bold text-xl text-[#2b1f1d]">
                    Rp {subtotal.toLocaleString('id-ID')}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  🧊 Pengemasan dingin berinsulasi khusus menjaga es krim tetap beku dan biskuit tetap renyah sampai tujuan.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={onCheckout}
                  className="w-full py-3.5 px-6 rounded-full bg-[#15803d] hover:bg-[#166534] text-white font-fredoka font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer animate-pulse-glow"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>PESAN SEKARANG VIA WHATSAPP</span>
                </motion.button>
              </motion.div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
