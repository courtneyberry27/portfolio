import React, { useState } from 'react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { projects, personal } = portfolioData;

  const categories = [
    { id: 'All', label: '🍓 All Treats' },
    { id: 'Full Stack', label: '🍰 Full Stack' },
    { id: 'AI / ML', label: '🧠 AI / ML' },
    { id: 'Frontend', label: '🌸 Frontend' }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>🍰</span>
            <span>Handmade Creations</span>
          </div>
          <h2 className="section-title">Sweet Projects & Code Bakes</h2>
          <p className="section-subtitle">
            A tasty collection of full stack platforms, machine learning systems, and interactive web delights.
          </p>

          {/* Category Filter Tabs */}
          <div className="filter-tabs">
            {categories.map((cat) => {
              const count = cat.id === 'All'
                ? projects.length
                : projects.filter(p => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Callout */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '1.1rem', fontWeight: 600 }}>
            Hungry for more code samples and open-source recipes? 🍓
          </p>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <GithubIcon size={18} />
            <span>Visit My GitHub Pantry</span>
          </a>
        </div>
      </div>
    </section>
  );
}
