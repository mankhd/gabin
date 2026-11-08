/**
 * GabinPKU – Gabin Ice Cream Panam Pekanbaru
 * 17 Varian Menu (Tanpa Nomor 15) • Semua Rp 10.000
 * Buka Setiap Hari: 08.00 – 21.00 WIB
 */

// 1. Data 17 Varian Gabin Ice Cream
const PRODUCTS = [
  {
    id: 'gabin-01',
    no: 'No. 01',
    name: 'Gabin Coklat',
    cat: 'best-seller',
    catLabel: 'Best Seller',
    desc: 'Gabin renyah dengan isian es krim cokelat yang lembut dan creamy, menghadirkan rasa cokelat yang manis dan nikmat di setiap gigitan.',
    price: 10000,
    tag: 'Best Seller',
    img: 'assets/images/regenerated_image_1793785732715.png'
  },
  {
    id: 'gabin-02',
    no: 'No. 02',
    name: 'Gabin Stroberi',
    cat: '',
    catLabel: '',
    desc: 'Gabin renyah dengan isian es krim stroberi yang lembut dan creamy.',
    price: 10000,
    img: 'assets/images/regenerated_image_1793785736938.png'
  },
  {
    id: 'gabin-03',
    no: 'No. 03',
    name: 'Gabin Oreo',
    cat: 'best-seller',
    catLabel: 'Best Seller',
    desc: 'Gabin renyah dengan isian es krim Oreo dan potongan biskuit Oreo.',
    price: 10000,
    tag: 'Best Seller',
    img: 'assets/images/regenerated_image_1793785740651.png'
  },
  {
    id: 'gabin-04',
    no: 'No. 04',
    name: 'Gabin Matcha',
    cat: '',
    catLabel: '',
    desc: 'Gabin renyah dengan isian es krim matcha yang lembut dan khas.',
    price: 10000,
    img: 'assets/images/regenerated_image_1793785744357.png'
  },
  {
    id: 'gabin-05',
    no: 'No. 05',
    name: 'Gabin Vanilla',
    cat: 'best-seller',
    catLabel: 'Best Seller',
    desc: 'Gabin renyah dengan isian es krim vanilla yang lembut dan creamy.',
    price: 10000,
    tag: 'Best Seller',
    img: 'assets/images/regenerated_image_1793785749034.png'
  },
  {
    id: 'gabin-06',
    no: 'No. 06',
    name: 'Gabin Durian',
    cat: 'best-seller',
    catLabel: 'Best Seller',
    desc: 'Gabin renyah dengan isian es krim durian dan remahan regal yang lembut dan khas.',
    price: 13000,
    tag: 'Best Seller',
    img: 'assets/images/regenerated_image_1793786509641.png'
  },
  {
    id: 'gabin-07',
    no: 'No. 07',
    name: 'Gabin Blueberry',
    cat: 'best-seller',
    catLabel: 'Best Seller',
    desc: 'Gabin renyah dengan isian es krim blueberry yang lembut dan creamy.',
    price: 13000,
    tag: 'Best Seller',
    img: 'assets/images/regenerated_image_1793802374301.png'
  },
  {
    id: 'gabin-08',
    no: 'No. 08',
    name: 'Gabin Vanilla Gojiberry',
    cat: '',
    catLabel: '',
    desc: 'Gabin renyah dengan isian es krim vanilla dan gojiberry.',
    price: 13000,
    img: 'assets/images/regenerated_image_1793802380779.png'
  },
  {
    id: 'gabin-09',
    no: 'No. 09',
    name: 'Gabin Stroberi Matcha',
    cat: '',
    catLabel: '',
    desc: 'Gabin renyah dengan perpaduan es krim stroberi dan matcha.',
    price: 14000,
    img: 'assets/images/regenerated_image_1793802385036.png'
  },
  {
    id: 'gabin-10',
    no: 'No. 10',
    name: 'Gabin Lotus Biscoff',
    cat: 'best-seller',
    catLabel: 'Best Seller',
    desc: 'Gabin renyah dengan isian es krim lembut dan Lotus Biscoff.',
    price: 15000,
    tag: 'Best Seller',
    img: 'assets/images/regenerated_image_1793802389811.png'
  },
  {
    id: 'gabin-11',
    no: 'No. 11',
    name: 'Gabin Vanilla Keju',
    cat: '',
    catLabel: '',
    desc: 'Gabin renyah dengan isian es krim vanilla dan taburan keju.',
    price: 13000,
    img: 'assets/images/regenerated_image_1793786530142.png'
  },
  {
    id: 'gabin-12',
    no: 'No. 12',
    name: 'Gabin Milo',
    cat: '',
    catLabel: '',
    desc: 'Gabin renyah dengan isian es krim Milo yang lembut dengan rasa cokelat malt.',
    price: 10000,
    img: 'assets/images/regenerated_image_1793786534250.png'
  },
  {
    id: 'gabin-13',
    no: 'No. 13',
    name: 'Gabin Taro Chocochips',
    cat: '',
    catLabel: '',
    desc: 'Gabin renyah dengan isian es krim taro dan tambahan chocochips.',
    price: 14000,
    img: 'assets/images/regenerated_image_1793786538178.png'
  },
  {
    id: 'gabin-14',
    no: 'No. 14',
    name: 'Gabin Mangga',
    cat: '',
    catLabel: '',
    desc: 'Gabin renyah dengan isian es krim mangga yang lembut dan segar.',
    price: 10000,
    img: 'assets/images/regenerated_image_1793786541820.png'
  },
  {
    id: 'gabin-15',
    no: 'No. 15',
    name: 'Gabin Avocado Oreo',
    cat: '',
    catLabel: '',
    desc: 'Gabin renyah dengan isian es krim avocado dan potongan Oreo.',
    price: 13000,
    img: 'assets/images/regenerated_image_1793787039307.png'
  },
  {
    id: 'gabin-16',
    no: 'No. 16',
    name: 'Gabin Vanilla Regal',
    cat: '',
    catLabel: '',
    desc: 'Gabin renyah dengan isian es krim vanilla dan remahan biskuit Regal.',
    price: 13000,
    img: 'assets/images/regenerated_image_1793888641928.png'
  },
  {
    id: 'gabin-17',
    no: 'No. 17',
    name: 'Gabin Jagung Keju',
    cat: '',
    catLabel: '',
    desc: 'Gabin renyah dengan isian es krim jagung dan keju.',
    price: 13000,
    img: 'assets/images/regenerated_image_1793888638828.png'
  },
  {
    id: 'gabin-18',
    no: 'No. 18',
    name: 'Gabin Chocomint',
    cat: '',
    catLabel: '',
    desc: 'Gabin renyah dengan isian es krim mint yang lembut dan creamy, dipadukan dengan cokelat.',
    price: 0,
    priceText: 'SOON',
    isComingSoon: true,
    tag: 'SOON',
    img: 'assets/images/regenerated_image_1794149109031.jpg'
  }
];

