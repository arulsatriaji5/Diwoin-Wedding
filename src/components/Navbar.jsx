import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#paket', label: 'Paket' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#kontak', label: 'Kontak' },
];

export default function Navbar({ isDark, onToggle }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="navbar theme-transition"
        style={{
          boxShadow: isScrolled ? '0 4px 32px rgba(0,0,0,0.10)' : 'none',
        }}
        id="navbar"
      >
        {/* Logo */}
        <a
          href="#beranda"
          className="nav-logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('#beranda'); }}
          aria-label="Diwoin Wedding - Beranda"
        >
          <img src="/logo.png" alt="Diwoin Logo" style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover' }} />
          <span>
            Diwoin<span className="accent"> Wedding</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links" role="navigation" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          {/* Dark Mode Toggle */}
          <button
            onClick={onToggle}
            className="toggle-btn theme-transition"
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={isDark ? 'Mode Terang' : 'Mode Gelap'}
            id="theme-toggle-btn"
          >
            {isDark
              ? <Sun size={18} strokeWidth={2} />
              : <Moon size={18} strokeWidth={2} />
            }
          </button>

          {/* CTA Button (Desktop) */}
          <a
            href="https://wa.me/6282260058006?text=Halo%20Diwoin%20Wedding,%20saya%20ingin%20konsultasi%20pernikahan."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ display: 'none' }}
            id="nav-cta-desktop"
          >
            Hubungi Kami
          </a>
          <style>{`
            @media (min-width: 768px) {
              #nav-cta-desktop { display: inline-flex !important; }
            }
          `}</style>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="mobile-menu-btn theme-transition"
            aria-label={isMobileOpen ? 'Tutup menu' : 'Buka menu'}
            id="mobile-menu-toggle"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`mobile-nav theme-transition ${isMobileOpen ? 'open' : ''}`} aria-hidden={!isMobileOpen}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/6282260058006?text=Halo%20Diwoin%20Wedding,%20saya%20ingin%20konsultasi%20pernikahan."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ marginTop: '0.5rem', justifyContent: 'center' }}
          onClick={() => setIsMobileOpen(false)}
        >
          Hubungi Kami
        </a>
      </div>
    </>
  );
}
