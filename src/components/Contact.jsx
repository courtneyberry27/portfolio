import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Clock, Copy, Check, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ submitting: false, submitted: false, error: 'Please fill in all required sweet fields! 🍓' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>💌</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Let's Create Something Sweet</h2>
          <p className="section-subtitle">
            Have a project idea, team opening, or just want to chat about code and strawberries? Drop a note below!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="glass-card contact-info-card">
            <div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🍓</span>
                <span>Contact Parlor</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
                Always excited to collaborate on creative products, intelligent apps, and delightful user experiences!
              </p>
            </div>

            {/* Email Item */}
            <div className="contact-item">
              <div className="contact-icon-box">
                <span style={{ fontSize: '1.3rem' }}>✉️</span>
              </div>
              <div>
                <div className="contact-item-title">Sweet Mailbox</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a href={`mailto:${personal.email}`} className="contact-item-value">
                    {personal.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="btn btn-outline"
                    style={{ padding: '0.3rem 0.75rem', fontSize: '0.8rem', borderRadius: '9999px' }}
                    title="Copy email to clipboard"
                    type="button"
                  >
                    {copied ? <Check size={13} style={{ color: 'var(--success)' }} /> : <Copy size={13} />}
                    <span>{copied ? 'Copied 🍓' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Location Item */}
            <div className="contact-item">
              <div className="contact-icon-box">
                <span style={{ fontSize: '1.3rem' }}>🏡</span>
              </div>
              <div>
                <div className="contact-item-title">Location</div>
                <div className="contact-item-value">{personal.location}</div>
              </div>
            </div>

            {/* Availability Item */}
            <div className="contact-item">
              <div className="contact-icon-box">
                <span style={{ fontSize: '1.3rem' }}>⏰</span>
              </div>
              <div>
                <div className="contact-item-title">Reply Time</div>
                <div className="contact-item-value">Usually within 24 hours 🍓</div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="contact-item-title" style={{ marginBottom: '0.85rem' }}>Find Me on Socials</div>
              <div className="contact-social-links">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="glass-card contact-form-card">
            <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span>💌</span>
              <span>Send a Sweet Note</span>
            </h3>

            {status.submitted && (
              <div className="form-feedback" role="alert">
                <span style={{ fontSize: '1.4rem' }}>🍓</span>
                <span>Yay! Your message has been sent successfully. I will reply with sweet vibes soon!</span>
              </div>
            )}

            {status.error && (
              <div
                style={{
                  padding: '1.1rem',
                  borderRadius: '1.1rem',
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '2px solid #ef4444',
                  color: '#ef4444',
                  fontFamily: 'Fredoka, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  marginBottom: '1.35rem'
                }}
                role="alert"
              >
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name 🍓 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Daisy Berry"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address ✉️ *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. daisy@example.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject 🌸
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Let's build a sweet project together!"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message 🍰 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your sweet note or project details here..."
                  required
                  className="form-textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.95rem', fontSize: '1.05rem' }}
              >
                {status.submitting ? (
                  <span>Baking & sending... 🍓</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Sweet Note 🍓</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