// 2. Info Toko Resmi (Panam Pekanbaru, 08.00 - 21.00 WIB)
const STORE_INFO = {
  name: 'GabinPKU',
  phone: '0851-3998-7445',
  waNumber: '6285139987445',
  waChannel: 'https://www.whatsapp.com/channel/0029VbE1LeZFi8xY7FVC2I1v',
  grab: 'https://r.grab.com/o/TxtkzW4Q',
  gofood: 'https://gofood.link/a/UQEW1Jm',
  shopee: 'https://spf.shopee.co.id/9pf4fgCgS2',
  instagram: 'https://www.instagram.com/gabinpku/',
  threads: 'https://www.threads.com/@gabinpku',
  tiktok: 'https://www.tiktok.com/@gabinpku',
  location: 'Panam, Pekanbaru',
  address: 'Jl. Melati Indah, Kel. Delima, Panam, Kota Pekanbaru, Riau 28292',
  landmark: 'Perumahan',
  googleMaps: 'https://maps.app.goo.gl/Uemx7xhvgdnpxJQJ8',
  hours: '08.00 – 21.00 WIB (Buka Setiap Hari)'
};

// 3. State Keranjang - Dimulai dari 0 untuk perangkat baru
let cart = [];
try {
  const saved = localStorage.getItem('gabinpku_cart_v3');
  if (saved) {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) {
      cart = parsed;
    }
  }
} catch (e) {
  cart = [];
}

let activeCategory = 'all';
let searchQuery = '';
let toastTimer = null;
let coolerBagSelected = false;

