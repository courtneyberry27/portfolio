import React from 'react';
import { Mail, Sparkles, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow-bg"></div>

      {/* Cute Floating Strawberries & Sparkles */}
      <span className="floating-berry" style={{ top: '15%', left: '8%', animationDelay: '0s' }}>🍓</span>
      <span className="floating-berry" style={{ top: '25%', right: '10%', animationDelay: '1.5s', fontSize: '2.5rem' }}>🌸</span>
      <span className="floating-berry" style={{ bottom: '15%', left: '12%', animationDelay: '2.5s', fontSize: '1.8rem' }}>✨</span>
      <span className="floating-berry" style={{ bottom: '20%', right: '14%', animationDelay: '0.8s', fontSize: '2.2rem' }}>🍓</span>

      <div className="container hero-content">
        {/* Availability Badge */}
        <div className="status-pill">
          <span className="status-dot"></span>
          <span>{personal.status}</span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title">
          Hi, I'm <span className="text-gradient">{personal.name}</span> 🍓<br />
          Crafting Sweet Apps & Delightful Code.
        </h1>

        <p className="hero-description">
          {personal.tagline} {personal.aboutShort}
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta-group">
          <a href="#projects" className="btn btn-primary">
            <span>Explore Sweet Projects</span>
            <span>🍰</span>
          </a>
          <a href="#contact" className="btn btn-secondary">
            <span>Send a Note</span>
            <span>💌</span>
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            aria-label="GitHub profile"
          >
            <GithubIcon size={18} />
            <span>GitHub</span>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon size={18} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {personal.stats.map((stat, idx) => (
            <div key={idx} className="glass-card stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
