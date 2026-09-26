import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import type { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#faefe1] text-[#3b2723] h-full shadow-2xl z-10 flex flex-col justify-between overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-[#ebd9c5] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#3b2723]" />
            <h2 className="font-fredoka text-xl font-bold">Keranjang Belanja Anda</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup keranjang"
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#ebd9c5] mx-auto" />
              <p className="font-fredoka text-base text-[#634b45]">Keranjang belanja masih kosong</p>
              <p className="text-xs text-[#8c6d64]">Pilih varian Gabin Ice Cream favorit Anda sekarang!</p>
            </div>
          ) : (
            items.map((item) => (
              <div 
                key={item.id}
                className="bg-white p-4 rounded-2xl border border-[#ebd9c5] flex items-center gap-4 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 object-contain rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-fredoka font-bold text-sm text-[#2b1f1d]">{item.name}</h3>
                  <p className="text-xs font-semibold text-[#8c6d64]">Rp {item.price.toLocaleString('id-ID')} / pcs</p>
                  
                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      aria-label="Kurangi jumlah"
                      className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold font-fredoka px-1 min-w-4 text-center">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      aria-label="Tambah jumlah"
                      className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      aria-label="Hapus produk"
                      title="Hapus dari keranjang"
                      className="p-1 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors ml-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-fredoka font-bold text-sm text-[#2b1f1d]">
                    Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-[#ebd9c5] space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 font-medium">Subtotal</span>
              <span className="font-fredoka font-bold text-lg text-[#2b1f1d]">Rp {subtotal.toLocaleString('id-ID')}</span>
            </div>
            <p className="text-[11px] text-slate-500">Pengemasan dingin berinsulasi khusus menjaga es krim tetap beku sampai tujuan.</p>
            
            <button
              type="button"
              onClick={onCheckout}
              className="w-full py-3.5 px-6 rounded-full bg-[#15803d] hover:bg-[#166534] text-white font-fredoka font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>PESAN SEKARANG VIA WHATSAPP</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