window.toggleCoolerBag = function(checked) {
  coolerBagSelected = checked;
  updateCartUI();
};

// Format Rupiah
function formatRupiah(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

// Simpan Keranjang
function persistCart() {
  try {
    localStorage.setItem('gabinpku_cart_v3', JSON.stringify(cart));
  } catch (e) {
    // storage not available
  }
}

// 4. Render Produk
function renderProductGrid() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesCat = activeCategory === 'all' || p.cat === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;
    const matchesQuery =
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.no.toLowerCase().includes(q) ||
      (p.catLabel ? p.catLabel.toLowerCase().includes(q) : false);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: #fffdfa; border-radius: 1.5rem; border: 2px dashed #d97706; color: #1c1917;">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
        <h3 style="font-size: 1.15rem; color: #78350f; font-weight: 800;">Varian Tidak Ditemukan</h3>
        <p style="font-size: 0.85rem; color: #78716c; margin-top: 0.25rem;">Tidak ada varian yang cocok dengan kata kunci "${searchQuery}".</p>
        <button type="button" class="btn-card-add" style="margin-top: 1rem;" onclick="resetFilters()">Lihat Semua 18 Varian</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const cartItem = cart.find(c => c.id === p.id);
    const qtyInCart = cartItem ? cartItem.qty : 0;
    const inCartClass = qtyInCart > 0 ? 'in-cart' : '';

    return `
      <div class="product-card ${inCartClass}" onclick="handleCardClick('${p.id}', event)">
        <div>
          <div class="card-top">
            <span class="card-no">${p.no}</span>
            ${p.tag ? `<span class="card-tag">${p.tag}</span>` : p.catLabel ? `<span class="card-cat">${p.catLabel}</span>` : ''}
          </div>

          <div class="card-thumb-wrap">
            <img src="${p.img}" alt="${p.no} ${p.name}" onerror="handleImgError(this)" loading="lazy">
            ${qtyInCart > 0 ? `<span class="card-cart-qty-badge">${qtyInCart} di keranjang</span>` : ''}
          </div>

          <div class="card-info">
            <h3 class="card-name">${p.name}</h3>
            <p class="card-desc">${p.desc}</p>
          </div>
        </div>

        <div class="card-bottom">
          <div class="card-price-block">
            <span class="card-price-label">${p.isComingSoon || p.price === 0 ? 'Status' : 'Harga'}</span>
            <span class="card-price-amount" style="${p.isComingSoon || p.price === 0 ? 'color: #d97706; font-size: 1.1rem; letter-spacing: 0.05em;' : ''}">${p.isComingSoon || p.price === 0 ? 'SOON' : formatRupiah(p.price)}</span>
          </div>

          ${p.isComingSoon || p.price === 0 ? `
            <button type="button" class="btn-card-add" disabled style="background: #fef3c7; color: #92400e; cursor: not-allowed; border: 1px solid #fde68a; font-weight: 800; opacity: 0.95;" onclick="event.stopPropagation();">
              SOON
            </button>
          ` : qtyInCart === 0 ? `
            <button type="button" class="btn-card-add" onclick="event.stopPropagation(); addToCart('${p.id}')">
              + Tambah
            </button>
          ` : `
            <div class="card-qty-stepper" onclick="event.stopPropagation();">
              <button type="button" class="btn-step" onclick="updateQty('${p.id}', -1)" title="Kurangi 1">-</button>
              <span class="card-step-val">${qtyInCart}</span>
              <button type="button" class="btn-step add" onclick="updateQty('${p.id}', 1)" title="Tambah 1">+</button>
            </div>
          `}
        </div>
      </div>
    `;
  }).join('');
}

