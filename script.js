/**
 * ==========================================================================
 * SCRIPT.JS - Core Client Utilities & State Management
 * Works natively in standard browsers (Chrome, Edge, Firefox, Safari)
 * without requiring any Node.js or bundlers.
 * ==========================================================================
 */

// 1. Data Store for Static and Dynamic Pages
window.CREAMY_DATA = {
  flavors: [
    {
      id: 'coklat',
      name: 'Double Cokelat',
      badge: "GABIN",
      calories: 270,
      bgHex: '#7b4f40',
      accentColor: '#f7eee9',
      tagline: 'Menggunakan 100% Ice Cream',
      description: "🍫 Gabin + Ice Cream Coklat = Bikin Nagih! 🍦\nRenyah, creamy, dingin, dan manis dalam satu gigitan! 🤎",
      image: './assets/images/regenerated_image_1790069101310.png',
    },
    {
      id: 'stroberi',
      name: 'Strawbär Swirl',
      badge: "GABIN",
      calories: 220,
      bgHex: '#d86154',
      accentColor: '#fdf0f2',
      tagline: 'Menggunakan 100% Ice Cream',
      description: "Es krim stroberi lembut dengan swirl saus buah stroberi asli yang melimpah, dipadukan renyahnya biskuit keemasan di setiap gigitan.",
      image: './assets/images/regenerated_image_1790067144916.png',
    },
    {
      id: 'apple-pie',
      name: 'Swedish Apple Pie',
      badge: "GABIN",
      calories: 250,
      bgHex: '#c98555',
      accentColor: '#fcf4ec',
      tagline: 'Menggunakan 100% Ice Cream',
      description: "Perpaduan rasa pie apel klasik Swedia dengan rempah kayu manis harum dan es krim vanila creamy di antara biskuit mentega renyah.",
      image: './assets/images/regenerated_image_1790066337042.png',
    },
    {
      id: 'mint-chip',
      name: 'Mint Chokladchip',
      badge: "GABIN",
      calories: 240,
      bgHex: '#428b86',
      accentColor: '#edf7ee',
      tagline: 'Menggunakan 100% Ice Cream',
      description: "Sensasi dingin menyegarkan dari es krim daun mint murni dipadu serpihan cokelat hitam renyah dan biskuit gabin gurih.",
      image: './assets/images/mint-chokladchip.jpg',
    },
    {
      id: 'cookies-cream',
      name: 'Cookies & Kräm',
      badge: "GABIN",
      calories: 280,
      bgHex: '#3f3532',
      accentColor: '#faefe1',
      tagline: 'Menggunakan 100% Ice Cream',
      description: "Biskuit renyah keemasan dengan isian es krim cookies & cream melimpah dan taburan biskuit Oreo gurih tiada tanding.",
      image: './assets/images/cookies-and-kram.jpg',
    },
  ],

  products: [
    {
      id: 'prod-1',
      title: 'Gabin Oreo',
      subtitle: 'Gabin Oreo',
      price: 'Rp 10.000',
      numPrice: 10000,
      calories: 280,
      image: './assets/images/regenerated_image_1790068969600.png',
    },
    {
      id: 'prod-2',
      title: 'Gabin Matcha',
      subtitle: 'Gabin Matcha',
      price: 'Rp 10.000',
      numPrice: 10000,
      calories: 240,
      image: './assets/images/regenerated_image_1790068971665.png',
    },
    {
      id: 'prod-3',
      title: 'Gabin Stroberi',
      subtitle: 'Gabin Stroberi',
      price: 'Rp 10.000',
      numPrice: 10000,
      calories: 220,
      image: './assets/images/regenerated_image_1790068973671.png',
    },
    {
      id: 'prod-4',
      title: 'Gabin Cokelat',
      subtitle: 'Gabin Cokelat',
      price: 'Rp 10.000',
      numPrice: 10000,
      calories: 270,
      image: './assets/images/regenerated_image_1790068975921.png',
    },
    {
      id: 'prod-5',
      title: 'Gabin Vanila',
      subtitle: 'Gabin Vanila',
      price: 'Rp 10.000',
      numPrice: 10000,
      calories: 250,
      image: './assets/images/regenerated_image_1790068977977.png',
    },
  ],

  initialCart: [
    {
      id: 'prod-1',
      name: 'Gabin Oreo',
      price: 10000,
      quantity: 1,
      image: './assets/images/regenerated_image_1790068969600.png',
    },
    {
      id: 'prod-2',
      name: 'Gabin Matcha',
      price: 10000,
      quantity: 1,
      image: './assets/images/regenerated_image_1790068971665.png',
    },
  ],
};

// 2. Toast Notification Utility
window.Toast = {
  show(message, type = 'info', duration = 3000) {
    let container = document.getElementById('app-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'app-toast-container';
      container.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 99999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        pointer-events: none;
      `;
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `app-toast app-toast-${type}`;
    
    const colors = {
      success: '#10b981',
      info: '#201817',
      error: '#ef4444',
    };

    toast.style.cssText = `
      background-color: ${colors[type] || colors.info};
      color: #ffffff;
      padding: 12px 20px;
      border-radius: 9999px;
      font-size: 14px;
      font-weight: 600;
      font-family: 'Fredoka', cursive, sans-serif;
      box-shadow: 0 10px 25px rgba(0,0,0,0.25);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      opacity: 0;
      transform: translateY(15px);
      pointer-events: auto;
    `;
    toast.textContent = message;

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, duration);
  },
};

// 3. Local Storage Helper
window.Storage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  },
};
