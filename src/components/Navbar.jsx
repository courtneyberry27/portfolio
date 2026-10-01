import React, { useState } from 'react';
import { Menu, X, Sparkles, Heart, ArrowRight } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About 🍓', href: '#about' },
    { label: 'Projects 🍰', href: '#projects' },
    { label: 'Skills 🌸', href: '#skills' },
    { label: 'Contact 💌', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#hero" className="brand-logo">
          <div className="brand-icon-box">
            <span>🍓</span>
          </div>
          <span>berry<span className="text-gradient">.patch</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch theme (currently ${theme === 'light' ? 'Strawberry Milk' : 'Chocolate Berry'})`}
            title={`Switch to ${theme === 'light' ? '🍫 Chocolate Berry' : '🍓 Strawberry Milk'} mode`}
          >
            {theme === 'light' ? '🍓' : '🍫'}
          </button>

          <a href="#contact" className="btn btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.9rem', display: 'none' }} id="desktop-hire-btn">
            <span>Say Hello</span>
            <Heart size={15} fill="currentColor" />
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              onClick={handleLinkClick}
              style={{ fontSize: '1.1rem', padding: '0.5rem 0' }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={handleLinkClick}
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            Say Hello 🍓
          </a>
        </div>
      )}
    </header>
  );
}