// Fallback Gambar cerdas jika gagal muat (mendukung offline, file://, dan static server)
function handleImgError(img) {
  img.onerror = null;
  const currentSrc = img.getAttribute('src') || img.src || '';
  const filename = currentSrc.split('/').pop().split('?')[0];

  if (filename && !img.dataset.triedRelative) {
    img.dataset.triedRelative = 'true';
    img.src = 'assets/images/' + filename;
    img.onerror = function() {
      img.onerror = function() {
        img.onerror = null;
        img.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='260' viewBox='0 0 400 260'%3E%3Crect width='400' height='260' fill='%2348271a'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='46'%3E🍦%3C/text%3E%3Ctext x='50%25' y='68%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%23fbbf24'%3EGabin Ice Cream Panam%3C/text%3E%3C/svg%3E";
      };
      img.src = './assets/images/' + filename;
    };
    return;
  }

  img.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='260' viewBox='0 0 400 260'%3E%3Crect width='400' height='260' fill='%2348271a'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='46'%3E🍦%3C/text%3E%3Ctext x='50%25' y='68%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%23fbbf24'%3EGabin Ice Cream Panam%3C/text%3E%3C/svg%3E";
}

// 5. Tambah ke Keranjang
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  if (product.isComingSoon || product.price === 0) {
    showToast(`⏳ ${product.name} segera hadir (Coming Soon)!`);
    return;
  }

  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  persistCart();
  updateCartUI();
  renderProductGrid();
  showToast(`🍦 ${product.no} ${product.name} dimasukkan ke keranjang!`);
  animateBadge();
}

function handleCardClick(productId, event) {
  if (event.target.closest('.card-qty-stepper')) return;
  const product = PRODUCTS.find(p => p.id === productId);
  if (product && (product.isComingSoon || product.price === 0)) {
    showToast(`⏳ ${product.name} segera hadir (Coming Soon)!`);
    return;
  }
  addToCart(productId);
}

// 6. Update Quantity & Hapus
function updateQty(productId, delta) {
  const item = cart.find(c => c.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== productId);
    showToast(`🗑️ ${item.name} dihapus dari keranjang`);
  }

  persistCart();
  updateCartUI();
  renderProductGrid();
}

function removeFromCart(productId) {
  const item = cart.find(c => c.id === productId);
  cart = cart.filter(c => c.id !== productId);
  persistCart();
  updateCartUI();
  renderProductGrid();
  if (item) {
    showToast(`🗑️ ${item.name} dihapus dari keranjang`);
  }
}

function clearCart() {
  cart = [];
  persistCart();
  updateCartUI();
  renderProductGrid();
  showToast('Keranjang telah dikosongkan (0 item)');
}

