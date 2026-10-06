import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, X, ExternalLink, Copy, Check } from 'lucide-react';

interface InfoModalsProps {
  isLocationOpen: boolean;
  onCloseLocation: () => void;
  isContactOpen: boolean;
  onCloseContact: () => void;
  onShowToast: (msg: string) => void;
}

export const InfoModals: React.FC<InfoModalsProps> = ({
  isLocationOpen,
  onCloseLocation,
  isContactOpen,
  onCloseContact,
  onShowToast,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyAddress = () => {
    const address = 'Jl. Melati Indah, Kel. Delima, Panam, Kota Pekanbaru, Riau 28292';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(address).then(() => {
        setCopied(true);
        onShowToast('Alamat berhasil disalin!');
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      onShowToast('Jl. Melati Indah, Panam, Pekanbaru');
    }
  };

  return (
    <>
      {/* LOKASI MODAL */}
      <AnimatePresence>
        {isLocationOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseLocation}
              className="fixed inset-0 bg-black/65 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-black/10 z-10 text-slate-800"
            >
              {/* Header */}
              <div className="px-6 py-5 bg-[#faf6f0] border-b border-[#ebd9c5] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shadow-xs">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-fredoka text-xl font-bold text-[#2b1f1d]">Lokasi Kedai Kami</h3>
                    <p className="text-xs text-[#786259]">Kunjungi kedai resmi Gabin Ice Cream</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onCloseLocation}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-[#ebd9c5] hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div className="bg-[#faf6f0] border border-[#ebd9c5] rounded-2xl p-4.5 space-y-3.5">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8c6d64]">Alamat Lengkap</div>
                      <div className="text-sm font-semibold text-slate-900 leading-snug">
                        Jl. Melati Indah, Kel. Delima, Panam, Kota Pekanbaru, Riau 28292
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Patokan: Perumahan</p>
                    </div>
                  </div>

                  <div className="h-px bg-[#ebd9c5] w-full" />

                  <div className="flex items-start gap-3">
                    <span className="text-xl">⏰</span>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8c6d64]">Jam Operasional</div>
                      <div className="text-sm font-semibold text-slate-900">Buka Setiap Hari: 08.00 – 20.00 WIB</div>
                      <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-full mt-1.5">
                        🟢 Buka Setiap Hari
                      </span>
                    </div>
                  </div>

                  <div className="h-px bg-[#ebd9c5] w-full" />

                  <div className="flex items-start gap-3">
                    <span className="text-xl">🛵</span>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8c6d64]">Pilihan Layanan</div>
                      <div className="text-xs text-slate-600">
                        Self Pick-Up, Kurir, Pesan Antar
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                  <a
                    href="https://maps.app.goo.gl/7QGAHS7xGVv1LnCx7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-full bg-[#201817] hover:bg-[#382b29] text-white font-fredoka text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Buka di Google Maps</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="py-3 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-fredoka text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-300 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Tersalin!' : 'Salin Alamat'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* KONTAK MODAL */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseContact}
              className="fixed inset-0 bg-black/65 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-black/10 z-10 text-slate-800"
            >
              {/* Header */}
              <div className="px-6 py-5 bg-[#faf6f0] border-b border-[#ebd9c5] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-xs">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-fredoka text-xl font-bold text-[#2b1f1d]">Hubungi Kontak Kami</h3>
                    <p className="text-xs text-[#786259]">Layanan Pelanggan &amp; Pemesanan Cepat</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onCloseContact}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-[#ebd9c5] hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-3 max-h-[75vh] overflow-y-auto">
                <div className="space-y-2.5">
                  {/* WhatsApp Channel */}
                  <a
                    href="https://wa.me/6285139987445?text=Halo%20Gabin%20Ice%20Cream%2C%20saya%20mau%20tanya%20informasi%20menu%20dan%20pemesanan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 bg-white border-1.5 border-[#ebd9c5] hover:border-[#201817] rounded-2xl shadow-xs hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-fredoka font-bold text-slate-900 text-sm">WhatsApp Resmi</div>
                      <div className="text-xs font-semibold text-slate-600">+62 851-3998-7445</div>
                      <div className="text-[11px] font-bold text-emerald-700">Respon Cepat (08.00 – 20.00 WIB)</div>
                    </div>
                    <span className="text-slate-400 group-hover:translate-x-1 group-hover:text-slate-900 transition-all font-bold text-lg">→</span>
                  </a>

                  {/* GrabFood Channel */}
                  <a
                    href="https://r.grab.com/g/6-20261006_233155_acf4457306b14048aae48578e17d5c0a_MEXMPS-6-C8JUCJ6KLJVXL2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 bg-white border-1.5 border-[#ebd9c5] hover:border-[#201817] rounded-2xl shadow-xs hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#00b14f] text-white flex items-center justify-center shrink-0 text-lg">
                      🛵
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-fredoka font-bold text-slate-900 text-sm">GrabFood Resmi</div>
                      <div className="text-xs font-semibold text-slate-600">Pesan Antar via GrabFood</div>
                      <div className="text-[11px] font-bold text-emerald-700">🟢 Buka di Aplikasi GrabFood</div>
                    </div>
                    <span className="text-slate-400 group-hover:translate-x-1 group-hover:text-slate-900 transition-all font-bold text-lg">→</span>
                  </a>

                  {/* Instagram Channel */}
                  <a
                    href="https://www.instagram.com/gabinpku/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 bg-white border-1.5 border-[#ebd9c5] hover:border-[#201817] rounded-2xl shadow-xs hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 font-bold text-base">
                      📸
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-fredoka font-bold text-slate-900 text-sm">Instagram</div>
                      <div className="text-xs font-semibold text-slate-600">@gabinpku</div>
                      <div className="text-[11px] font-bold text-pink-700">Katalog Foto &amp; Info Promo</div>
                    </div>
                    <span className="text-slate-400 group-hover:translate-x-1 group-hover:text-slate-900 transition-all font-bold text-lg">→</span>
                  </a>

                  {/* Threads Channel */}
                  <a
                    href="https://www.threads.com/@gabinpku"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 bg-white border-1.5 border-[#ebd9c5] hover:border-[#201817] rounded-2xl shadow-xs hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0 font-bold text-base">
                      @
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-fredoka font-bold text-slate-900 text-sm">Threads</div>
                      <div className="text-xs font-semibold text-slate-600">@gabinpku</div>
                      <div className="text-[11px] font-bold text-slate-600">Cerita &amp; Update Harian</div>
                    </div>
                    <span className="text-slate-400 group-hover:translate-x-1 group-hover:text-slate-900 transition-all font-bold text-lg">→</span>
                  </a>

                  {/* TikTok Channel */}
                  <a
                    href="https://www.tiktok.com/@gabinpku"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 bg-white border-1.5 border-[#ebd9c5] hover:border-[#201817] rounded-2xl shadow-xs hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0 font-bold text-base">
                      🎵
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-fredoka font-bold text-slate-900 text-sm">TikTok</div>
                      <div className="text-xs font-semibold text-slate-600">@gabinpku</div>
                      <div className="text-[11px] font-bold text-sky-600">Video Review &amp; Keseruan Menu</div>
                    </div>
                    <span className="text-slate-400 group-hover:translate-x-1 group-hover:text-slate-900 transition-all font-bold text-lg">→</span>
                  </a>

                  {/* Shopee & Gojek Notice */}
                  <div className="p-3 bg-slate-50 border border-dashed border-slate-300 rounded-2xl flex items-center gap-3">
                    <span className="text-xl">🛵</span>
                    <div className="text-xs text-slate-600">
                      <span className="font-bold text-slate-800 block">ShopeeFood &amp; Gojek (GoFood)</span>
                      Segera menyusul &amp; dapat dipesan dalam waktu dekat!
                    </div>
                  </div>
                </div>

                <p className="text-xs text-center text-slate-500 pt-1">
                  🤝 Melayani pesanan partai besar, ulang tahun, arisan, catering &amp; kemitraan.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
