import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { SiteHeader } from './components/SiteHeader';
import { InfoModals } from './components/InfoModals';
import { ExploreMenuSection } from './components/ExploreMenuSection';
import { CartDrawer } from './components/CartDrawer';
import { PRODUCTS } from './data';
import type { CartItem, Product } from './types';

const STORAGE_KEY = 'creamy_cart';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [waFallbackUrl, setWaFallbackUrl] = useState<string | null>(null);
  const [badgeTrigger, setBadgeTrigger] = useState<number>(0);

  // Initialize cart from localStorage if available, or initial default items
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // Fallback
    }
    return [
      {
        id: 'prod-1',
        name: 'Gabin Oreo',
        price: 10000,
        quantity: 1,
        image: '/assets/images/regenerated_image_1790068969600.png',
      },
      {
        id: 'prod-2',
        name: 'Gabin Matcha',
        price: 10000,
        quantity: 1,
        image: '/assets/images/regenerated_image_1790068971665.png',
      },
    ];
  });

  // Save to localStorage whenever cartItems changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Ignore
    }
  }, [cartItems]);

  // Toast Auto-Dismiss
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 2800);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleBuyNow = (product: Product) => {
    const numPrice = parseFloat(product.price.replace(/[^0-9]/g, '')) || 10000;
    
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.subtitle,
          price: numPrice,
          quantity: 1,
          image: product.image,
        },
      ];
    });

    setBadgeTrigger((c) => c + 1);
    setToastMessage(`${product.subtitle} berhasil ditambahkan ke keranjang!`);
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    let text = `Halo Gabin Ice Cream! \nSaya mau pesan Gabin Ice Cream \n\n`;
    text += `DETAIL PESANAN:\n`;
    cartItems.forEach((item) => {
      const itemTotal = (item.price * item.quantity).toLocaleString('id-ID');
      text += `• ${item.name} (${item.quantity} pcs) - Rp ${itemTotal}\n`;
    });

    text += `\nTotal Tagihan: Rp ${subtotal.toLocaleString('id-ID')}\n\n`;
    text += `*Data Pengiriman:*\n`;
    text += `• Nama Pemesan: \n`;
    text += `• No. Telepon/WA: \n`;
    text += `• Alamat Lengkap: \n`;
    text += `• Catatan Pengiriman: (COD/OJOL/PICKUP)\n\n`;
    text += `Mohon info ketersediaan dan metode pembayarannya ya. Terima kasih!`;

    const whatsappNumber = '6285139987445';
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setWaFallbackUrl(waUrl);

    // Open WhatsApp in new tab
    const waLink = document.createElement('a');
    waLink.href = waUrl;
    waLink.target = '_blank';
    waLink.rel = 'noopener noreferrer';
    document.body.appendChild(waLink);
    waLink.click();
    document.body.removeChild(waLink);
  };

  return (
    <div className="min-h-screen min-h-[100dvh] bg-[#93675c] font-body text-[#3b2723] flex flex-col justify-start selection:bg-[#201817] selection:text-white relative">
      
      {/* Top Site Header with Big Logo, Lokasi, and Kontak Popups */}
      <SiteHeader
        totalCartCount={totalCartCount}
        badgeTrigger={badgeTrigger}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenLocation={() => setIsLocationOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content: Explore Menu Section */}
      <main className="w-full flex-1 flex flex-col justify-center">
        <ExploreMenuSection
          products={PRODUCTS}
          onBuyNow={handleBuyNow}
        />
      </main>

      {/* Floating Animated Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#201817]/95 text-white text-xs sm:text-sm font-fredoka shadow-2xl border border-white/20 backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{toastMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-out Cart Drawer with WhatsApp Ordering */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleCheckout}
        waFallbackUrl={waFallbackUrl}
      />

      {/* Popups: Lokasi & Kontak */}
      <InfoModals
        isLocationOpen={isLocationOpen}
        onCloseLocation={() => setIsLocationOpen(false)}
        isContactOpen={isContactOpen}
        onCloseContact={() => setIsContactOpen(false)}
        onShowToast={(msg) => setToastMessage(msg)}
      />

    </div>
  );
}
