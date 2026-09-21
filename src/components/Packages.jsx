import { Check, MessageCircle, Crown, Star, Diamond } from 'lucide-react';

const WA_BASE = 'https://wa.me/6281234567890?text=';

const PACKAGES = [
  {
    id: 'silver',
    tier: 'Silver',
    icon: '🌿',
    iconBg: 'rgba(109, 143, 109, 0.15)',
    iconColor: '#6d8f6d',
    price: 'Rp 15.000.000',
    note: 'Sudah termasuk pajak & biaya admin',
    featured: false,
    features: [
      'Dekorasi Pelaminan Simpel & Elegan',
      'Make Up & Hairdo Pengantin (1 sesi)',
      'Dokumentasi Foto (4 jam)',
      'MC Profesional Bilingual',
      'Koordinator Hari-H (1 orang)',
      'Bunga Tangan & Boutonniere',
      'Pre-Wedding Shoot (2 jam)',
      'Album Foto Standar (100 halaman)',
    ],
    waMsg: 'Halo%20Diwoin%20Wedding,%20saya%20tertarik%20dengan%20Paket%20Silver.%20Bisa%20bantu%20info%20lebih%20lanjut?',
  },
  {
    id: 'gold',
    tier: 'Gold',
    icon: '✦',
    iconBg: 'rgba(196, 148, 54, 0.15)',
    iconColor: '#c49436',
    price: 'Rp 28.000.000',
    note: 'Pilihan terpopuler kami',
    featured: true,
    features: [
      'Dekorasi Pelaminan Mewah (tema pilihan)',
      'Make Up & Hairdo Pengantin + Sesi Ganti',
      'Make Up Ibu & Mertua Pengantin',
      'Dokumentasi Foto + Video Highlight (8 jam)',
      'MC Profesional + Singer Akustik',
      'Koordinator + Tim Pendamping (3 orang)',
      'Pre-Wedding Shoot + Cinematic Video',
      'Bunga Dekorasi Meja Tamu Premium',
      'Album Foto Hard Cover Eksklusif',
      'Live Streaming Akad & Resepsi',
    ],
    waMsg: 'Halo%20Diwoin%20Wedding,%20saya%20tertarik%20dengan%20Paket%20Gold.%20Bisa%20bantu%20info%20lebih%20lanjut?',
  },
  {
    id: 'platinum',
    tier: 'Platinum',
    icon: '💎',
    iconBg: 'rgba(139, 92, 246, 0.12)',
    iconColor: '#8b5cf6',
    price: 'Rp 50.000.000',
    note: 'Pengalaman pernikahan paling premium',
    featured: false,
    features: [
      'Dekorasi Pelaminan & Venue Full Theme',
      'Make Up & Hairdo Seluruh Keluarga Inti',
      'Dokumentasi Foto & Video Full Day (12 jam)',
      'Drone Videography Eksklusif',
      'MC + Entertainment Full Package',
      'Tim Koordinator Lengkap (6 orang)',
      'Pre-Wedding Shoot di Luar Kota',
      'Cinematic Wedding Film (full edit)',
      'Dekorasi Akad & Resepsi Terpisah',
      'Wedding Box Premium (souvenir & gift)',
      'Konsultasi Wedding Planner (tak terbatas)',
      'Honeymoon Package (Bali, 3 malam)',
    ],
    waMsg: 'Halo%20Diwoin%20Wedding,%20saya%20tertarik%20dengan%20Paket%20Platinum.%20Bisa%20bantu%20info%20lebih%20lanjut?',
  },
];

const TIER_ICONS = {
  Silver: <Star size={18} />,
  Gold: <Crown size={18} />,
  Platinum: <Diamond size={18} />,
};

export default function Packages() {
  return (
    <section className="section theme-transition" id="paket" aria-labelledby="packages-heading">
      <div className="section-inner">
        {/* Header */}
        <div className="section-header fade-in">
          <span className="section-tag">Katalog Paket</span>
          <h2 className="section-title" id="packages-heading">
            Pilihan Paket Pernikahan
          </h2>
          <p className="section-subtitle">
            Transparan, lengkap, dan disesuaikan dengan kebutuhan Anda.
            Setiap paket dapat dikustomisasi sesuai keinginan.
          </p>
          <div className="divider" />
        </div>

        {/* Cards Grid */}
        <div className="packages-grid">
          {PACKAGES.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`package-card theme-transition fade-in fade-in-delay-${i + 1}`}
              style={{ '--delay': `${i * 0.1}s` }}
              id={`package-${pkg.id}`}
            >
              {pkg.featured && (
                <span className="featured-badge">⭐ Terpopuler</span>
              )}

              {/* Tier */}
              <div className="package-tier">
                <div
                  className="tier-icon"
                  style={{ background: pkg.iconBg, color: pkg.iconColor, fontSize: '1.25rem' }}
                  aria-hidden="true"
                >
                  {TIER_ICONS[pkg.tier]}
                </div>
                <h3 className="tier-name theme-transition">Paket {pkg.tier}</h3>
              </div>

              {/* Price */}
              <div className="package-price theme-transition">
                <span className="price-label">Mulai dari</span>
                <span className="price-amount">{pkg.price}</span>
                <span className="price-note">{pkg.note}</span>
              </div>

              {/* Features */}
              <ul className="features-list" aria-label={`Fitur Paket ${pkg.tier}`}>
                {pkg.features.map((feature, fi) => (
                  <li key={fi} className="feature-item">
                    <span className="feature-icon" aria-hidden="true">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`${WA_BASE}${pkg.waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp theme-transition"
                id={`booking-${pkg.id}-btn`}
                aria-label={`Booking Paket ${pkg.tier} via WhatsApp`}
              >
                <MessageCircle size={18} />
                Booking via WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Custom Note */}
        <div
          className="fade-in"
          style={{
            textAlign: 'center',
            marginTop: '2.5rem',
            padding: '1.25rem 2rem',
            borderRadius: '0.875rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            maxWidth: '600px',
            margin: '2.5rem auto 0',
          }}
        >
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            💡 <strong style={{ color: 'var(--text-primary)' }}>Butuh paket custom?</strong>{' '}
            Kami dengan senang hati menyesuaikan setiap detail pernikahan Anda.{' '}
            <a
              href="https://wa.me/6282260058006?text=Halo%20Diwoin,%20saya%20ingin%20konsultasi%20paket%20custom."
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}
            >
              Hubungi kami →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
