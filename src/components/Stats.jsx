const STATS = [
  { number: '500+', label: 'Pasangan Bahagia', emoji: '💑' },
  { number: '8+', label: 'Tahun Pengalaman', emoji: '🏆' },
  { number: '4.9★', label: 'Rating Google', emoji: '⭐' },
  { number: '50+', label: 'Tim Profesional', emoji: '👥' },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rina & Adit',
    date: '3 bulan lalu',
    text: 'Sangat puas dengan pelayanan dari tim Diwoin WO. Harganya sangat terjangkau mulai 24 jutaan tapi fasilitasnya super lengkap (dekor, makeup, foto, MC semua beres). Timnya ramah, sabar, dan sangat detail mengurus hari H pernikahan kami.',
  },
  {
    id: 2,
    name: 'Siti Sarah',
    date: '5 bulan lalu',
    text: 'Rekomendasi banget buat para calon pengantin yang cari WO di Bandung. Walaupun budget kami terbatas, hasil dekorasinya tetap terlihat mewah. Koordinasi saat acara juga sangat rapi, keluarga kami tinggal duduk tenang.',
  },
  {
    id: 3,
    name: 'Faisal Akbar',
    date: '8 bulan lalu',
    text: 'Tim Diwoin sangat profesional! Dari mulai awal konsultasi sampai acara selesai, mereka selalu mendengarkan request kami dengan baik. Bener-bener membantu kami mewujudkan pernikahan impian tanpa bikin kantong jebol.',
  },
];

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: '2px', color: '#d4b882' }} aria-label="Rating 5 bintang">
      {[1,2,3,4,5].map(i => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function Stats() {
  return (
    <>
      {/* Stats Section */}
      <section
        className="section theme-transition"
        aria-labelledby="stats-heading"
        style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      >
        <div className="section-inner">
          <div className="section-header fade-in" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag">Kepercayaan Klien</span>
            <h2 className="section-title" id="stats-heading">
              Angka yang Berbicara
            </h2>
            <div className="divider" />
          </div>

          <div className="stats-grid">
            {STATS.map((stat, i) => (
              <div
                key={stat.number}
                className={`stat-card theme-transition fade-in fade-in-delay-${i + 1}`}
                id={`stat-${i + 1}`}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }} aria-hidden="true">
                  {stat.emoji}
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="section section-alt theme-transition"
        aria-labelledby="testimonials-heading"
        style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      >
        <div className="section-inner">
          <div className="section-header fade-in" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag">Testimoni</span>
            <h2 className="section-title" id="testimonials-heading">
              Kata Mereka Tentang Kami
            </h2>
            <div className="divider" />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <article
                key={t.id}
                className={`package-card theme-transition fade-in fade-in-delay-${i + 1}`}
                id={`testimonial-${t.id}`}
                style={{ gap: '1rem' }}
                aria-label={`Testimoni dari ${t.name}`}
              >
                {/* Quote mark */}
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '3rem',
                    lineHeight: 0.8,
                    color: 'var(--accent-secondary)',
                    opacity: 0.6,
                  }}
                  aria-hidden="true"
                >
                  "
                </div>

                <StarRating />

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1 }}>
                  {t.text}
                </p>

                {/* Author (No Image) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                  {/* Google G Icon placeholder */}
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea4335', fontWeight: 'bold', fontSize: '1.2rem' }} aria-hidden="true">
                    G
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.date} di Google Maps</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="fade-in" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a
              href="https://maps.app.goo.gl/7n7Lp9dpfGy7fdcU6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary theme-transition"
              style={{ padding: '0.875rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Baca Semua Ulasan di Google Maps
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
