import React, { useState } from 'react';
import { ShoppingBag, User, Heart, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
  colorDots?: { id: string; hex: string; name: string }[];
  activeColorDot?: string;
  onSelectColorDot?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  activeNav,
  setActiveNav,
  colorDots = [],
  activeColorDot = '',
  onSelectColorDot,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'BERANDA', id: 'home', target: '#hero' },
    { label: 'MENU', id: 'menu', target: '#menu' },
    { label: 'ULASAN', id: 'reviews', target: '#reviews' },
    { label: 'TENTANG KAMI', id: 'about', target: '#about' },
    { label: 'KONTAK', id: 'contact', target: '#contact' },
  ];

  const handleNavClick = (id: string, target: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative z-40 w-full pt-5 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
      <div className="w-full flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <a 
            href="#hero" 
            id="site-logo"
            aria-label="Gabin Ice Cream"
            className="inline-flex items-center select-none hover:opacity-95 transition-all"
          >
            <img 
              id="site-logo-img"
              src="/assets/images/logo gabin coba.png" 
              alt="Gabin Ice Cream Logo" 
              className="brand-logo-img w-11 h-11 sm:w-13 sm:h-13 aspect-square rounded-[10px] sm:rounded-xl object-cover shadow-md border-2 border-white/45 hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>

        {/* Floating Center Nav Pill for Tablets & Desktops */}
        <nav 
          id="main-nav-pill"
          className="hidden md:flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/50"
        >
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.target)}
                type="button"
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 uppercase ${
                  isActive
                    ? 'bg-[#1f1a19] text-white shadow-sm'
                    : 'text-[#4a3b32] hover:text-black hover:bg-black/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Controls & Cart with Badge */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Wishlist button */}
          <button
            type="button"
            aria-label="Favorites"
            className="hidden sm:flex w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white items-center justify-center transition-colors backdrop-blur-sm"
          >
            <Heart className="w-4 h-4 fill-white/20" />
          </button>

          {/* Cart Button with Red Notification Badge */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label="Shopping Cart"
            className="relative w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-transform hover:scale-105 backdrop-blur-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            <span 
              id="cart-badge-counter"
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md animate-pulse"
            >
              {cartCount}
            </span>
          </button>

          {/* User Avatar */}
          <button
            type="button"
            aria-label="Profile"
            className="hidden sm:flex w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white items-center justify-center transition-colors backdrop-blur-sm overflow-hidden"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 bg-[#1f1a19]/95 backdrop-blur-lg rounded-2xl p-3 border border-white/20 shadow-2xl flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id, item.target)}
              type="button"
              className={`w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold tracking-wider uppercase transition-colors ${
                activeNav === item.id
                  ? 'bg-white text-[#1f1a19]'
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
          {/* Mobile flavor dots if available */}
          {colorDots.length > 0 && onSelectColorDot && (
            <div className="pt-2 mt-1 border-t border-white/10 flex items-center justify-center gap-3">
              {colorDots.map((dot) => (
                <button
                  key={dot.id}
                  onClick={() => {
                    onSelectColorDot(dot.id);
                    setMobileMenuOpen(false);
                  }}
                  title={dot.name}
                  type="button"
                  className={`w-6 h-6 rounded-full transition-transform border-2 ${
                    activeColorDot === dot.id ? 'scale-125 border-white shadow-md' : 'border-transparent opacity-80'
                  }`}
                  style={{ backgroundColor: dot.hex }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </header>
  );
};
