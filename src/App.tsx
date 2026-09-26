import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SummerQuoteSection } from './components/SummerQuoteSection';
import { ExploreMenuSection } from './components/ExploreMenuSection';
import { FaqSection } from './components/FaqSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FooterSection } from './components/FooterSection';
import { CartDrawer } from './components/CartDrawer';

import { FLAVORS, PRODUCTS, FAQ_ITEMS, TESTIMONIALS } from './data';
import type { CartItem, Product } from './types';

export default function App() {
  const [flavorIndex, setFlavorIndex] = useState<number>(0);
  const [activeNav, setActiveNav] = useState<string>('home');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Initial cart items matching Gabin Ice Cream products
  const [cartItems, setCartItems] = useState<CartItem[]>([
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
  ]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Color dots for top right navigation
  const colorDots = FLAVORS.map((f) => ({
    id: f.id,
    hex: f.bgHex,
    name: f.name,
  }));

  const handlePrevFlavor = () => {
    setFlavorIndex((prev) => (prev === 0 ? FLAVORS.length - 1 : prev - 1));
  };

  const handleNextFlavor = () => {
    setFlavorIndex((prev) => (prev + 1) % FLAVORS.length);
  };

  const handleSelectFlavorIndex = (index: number) => {
    setFlavorIndex(index);
  };

  const handleSelectColorDot = (flavorId: string) => {
    const idx = FLAVORS.findIndex((f) => f.id === flavorId);
    if (idx !== -1) {
      setFlavorIndex(idx);
    }
  };

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

    if (typeof (window as any).AppCore !== 'undefined' && (window as any).AppCore.Toast) {
      (window as any).AppCore.Toast.show(
        `Berhasil menambahkan ${product.subtitle} ke keranjang!`,
        'success'
      );
    }
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

    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    let text = `Halo Gabin Ice Cream! \nSaya mau pesan Gabin Ice Cream \n\n`;
    text += `DETAIL PESANAN:\n`;
    cartItems.forEach((item, index) => {
      const itemTotal = (item.price * item.quantity).toLocaleString('id-ID');
      text += `• ${item.name} (${item.quantity} pcs) - Rp ${itemTotal}\n`;
    });

    text += `\nTotal Tagihan: Rp ${subtotal.toLocaleString('id-ID')}\n\n`;
    text += ` *Data Pengiriman:* \n`;
    text += `• Nama Pemesan: \n`;
    text += `• No. Telepon/WA: \n`;
    text += `• Alamat Lengkap: \n`;
    text += `• Catatan Pengiriman:  (COD/OJOL/PICKUP)\n\n`;
    text += `Mohon info ketersediaan dan metode pembayarannya ya. Terima kasih!`;

    const whatsappNumber = '6285139987445';
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    const waLink = document.createElement('a');
    waLink.href = waUrl;
    waLink.target = '_blank';
    waLink.rel = 'noopener noreferrer';
    document.body.appendChild(waLink);
    waLink.click();
    document.body.removeChild(waLink);

    setIsCartOpen(false);
  };

  const handleScrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderHeroFlavor = () => {
    const waUrl = 'https://wa.me/6285139987445';
    const waLink = document.createElement('a');
    waLink.href = waUrl;
    waLink.target = '_blank';
    waLink.rel = 'noopener noreferrer';
    document.body.appendChild(waLink);
    waLink.click();
    document.body.removeChild(waLink);
  };

  return (
    <div className="min-h-screen bg-[#faefe1] font-body text-[#3b2723] selection:bg-[#201817] selection:text-white">
      {/* Top Navigation Bar with dynamic hero color matching */}
      <div 
        className="hero-transition"
        style={{ backgroundColor: FLAVORS[flavorIndex].bgHex }}
      >
        <Navbar
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          colorDots={colorDots}
          activeColorDot={FLAVORS[flavorIndex].id}
          onSelectColorDot={handleSelectColorDot}
        />
      </div>

      {/* Hero Section with Interactive Flavor Carousel */}
      <HeroSection
        flavors={FLAVORS}
        currentIndex={flavorIndex}
        onPrev={handlePrevFlavor}
        onNext={handleNextFlavor}
        onSelectFlavor={handleSelectFlavorIndex}
        onOrderNow={handleOrderHeroFlavor}
        onScrollToMenu={handleScrollToMenu}
      />

      {/* Section 2: Summer Statement / Joy in Every Scoop Quote */}
      <SummerQuoteSection />

      {/* Section 3: "Explore Our Delicious Taste" Menu Showcase */}
      <ExploreMenuSection
        products={PRODUCTS}
        onBuyNow={handleBuyNow}
      />

      {/* Section 4: "Explore Our Delicious Taste" Testimonials (Ulasan Pelanggan) */}
      <TestimonialsSection testimonials={TESTIMONIALS} />

      {/* Section 5: Accordion FAQ Section */}
      <FaqSection items={FAQ_ITEMS} />

      {/* Section 6: Footer */}
      <FooterSection />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
