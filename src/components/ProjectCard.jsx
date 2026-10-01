import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project }) {
  return (
    <article className="glass-card project-card">
      <div className="project-img-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-img"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80";
          }}
        />
        <span className="project-category-badge">
          🍓 {project.category}
        </span>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {/* Tech Stack Tags */}
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              🌸 {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="project-links">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn primary"
              aria-label={`View live demo for ${project.title}`}
            >
              <span>Live Preview</span>
              <ExternalLink size={15} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <GithubIcon size={15} />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
