import React from 'react';
import { Sparkles, MapPin, Heart, Code, Layers, Wrench, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about, personal } = portfolioData;

  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>🍓</span>
            <span>About Me</span>
          </div>
          <h2 className="section-title">Sweet Ideas Turned Into Real Software</h2>
          <p className="section-subtitle">
            A peek behind the scenes: how I combine clean software design, modern web engineering, and playful creativity.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Bio & Core Pillars */}
          <div className="about-text-content">
            <div className="glass-card" style={{ padding: '2.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🍰</span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 700 }}>Story & Philosophy</h3>
              </div>

              {about.paragraphs.map((p, index) => (
                <p key={index} style={{ marginBottom: index === about.paragraphs.length - 1 ? 0 : '1.15rem' }}>
                  {p}
                </p>
              ))}

              <div style={{ marginTop: '1.75rem', paddingTop: '1.35rem', borderTop: '2px solid var(--border-color)', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 600 }}>
                  <MapPin size={17} style={{ color: 'var(--accent-primary)' }} />
                  <span>{personal.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 600 }}>
                  <Heart size={17} fill="#ff4d6d" color="#ff4d6d" />
                  <span>{personal.status}</span>
                </div>
              </div>
            </div>

            {/* Core Pillars Grid */}
            <div className="highlights-grid">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="highlight-box">
                  <h4>
                    <span>{highlight.icon}</span>
                    <span>{highlight.title}</span>
                  </h4>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills Matrix */}
          <div id="skills" className="glass-card skills-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.75rem' }}>
              <span style={{ fontSize: '1.5rem' }}>✨</span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 700 }}>Sweet Tech Stack</h3>
            </div>

            {/* Frontend Skills */}
            <div className="skill-category">
              <h4 className="skill-category-title">
                <span>🎨</span>
                <span>Frontend Frosting</span>
              </h4>
              <div className="skill-tags">
                {about.skills.frontend.map((skill) => (
                  <span key={skill} className="skill-tag">
                    <span>🍓</span>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="skill-category">
              <h4 className="skill-category-title">
                <span>🍰</span>
                <span>Layered Backends</span>
              </h4>
              <div className="skill-tags">
                {about.skills.backend.map((skill) => (
                  <span key={skill} className="skill-tag">
                    <span>🍪</span>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Database & Cloud */}
            <div className="skill-category">
              <h4 className="skill-category-title">
                <span>🌱</span>
                <span>Databases & Cloud Garden</span>
              </h4>
              <div className="skill-tags">
                {about.skills.databaseAndCloud.map((skill) => (
                  <span key={skill} className="skill-tag">
                    <span>🍃</span>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Architecture */}
            <div className="skill-category">
              <h4 className="skill-category-title">
                <span>🧁</span>
                <span>Tools & Best Practices</span>
              </h4>
              <div className="skill-tags">
                {about.skills.toolsAndMethods.map((skill) => (
                  <span key={skill} className="skill-tag">
                    <span>🌸</span>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