// 7. Update UI Keranjang
function updateCartUI() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const isFreePackaging = totalQty >= 5;
  const packagingCost = isFreePackaging ? 0 : (coolerBagSelected ? 3000 : 0);
  const totalPrice = subtotal + packagingCost;

  // Badge navbar
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.innerText = totalQty;
    badge.style.display = totalQty > 0 ? 'flex' : 'none';
  }

  // Summary navbar
  const summary = document.getElementById('cart-summary');
  if (summary) {
    summary.innerText = totalQty > 0 ? formatRupiah(totalPrice) : 'Kosong';
  }

  // Sticky bottom bar mobile
  const stickyBar = document.getElementById('mobile-sticky-bar');
  const stickyQty = document.getElementById('sticky-qty');
  const stickyTotal = document.getElementById('sticky-total');
  if (stickyBar) {
    if (totalQty > 0) {
      stickyBar.classList.remove('hide');
      if (stickyQty) stickyQty.innerText = totalQty + ' pcs';
      if (stickyTotal) stickyTotal.innerText = formatRupiah(totalPrice);
    } else {
      stickyBar.classList.add('hide');
    }
  }

  // Add-Ons UI update
  const addonCheckbox = document.getElementById('addon-cooler-bag');
  const addonPriceLabel = document.getElementById('addon-price-label');
  const addonBadge = document.getElementById('addon-badge-status');
  const addonCardLabel = document.getElementById('addon-card-label');
  const subtotalQtyDisplay = document.getElementById('cart-subtotal-qty');
  const subtotalPriceDisplay = document.getElementById('cart-subtotal-price');
  const addonPriceSummary = document.getElementById('cart-addon-price-summary');

  if (subtotalQtyDisplay) subtotalQtyDisplay.innerText = totalQty + ' pcs';
  if (subtotalPriceDisplay) subtotalPriceDisplay.innerText = formatRupiah(subtotal);

  if (addonCheckbox) {
    if (isFreePackaging) {
      addonCheckbox.checked = true;
      addonCheckbox.disabled = true;
      if (addonPriceLabel) addonPriceLabel.innerText = 'GRATIS (Rp 0)';
      if (addonBadge) {
        addonBadge.style.display = 'inline-block';
        addonBadge.innerText = 'GRATIS (5+ pcs)';
      }
      if (addonPriceSummary) addonPriceSummary.innerText = 'GRATIS (5+ pcs)';
      if (addonCardLabel) addonCardLabel.classList.add('selected');
    } else {
      addonCheckbox.disabled = false;
      addonCheckbox.checked = coolerBagSelected;
      if (addonPriceLabel) addonPriceLabel.innerText = 'Rp 3.000';
      if (addonBadge) addonBadge.style.display = 'none';
      if (addonPriceSummary) {
        addonPriceSummary.innerText = coolerBagSelected ? '+ Rp 3.000 (Cooler Bag)' : 'Rp 0 (Plastik)';
      }
      if (addonCardLabel) {
        if (coolerBagSelected) {
          addonCardLabel.classList.add('selected');
        } else {
          addonCardLabel.classList.remove('selected');
        }
      }
    }
  }

  // Drawer items
  const drawerBody = document.getElementById('cart-drawer-items');
  const drawerFooter = document.getElementById('cart-drawer-footer');
  const totalDisplay = document.getElementById('cart-total-price');

  if (totalDisplay) {
    totalDisplay.innerText = formatRupiah(totalPrice);
  }

  if (drawerBody) {
    if (cart.length === 0) {
      drawerBody.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon">🛒</div>
          <h4>Keranjang Masih Kosong</h4>
          <p>Mulai belanja dengan memilih dari 18 varian Gabin Ice Cream lezat seharga Rp 10.000!</p>
          <button type="button" class="btn-card-add" onclick="toggleCart(false)">
            Lihat 18 Varian Menu
          </button>
        </div>
      `;
      if (drawerFooter) drawerFooter.style.display = 'none';
    } else {
      drawerBody.innerHTML = cart.map(item => `
        <div class="cart-item-row">
          <div class="cart-item-thumb">
            <img src="${item.img}" alt="${item.name}" onerror="handleImgError(this)">
          </div>
          <div class="cart-item-info">
            <div class="cart-item-name">${item.no} ${item.name}</div>
            <div class="cart-item-price">${formatRupiah(item.price)} × ${item.qty} = ${formatRupiah(item.price * item.qty)}</div>
          </div>
          <div class="cart-item-controls">
            <button type="button" class="btn-step" onclick="updateQty('${item.id}', -1)">-</button>
            <span class="card-step-val">${item.qty}</span>
            <button type="button" class="btn-step add" onclick="updateQty('${item.id}', 1)">+</button>
            <button type="button" class="btn-trash" onclick="removeFromCart('${item.id}')" title="Hapus">✕</button>
          </div>
        </div>
      `).join('');
      if (drawerFooter) drawerFooter.style.display = 'block';
    }
  }
}

// 8. Animasi & Feedback Toast
function animateBadge() {
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.classList.remove('bump');
    void badge.offsetWidth;
    badge.classList.add('bump');
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.innerText = msg;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// 9. Modal & Drawer Toggles
function toggleCart(show) {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('main-overlay');
  if (!drawer || !overlay) return;

  if (show) {
    overlay.classList.add('show');
    drawer.classList.add('open');
    updateCartUI();
  } else {
    drawer.classList.remove('open');
    overlay.classList.remove('show');
  }
}

function toggleStoreInfo(show) {
  const modal = document.getElementById('store-modal');
  const overlay = document.getElementById('main-overlay');
  if (!modal || !overlay) return;

  if (show) {
    overlay.classList.add('show');
    modal.classList.add('show');
  } else {
    modal.classList.remove('show');
    overlay.classList.remove('show');
  }
}

function toggleMobileNav(force) {
  const drawer = document.getElementById('mobile-nav-drawer');
  const btn = document.getElementById('btn-mobile-menu');
  if (!drawer || !btn) return;

  const shouldOpen = force !== undefined ? force : !drawer.classList.contains('open');
  if (shouldOpen) {
    drawer.classList.add('open');
    btn.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    drawer.classList.remove('open');
    btn.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
  }
}

function closeAllModals() {
  toggleCart(false);
  toggleStoreInfo(false);
  toggleMobileNav(false);
}

// Close on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAllModals();
});

// 10. Catatan Cepat & Checkout WhatsApp
function addQuickNote(text) {
  const noteInput = document.getElementById('cust-notes');
  if (!noteInput) return;
  if (!noteInput.value.trim()) {
    noteInput.value = text;
  } else if (!noteInput.value.includes(text)) {
    noteInput.value += ', ' + text;
  }
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    showToast('Keranjang belanja Anda masih kosong. Silakan pilih varian es krim terlebih dahulu!');
    return;
  }

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const isFreePackaging = totalQty >= 5;
  const packagingCost = isFreePackaging ? 0 : (coolerBagSelected ? 3000 : 0);
  const totalPrice = subtotal + packagingCost;

  let packagingDetail = '';
  if (isFreePackaging) {
    packagingDetail = '• Cooler Bag & Ice Gel: GRATIS (5+ pcs)\n';
  } else if (coolerBagSelected) {
    packagingDetail = '• Cooler Bag & Ice Gel: Rp 3.000\n';
  } else {
    packagingDetail = '• Kemasan: Plastik (Gratis)\n';
  }

  let text = 'Halo Gabin Ice Cream! \n';
  text += 'Saya mau pesan Gabin Ice Cream \n\n';
  text += 'DETAIL PESANAN:\n';

  cart.forEach((item) => {
    const itemSubtotal = item.qty * item.price;
    text += '• ' + item.no + ' ' + item.name + ' (' + item.qty + ' pcs × ' + formatRupiah(item.price) + ' = ' + formatRupiah(itemSubtotal) + ')\n';
  });
  text += packagingDetail;

  text += '\nTotal Tagihan: ' + formatRupiah(totalPrice) + '\n\n';
  text += '*Data Pengiriman:*\n';
  text += '• Nama Pemesan: \n';
  text += '• No. Telepon/WA: \n';
  text += '• Alamat Lengkap: \n';
  text += '• Catatan Pengiriman: (COD/OJOL/PICKUP)\n\n';
  text += 'Mohon info ketersediaan dan metode pembayarannya ya. Terima kasih!';

  const waUrl = 'https://wa.me/' + STORE_INFO.waNumber + '?text=' + encodeURIComponent(text);
  window.open(waUrl, '_blank', 'noopener,noreferrer');
}

// 11. Salin Alamat Toko
function copyStoreAddress() {
  const fullText = STORE_INFO.address + ' (' + STORE_INFO.landmark + ')';
  navigator.clipboard.writeText(fullText).then(() => {
    showToast('📍 Alamat gerai Panam berhasil disalin!');
  });
}

function alertPending(name) {
  showToast('Kanal ' + name + ' bertanda "Isi menyusul" dan segera aktif!');
}

// 12. Search & Category Filters
function setCategory(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProductGrid();
}

function handleSearch(val) {
  searchQuery = val;
  renderProductGrid();
}

function resetFilters() {
  activeCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.filter-btn').forEach((b, idx) => {
    if (idx === 0) b.classList.add('active');
    else b.classList.remove('active');
  });
  renderProductGrid();
}

// 13. Inisialisasi saat Halaman Dimuat
function initGabinApp() {
  renderProductGrid();
  updateCartUI(); // Dimulai dari 0 untuk perangkat baru
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGabinApp);
} else {
  // Jika DOM sudah selesai diurai sebelum script dieksekusi
  initGabinApp();
}

// 14. Daftarkan fungsi ke objek window agar aman dipanggil inline onclick di semua mode preview
window.PRODUCTS = PRODUCTS;
window.STORE_INFO = STORE_INFO;
window.formatRupiah = formatRupiah;
window.renderProductGrid = renderProductGrid;
window.addToCart = addToCart;
window.handleCardClick = handleCardClick;
window.updateQty = updateQty;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.updateCartUI = updateCartUI;
window.showToast = showToast;
window.toggleCart = toggleCart;
window.toggleStoreInfo = toggleStoreInfo;
window.closeAllModals = closeAllModals;
window.addQuickNote = addQuickNote;
window.checkoutWhatsApp = checkoutWhatsApp;
window.copyStoreAddress = copyStoreAddress;
window.alertPending = alertPending;
window.setCategory = setCategory;
window.handleSearch = handleSearch;
window.resetFilters = resetFilters;
window.handleImgError = handleImgError;

