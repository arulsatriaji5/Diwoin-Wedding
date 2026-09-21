const GALLERY_ITEMS = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80',
    alt: 'Dekorasi pelaminan mewah dengan bunga putih',
    label: 'Dekorasi Pelaminan',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80',
    alt: 'Momen pengantin bersama di taman',
    label: 'Sesi Foto Pre-Wedding',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    alt: 'Upacara pernikahan outdoor yang romantis',
    label: 'Upacara Outdoor',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=800&q=80',
    alt: 'Detail dekorasi meja tamu mewah',
    label: 'Dekorasi Meja Tamu',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&w=800&q=80',
    alt: 'Pengantin putri dengan gaun mewah',
    label: 'Bridal Portraiture',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=800&q=80',
    alt: 'Momen ciuman pertama sebagai pasangan',
    label: 'Momen Berharga',
  },
];

export default function Gallery() {
  return (
    <section
      className="section section-alt theme-transition"
      id="galeri"
      aria-labelledby="gallery-heading"
    >
      <div className="section-inner">
        {/* Header */}
        <div className="section-header fade-in">
          <span className="section-tag">Portofolio</span>
          <h2 className="section-title" id="gallery-heading">
            Galeri Karya Kami
          </h2>
          <p className="section-subtitle">
            Setiap foto bercerita. Lihat bagaimana kami mengabadikan momen terbaik
            pernikahan klien kami dengan penuh cinta.
          </p>
          <div className="divider" />
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid fade-in" role="list" aria-label="Galeri foto pernikahan">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              role="listitem"
              id={`gallery-item-${item.id}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="gallery-img"
                loading="lazy"
                decoding="async"
              />
              <div className="gallery-overlay" aria-hidden="true">
                <span className="gallery-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA — perfectly centered */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
          <a
            href="https://www.instagram.com/diwoin_wedding_organizer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary theme-transition"
            style={{ padding: '0.875rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}
            id="gallery-instagram-btn"
            aria-label="Lihat lebih banyak karya kami di Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Lihat Lebih Banyak di Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
