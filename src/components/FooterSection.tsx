import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer id="contact" className="relative w-full bg-[#faefe1] text-[#3b2723] pt-12 pb-14 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 overflow-hidden border-t border-[#ebd9c5]/60">
      
      {/* Top Green Organic Wave (matching video 00:13) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-20">
        <svg 
          viewBox="0 0 1440 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,20 C360,60 720,0 1080,40 L1440,20 L1440,0 L0,0 Z" 
            fill="#489e66" 
          />
        </svg>
      </div>

      <div className="w-full pt-6">
        
        {/* Brand Logo */}
        <div className="mb-10">
          <a 
            href="#hero" 
            className="font-fredoka text-4xl sm:text-5xl font-extrabold text-[#3b2723] tracking-wide hover:opacity-90 transition-opacity"
          >
            Gabin Ice Cream
          </a>
        </div>

        {/* 4 Columns (matching video 00:13) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#ebd9c5]">
          
          {/* Column 1: Address */}
          <div className="space-y-3">
            <h3 className="font-fredoka font-bold text-base text-[#241715]">
              Alamat
            </h3>
            <p className="text-xs sm:text-sm text-[#634b45] leading-relaxed font-body">
              Jl Melati Indah, Panam Pekanbaru
            </p>
          </div>

          {/* Column 2: Opening hours */}
          <div className="space-y-3">
            <h3 className="font-fredoka font-bold text-base text-[#241715]">
              Jam Operasional
            </h3>
            <p className="text-xs sm:text-sm text-[#634b45] leading-relaxed font-body">
              Senin - Minggu: 10:00 - 22:00 WIB
            </p>
          </div>

          {/* Column 3: Quick links */}
          <div className="space-y-2">
            <h3 className="font-fredoka font-bold text-base text-[#241715]">
              Tautan Cepat
            </h3>
            <ul className="space-y-1 text-xs sm:text-sm text-[#634b45] font-body">
              <li>
                <a href="#hero" className="hover:text-black transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-black transition-colors">Menu</a>
              </li>
              <li>
                <a href="#about" className="hover:text-black transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-black transition-colors">Kontak</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-2">
            <h3 className="font-fredoka font-bold text-base text-[#241715]">
              Media Sosial
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#634b45] font-body">
              <li>
                <a 
                  href="https://wa.me/6285139987445" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => {
                    e.preventDefault();
                    const waLink = document.createElement('a');
                    waLink.href = 'https://wa.me/6285139987445';
                    waLink.target = '_blank';
                    waLink.rel = 'noopener noreferrer';
                    document.body.appendChild(waLink);
                    waLink.click();
                    document.body.removeChild(waLink);
                  }}
                  className="hover:text-black transition-all flex items-center gap-2 hover:translate-x-1 cursor-pointer"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/gabinpku/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => {
                    e.preventDefault();
                    const link = document.createElement('a');
                    link.href = 'https://www.instagram.com/gabinpku/';
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="hover:text-black transition-all flex items-center gap-2 hover:translate-x-1 cursor-pointer"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com/gabinicecream" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-black transition-all flex items-center gap-2 hover:translate-x-1"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.threads.com/@gabinpku" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => {
                    e.preventDefault();
                    const link = document.createElement('a');
                    link.href = 'https://www.threads.com/@gabinpku';
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="hover:text-black transition-all flex items-center gap-2 hover:translate-x-1 cursor-pointer"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                    <path d="M12.186 24C5.464 24 0 18.675 0 12.112 0 5.485 5.402 0 12.146 0 18.667 0 24 5.23 24 12.176c0 4.606-2.457 8.093-6.57 9.324-1.282.383-2.617.48-3.956.289-.356-.051-.595-.38-.543-.733.052-.353.385-.59.738-.54 1.109.158 2.213.078 3.275-.24 3.483-1.042 5.56-3.987 5.56-7.899 0-5.834-4.52-10.27-10.358-10.27C6.442 2.106 1.895 6.592 1.895 12.112c0 5.482 4.482 9.782 10.291 9.782 2.766 0 5.26-.99 7.02-2.787.251-.256.66-.26 1.916-.008.256.251.26.66.008.916-2.036 2.078-4.92 3.224-8.125 3.224zm.012-6.526c-3.13 0-5.176-1.996-5.176-4.992 0-3.082 2.138-5.143 5.344-5.143 3.013 0 5.048 1.928 5.048 4.78 0 1.58-.62 2.87-1.745 3.633-1.026.697-2.391.868-3.743.473-.341-.1-.703.1-.803.442-.1.341.1.703.442.803 1.637.479 3.324.27 4.619-.608 1.459-.99 2.268-2.65 2.268-4.673 0-3.567-2.607-6.079-6.38-6.079-4.004 0-6.685 2.654-6.685 6.446 0 3.754 2.637 6.29 6.471 6.29 1.173 0 2.262-.244 3.237-.726.319-.158.448-.548.29-.867-.158-.319-.548-.448-.867-.29-.806.398-1.708.599-2.68.599z"/>
                  </svg>
                  <span>Threads</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Subfooter */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8c6d64] gap-4">
          <p>© 2026 Gabin Ice Cream. Hak Cipta Dilindungi. Menggunakan 100% Ice Cream.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:underline">Kebijakan Privasi</a>
            <a href="#terms" className="hover:underline">Syarat & Ketentuan</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
