import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="brand-icon-box" style={{ width: '2.2rem', height: '2.2rem', fontSize: '1.2rem' }}>
            <span>🍓</span>
          </div>
          <span style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 700, fontSize: '1.2rem' }}>
            berry<span className="text-gradient">patch</span>
          </span>
        </div>

        <div className="footer-text">
          Baked with 🍓 fresh strawberries & <Heart size={14} fill="#ff4d6d" color="#ff4d6d" style={{ display: 'inline', verticalAlign: 'middle' }} /> using React & Vite. © {new Date().getFullYear()} {personal.name}. Stay sweet!
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            style={{ width: '2.2rem', height: '2.2rem' }}
            aria-label="GitHub Profile"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            style={{ width: '2.2rem', height: '2.2rem' }}
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={15} />
          </a>
          <a
            href={personal.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            style={{ width: '2.2rem', height: '2.2rem' }}
            aria-label="Twitter / X Profile"
          >
            <TwitterIcon size={15} />
          </a>
          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top of page"
            style={{ marginLeft: '0.5rem' }}
          >
            <span>Top</span>
            <span>🍓</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

