import { useEffect, useState } from 'react';
import { navItems, profile } from '@/data/content';
import { publicUrl } from '@/publicUrl';
import './Navbar.css';

function scrollToId(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <button type="button" className="nav__logo" onClick={() => scrollToId('hero')} aria-label="Home">
          <span className="nav__logo-hex" aria-hidden>
            <span className="nav__logo-letter">S</span>
          </span>
        </button>
        <nav className="nav__links" aria-label="Primary">
          <ol className="nav__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button type="button" className="nav__link" onClick={() => scrollToId(item.id)}>
                  <span className="nav__link-num">{item.number}.</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ol>
          <a
            className="nav__resume btn-outline"
            href={publicUrl(profile.resumeUrl)}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
