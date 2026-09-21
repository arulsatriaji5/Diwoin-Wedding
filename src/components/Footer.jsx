import { MessageCircle, MapPin, Phone, Instagram, Heart } from 'lucide-react';

const WA_NUMBER = '6282260058006';
const WA_MSG = 'Halo%20Diwoin%20Wedding,%20saya%20ingin%20konsultasi%20untuk%20pernikahan%20saya.';

export default function Footer() {
  return (
    <footer
      className="footer theme-transition"
      id="kontak"
      aria-labelledby="footer-heading"
    >
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="Diwoin Logo" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
            <p>
              Mitra terpercaya untuk hari paling istimewa dalam hidup Anda.
              Kami menghadirkan keindahan, keeleganan, dan kenangan abadi.
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <a
                href="https://wa.me/6282260058006"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1.5px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#22c55e',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#22c55e';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#22c55e';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card)';
                  e.currentTarget.style.color = '#22c55e';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="WhatsApp Diwoin Wedding"
                id="footer-whatsapp-link"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://www.instagram.com/diwoin_wedding_organizer"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1.5px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#e1306c',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e1306c';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#e1306c';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card)';
                  e.currentTarget.style.color = '#e1306c';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Instagram Diwoin Wedding"
                id="footer-instagram-link"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-col-title" id="footer-heading">Hubungi Kami</h3>
            <ul className="footer-links" role="list">
              <li>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  id="footer-wa-contact"
                  aria-label="Hubungi via WhatsApp"
                >
                  <MessageCircle size={16} style={{ color: '#22c55e', flexShrink: 0 }} />
                  <span>+62 822-6005-8006</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/diwoin_wedding_organizer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  id="footer-ig-contact"
                  aria-label="Instagram Diwoin Wedding"
                >
                  <Instagram size={16} style={{ color: '#e1306c', flexShrink: 0 }} />
                  <span>@diwoin_wedding_organizer</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/7n7Lp9dpfGy7fdcU6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  id="footer-address"
                  aria-label="Lokasi kami di Bandung"
                >
                  <MapPin size={16} style={{ color: 'var(--accent-secondary)', flexShrink: 0 }} />
                  <span>Jl. Jamika Gg. Mama Dipa,<br />Sukahaji, Bandung 40221</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+6282260058006"
                  className="footer-link"
                  id="footer-phone"
                  aria-label="Telepon kami"
                >
                  <Phone size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                  <span>+62 822-6005-8006</span>
                </a>
              </li>
            </ul>

            {/* Small Map Box */}
            <div style={{ marginTop: '1.25rem', width: '100%', height: '140px', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)' }}>
              <iframe
                title="Lokasi Diwoin Wedding Organizer"
                src="https://maps.google.com/maps?q=Diwoin%20Wedding%20Organizer%20Bandung&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-col-title">Navigasi</h3>
            <ul className="footer-links" role="list">
              {[
                { href: '#beranda', label: 'Beranda' },
                { href: '#paket', label: 'Paket Pernikahan' },
                { href: '#galeri', label: 'Galeri Karya' },
                { href: '#kontak', label: 'Kontak' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span style={{ color: 'var(--accent-secondary)', fontSize: '0.7rem' }}>✦</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Card */}
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem 1.25rem',
                borderRadius: '0.875rem',
                background: 'linear-gradient(135deg, rgba(212,184,130,0.12), rgba(109,143,109,0.08))',
                border: '1px solid var(--border-color)',
              }}
            >
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.875rem', lineHeight: 1.6 }}>
                Siap mewujudkan pernikahan impian Anda?
              </p>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '0.65rem 1rem', fontSize: '0.8rem' }}
                id="footer-cta-btn"
                aria-label="Konsultasi gratis via WhatsApp"
              >
                <MessageCircle size={15} />
                Konsultasi Gratis Sekarang
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Diwoin Wedding Organizer. All rights reserved.
          </p>
          <p className="footer-copy" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Made with <Heart size={13} style={{ color: '#e1306c', fill: '#e1306c' }} aria-label="cinta" /> in Bandung, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
