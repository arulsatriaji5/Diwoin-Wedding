import { ChevronDown, Sparkles, Camera } from 'lucide-react';

const HERO_BG = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80';

export default function Hero() {
  const scrollToPackages = () => {
    const el = document.querySelector('#paket');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.querySelector('#kontak');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="beranda" aria-label="Hero - Diwoin Wedding">
      {/* Background */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${HERO_BG})` }}
        role="img"
        aria-label="Dekorasi pernikahan mewah"
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Decorative particles */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(212,184,130,0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(138,171,138,0.08) 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge" role="text">
          <Sparkles size={12} />
          <span>Wedding Organizer &amp; Photography</span>
          <Camera size={12} />
        </div>

        {/* Heading */}
        <h1 className="hero-title">
          Wujudkan Pernikahan<br />
          <span className="highlight">Impian Anda</span> Menjadi Nyata
        </h1>

        {/* Subheading */}
        <p className="hero-subtitle">
          Solusi lengkap Wedding Organizer dan Fotografi premium untuk momen sekali seumur hidup.
          Kami hadir untuk membuat setiap detail menjadi sempurna.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <button
            onClick={scrollToPackages}
            className="btn btn-gold"
            style={{ padding: '0.875rem 2rem', fontSize: '0.95rem' }}
            id="hero-catalog-btn"
          >
            <Sparkles size={16} />
            Lihat Katalog Paket
          </button>
          <button
            onClick={scrollToContact}
            className="btn btn-secondary"
            style={{
              padding: '0.875rem 2rem',
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.9)',
              borderColor: 'rgba(255,255,255,0.4)',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
            }}
            id="hero-consult-btn"
          >
            Konsultasi Gratis
          </button>
        </div>

        {/* Trust Indicators */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center',
            marginTop: '3rem',
          }}
        >
          {[
            { num: '500+', label: 'Pasangan Bahagia' },
            { num: '8 Tahun', label: 'Pengalaman' },
            { num: '4.9★', label: 'Rating Google' },
          ].map((stat) => (
            <div key={stat.num} style={{ textAlign: 'center' }}>
              <div style={{ color: '#e8c87a', fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 700 }}>
                {stat.num}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem', marginTop: '0.2rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em' }}>SCROLL</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
