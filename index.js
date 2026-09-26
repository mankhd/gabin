/**
 * ==========================================================================
 * INDEX.JS - Primary Application Orchestrator
 * Controls Hero Carousel, Flavor Switcher, Shopping Cart Drawer, and FAQs.
 * Runs directly in browser via <script src="./index.js"></script>
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.CREAMY_DATA || { flavors: [], products: [], initialCart: [] };
  
  // State
  let currentFlavorIndex = 0;
  let cart = window.Storage.get('creamy_cart', data.initialCart);

  // DOM Elements
  const heroSection = document.getElementById('hero');
  const heroWrapper = document.getElementById('hero-wrapper');
  const heroTitle = document.getElementById('hero-title');
  const heroDesc = document.getElementById('hero-desc');
  const heroPintMain = document.getElementById('hero-main-pint-img');
  const heroPintNext = document.getElementById('hero-next-pint-img');
  const heroPintThird = document.getElementById('hero-third-pint-img');
  const heroCalorie = document.getElementById('hero-calorie-val');
  const heroCounter = document.getElementById('hero-counter-display');

  const cartTriggerBtn = document.getElementById('cart-trigger-btn');
  const cartBadge = document.getElementById('cart-badge-count');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartSubtotal = document.getElementById('cart-subtotal-val');
  const cartCheckoutBtn = document.getElementById('btn-checkout-now');

  const heroPrevBtn = document.getElementById('hero-prev-btn');
  const heroNextBtn = document.getElementById('hero-next-btn');
  const heroOrderNowBtn = document.getElementById('hero-order-now-btn');
  const heroPintStage = document.getElementById('hero-pint-stage');

  const menuTrack = document.getElementById('menu-cards-track');
  const carouselPrevBtn = document.getElementById('btn-carousel-left');
  const carouselNextBtn = document.getElementById('btn-carousel-right');

  // --- 1. UPDATE HERO SECTION DISPLAY ---
  function updateHero() {
    const f = data.flavors[currentFlavorIndex];
    if (!f) return;

    const nextIdx = (currentFlavorIndex + 1) % data.flavors.length;
    const thirdIdx = (currentFlavorIndex + 2) % data.flavors.length;
    const nextFlavor = data.flavors[nextIdx];
    const thirdFlavor = data.flavors[thirdIdx];

    // Background transition
    if (heroSection) heroSection.style.backgroundColor = f.bgHex;
    if (heroWrapper) heroWrapper.style.backgroundColor = f.bgHex;

    // Description & Calorie
    if (heroDesc) heroDesc.innerHTML = f.description.replace(/\n/g, '<br />');
    if (heroCalorie) heroCalorie.textContent = f.calories;
    if (heroCounter) heroCounter.textContent = `0${currentFlavorIndex + 1} / 0${data.flavors.length}`;

    // Images
    if (heroPintMain) {
      heroPintMain.src = f.image;
      heroPintMain.alt = f.name;
    }
    if (heroPintNext) {
      heroPintNext.src = nextFlavor.image;
      heroPintNext.alt = nextFlavor.name;
    }
    if (heroPintThird) {
      heroPintThird.src = thirdFlavor.image;
      heroPintThird.alt = thirdFlavor.name;
    }
  }

  function setFlavor(index, direction = 'next') {
    if (index === currentFlavorIndex && direction !== 'force') return;
    currentFlavorIndex = index;

    // Trigger smooth move-to-center animation ("ketika dipencet langsung pindah ketengah")
    const centerPint = document.getElementById('stage-center-pint');
    if (centerPint) {
      centerPint.classList.remove('animate-move-to-center', 'animate-move-to-center-prev');
      void centerPint.offsetWidth; // Force DOM reflow
      centerPint.classList.add(direction === 'prev' ? 'animate-move-to-center-prev' : 'animate-move-to-center');
    }

    updateHero();
  }

  function nextFlavor() {
    const nextIdx = (currentFlavorIndex + 1) % data.flavors.length;
    setFlavor(nextIdx, 'next');
  }

  function prevFlavor() {
    const prevIdx = (currentFlavorIndex - 1 + data.flavors.length) % data.flavors.length;
    setFlavor(prevIdx, 'prev');
  }

  function addCurrentHeroFlavorToCart() {
    const f = data.flavors[currentFlavorIndex];
    if (!f) return;

    // Match flavor with existing products or create item
    let prod = data.products.find(p => 
      (f.id === 'coklat' && p.id === 'prod-4') ||
      (f.id === 'stroberi' && p.id === 'prod-3') ||
      (f.id === 'cookies-cream' && p.id === 'prod-1') ||
      (f.id === 'mint-chip' && p.id === 'prod-2') ||
      (f.id === 'apple-pie' && p.id === 'prod-5') ||
      p.subtitle.toLowerCase().includes(f.name.toLowerCase()) ||
      p.title.toLowerCase().includes(f.name.toLowerCase())
    );

    if (!prod) {
      prod = {
        id: `hero-${f.id}`,
        title: f.name,
        subtitle: f.name,
        numPrice: 10000,
        price: 'Rp 10.000',
        image: f.image,
      };
    }

    addToCart(prod);
  }

  // Attach Hero listeners
  if (heroPrevBtn) heroPrevBtn.addEventListener('click', prevFlavor);
  if (heroNextBtn) heroNextBtn.addEventListener('click', nextFlavor);
  if (heroOrderNowBtn) {
    heroOrderNowBtn.addEventListener('click', () => {
      const waUrl = 'https://wa.me/6285139987445';
      const waLink = document.createElement('a');
      waLink.href = waUrl;
      waLink.target = '_blank';
      waLink.rel = 'noopener noreferrer';
      document.body.appendChild(waLink);
      waLink.click();
      document.body.removeChild(waLink);
    });
  }
  
  // When next preview tub is clicked, immediately glide into center
  const nextPintContainer = document.getElementById('stage-next-pint');
  if (nextPintContainer) {
    nextPintContainer.addEventListener('click', (e) => {
      e.stopPropagation();
      nextFlavor();
    });
  }

  // When third preview tub is clicked, immediately glide into center
  const thirdPintContainer = document.getElementById('stage-third-pint');
  if (thirdPintContainer) {
    thirdPintContainer.addEventListener('click', (e) => {
      e.stopPropagation();
      setFlavor((currentFlavorIndex + 2) % data.flavors.length, 'next');
    });
  }

  // --- 3. MENU CAROUSEL SCROLLING & BUY BUTTONS ---
  if (carouselPrevBtn && menuTrack) {
    carouselPrevBtn.addEventListener('click', () => {
      menuTrack.scrollBy({ left: -300, behavior: 'smooth' });
    });
  }

  if (carouselNextBtn && menuTrack) {
    carouselNextBtn.addEventListener('click', () => {
      menuTrack.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }

  // Attach Buy Now buttons in Menu
  document.querySelectorAll('.btn-card-buy').forEach((button) => {
    button.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.pint-product-card');
      const prodId = card.getAttribute('data-id');
      const prod = data.products.find(p => p.id === prodId);
      if (prod) {
        addToCart(prod);
      }
    });
  });

  // --- 4. ACCORDION FAQ LOGIC ---
  document.querySelectorAll('.faq-item-card').forEach((item) => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close others
        document.querySelectorAll('.faq-item-card').forEach(c => c.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // --- 5. TESTIMONIALS CAROUSEL ---
  const testPrev = document.getElementById('test-prev-btn');
  const testNext = document.getElementById('test-next-btn');
  if (testPrev && testNext) {
    testPrev.addEventListener('click', () => {
      window.Toast.show('Menampilkan ulasan pelanggan sebelumnya', 'info');
    });
    testNext.addEventListener('click', () => {
      window.Toast.show('Menampilkan ulasan pelanggan berikutnya', 'info');
    });
  }

  // --- 6. SHOPPING CART LOGIC ---
  function openCart() {
    document.body.classList.add('cart-open');
  }

  function closeCart() {
    document.body.classList.remove('cart-open');
  }

  function saveCart() {
    window.Storage.set('creamy_cart', cart);
    renderCart();
  }

  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    const prodName = product.subtitle || product.title || product.name;
    const prodPrice = product.numPrice || 10000;

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: prodName,
        price: prodPrice,
        quantity: 1,
        image: product.image,
      });
    }
    saveCart();
    window.Toast.show(`${prodName} berhasil ditambahkan ke keranjang!`, 'success');
    openCart();
  }

  function updateQuantity(id, delta) {
    let removedItemName = null;
    cart = cart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        if (newQty <= 0) {
          removedItemName = item.name;
          return null;
        }
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(Boolean);

    saveCart();
    if (removedItemName) {
      window.Toast.show(`${removedItemName} dihapus dari keranjang`, 'info');
    }
  }

  function removeFromCart(id) {
    const item = cart.find(i => i.id === id);
    cart = cart.filter(i => i.id !== id);
    saveCart();
    if (item) {
      window.Toast.show(`${item.name} dihapus dari keranjang`, 'info');
    }
  }

  function renderCart() {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    if (cartBadge) {
      cartBadge.textContent = totalCount;
      cartBadge.style.display = totalCount > 0 ? 'flex' : 'none';
    }

    if (cartSubtotal) {
      cartSubtotal.textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
    }

    if (cartCheckoutBtn) {
      if (cart.length === 0) {
        cartCheckoutBtn.disabled = true;
      } else {
        cartCheckoutBtn.disabled = false;
      }
    }

    if (cartItemsList) {
      if (cart.length === 0) {
        cartItemsList.innerHTML = `
          <div style="text-align: center; padding: 3rem 1.5rem; color: #8c6d64;">
            <div style="width: 60px; height: 60px; border-radius: 9999px; background-color: #f7eee9; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: #7b4f40;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <p style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; color: #3b2723; margin-bottom: 0.5rem;">Keranjang Anda Masih Kosong</p>
            <p style="font-size: 0.85rem; line-height: 1.5; color: #6b4c43;">Pilih varian Gabin Ice Cream favorit Anda di menu untuk mulai memesan!</p>
          </div>
        `;
      } else {
        cartItemsList.innerHTML = '';
        cart.forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'cart-item-card';
          itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <div class="cart-item-info">
              <div class="cart-item-title">${item.name}</div>
              <div class="cart-item-unit-price">Rp ${item.price.toLocaleString('id-ID')} / pcs</div>
              <div class="cart-qty-row">
                <button class="btn-qty btn-minus" data-id="${item.id}" type="button" aria-label="Kurangi jumlah" title="Kurangi">-</button>
                <span style="font-family: var(--font-display); font-size: 0.88rem; font-weight: 700; padding: 0 6px; min-width: 20px; text-align: center;">${item.quantity}</span>
                <button class="btn-qty btn-plus" data-id="${item.id}" type="button" aria-label="Tambah jumlah" title="Tambah">+</button>
                <button class="btn-remove-item" data-id="${item.id}" type="button" aria-label="Hapus produk" title="Hapus dari keranjang">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                  </svg>
                </button>
              </div>
            </div>
            <div style="font-family: var(--font-display); font-weight: 700; font-size: 0.95rem; color: #2b1f1d; text-align: right;">
              Rp ${(item.price * item.quantity).toLocaleString('id-ID')}
            </div>
          `;
          cartItemsList.appendChild(itemDiv);
        });

        // Add quantity & remove listeners
        cartItemsList.querySelectorAll('.btn-minus').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            updateQuantity(id, -1);
          });
        });
        cartItemsList.querySelectorAll('.btn-plus').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            updateQuantity(id, 1);
          });
        });
        cartItemsList.querySelectorAll('.btn-remove-item').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            removeFromCart(id);
          });
        });
      }
    }
  }

  // Cart open/close triggers
  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Mobile navigation menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');
  if (mobileMenuBtn && mobileNavMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileNavMenu.classList.toggle('open');
    });

    // Close when clicking outside or clicking any nav link
    document.addEventListener('click', (e) => {
      if (!mobileNavMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileNavMenu.classList.remove('open');
      }
    });

    mobileNavMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavMenu.classList.remove('open');
      });
    });
  }

  // WhatsApp Checkout Functionality
  function proceedToWhatsAppCheckout() {
    if (!cart || cart.length === 0) {
      window.Toast.show('Keranjang belanja masih kosong! Silakan pilih varian Gabin terlebih dahulu.', 'error');
      return;
    }

    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    // Format WhatsApp Order Message
    let text = `Halo Gabin Ice Cream! \nSaya mau pesan Gabin Ice Cream \n\n`;
    text += `DETAIL PESANAN:\n`;
    cart.forEach((item, index) => {
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

    window.Toast.show('Mengarahkan ke WhatsApp pesanan Anda...', 'success', 3000);

    // Trigger opening WhatsApp
    const waLink = document.createElement('a');
    waLink.href = waUrl;
    waLink.target = '_blank';
    waLink.rel = 'noopener noreferrer';
    document.body.appendChild(waLink);
    waLink.click();
    document.body.removeChild(waLink);

    // Fallback confirmation message in cart drawer in case popup was blocked
    const existingNotice = document.getElementById('wa-redirect-notice');
    if (existingNotice) existingNotice.remove();

    if (cartItemsList) {
      const noticeDiv = document.createElement('div');
      noticeDiv.id = 'wa-redirect-notice';
      noticeDiv.style.cssText = `
        background-color: #f0fdf4;
        border: 1px solid #86efac;
        border-radius: 12px;
        padding: 12px 14px;
        margin-bottom: 12px;
        text-align: center;
      `;
      noticeDiv.innerHTML = `
        <p style="font-size: 0.8rem; color: #166534; font-weight: 700; margin-bottom: 6px;">
          Pesanan telah disiapkan untuk WhatsApp!
        </p>
        <p style="font-size: 0.72rem; color: #15803d; margin-bottom: 10px;">
          Jika WhatsApp tidak terbuka otomatis, klik tombol di bawah:
        </p>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; justify-content: center; gap: 6px; background-color: #16a34a; color: #ffffff; padding: 7px 16px; border-radius: 9999px; font-size: 0.78rem; font-weight: 700; text-decoration: none; box-shadow: 0 2px 6px rgba(22, 163, 74, 0.3);">
          Buka WhatsApp Sekarang
        </a>
      `;
      cartItemsList.prepend(noticeDiv);
    }
  }

  if (cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener('click', proceedToWhatsAppCheckout);
  }

  // --- 6. INITIALIZE ---
  updateHero();
  renderCart();

  console.log('[Creamy App] Successfully initialized standalone static landing page.');
});
