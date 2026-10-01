export const portfolioData = {
  personal: {
    name: "Courtney Berry",
    role: "Full Stack Developer & Creative Crafter 🍓",
    tagline: "Brewing sweet web applications, delightful user experiences, and intelligent code.",
    aboutShort: "I create charming, high-performance web apps and resilient backends with love, precision, and a generous sprinkle of strawberry sweetness!",
    location: "Nashville, TN or Remote 🍓",
    status: "🍓 Freshly picked & open for sweet projects!",
    email: "courtneyberry327@gmail.com",
    github: "https://github.com/courtneyberry27",
    linkedin: "https://www.linkedin.com/in/courtney-berry-675b49196/",
    stats: [
      { label: "Years Coding Sweets", value: "4+" },
      { label: "Delightful Projects", value: "25+" },
      { label: "Sweet Git Commits", value: "1.8k+" },
      { label: "Client Smiles", value: "100%" },
    ],
  },

  about: {
    paragraphs: [
      "Hi there! Welcome to my sweet corner of the internet! 🍓 I'm a full stack developer dedicated to crafting fluid, responsive interfaces, sturdy backend architectures, and intelligent machine learning features.",
      "I believe coding is like baking: you need the freshest ingredients (clean modern architecture), great timing (optimized algorithms), and a delightful presentation (cute, intuitive UI/UX) to make something people love using every day.",
      "When I'm taking a break from the terminal, you'll probably find me sipping iced strawberry matcha lattes 🍵🍓, collecting stationery, or experimenting with creative design."
    ],
    highlights: [
      {
        icon: "🍓",
        title: "Frontend Frosting",
        description: "Designing joyful, accessible, and ultra-responsive user interfaces with React, modern CSS, and playful micro-interactions."
      },
      {
        icon: "🍰",
        title: "Layered Backends",
        description: "Architecting clean, scalable RESTful APIs with Node.js, Python, Flask, and secure databases."
      },
      {
        icon: "🧠",
        title: "Smart AI Recipes",
        description: "Training and integrating NLP sentiment analysis, computer vision, and machine learning models into real-world applications."
      },
      {
        icon: "🌱",
        title: "Fresh DevOps Garden",
        description: "Cultivating automated CI/CD pipelines, Docker containerization, and test-driven development for berry-smooth deployments."
      }
    ],
    skills: {
      frontend: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5 & Semantic CSS", "Tailwind CSS", "Vite", "Next.js", "Responsive Design"],
      backend: ["Node.js", "Express", "Python", "Flask / FastAPI", "RESTful APIs", "GraphQL"],
      databaseAndCloud: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS & GCP", "Git & GitHub"],
      toolsAndMethods: ["Jest & Testing", "UI/UX Prototyping", "Agile & Scrum", "Clean Code Architecture", "Web Performance"]
    }
  },

  projects: [
    {
      id: "emotion-detection-ai",
      title: "Emotion Detection AI System 🍓",
      category: "AI / ML",
      description: "An intelligent sentiment and emotion analysis web application powered by NLP models that detects joy, sadness, anger, fear, and disgust in natural language with confidence rankings.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Flask", "React", "NLP", "REST API"],
      demoUrl: "https://example.com/demo/emotion-ai",
      githubUrl: "https://github.com/courtneyberry27/oaqjp-final-project-emb-ai",
      featured: true
    },
    {
      id: "cloudflow-monitor",
      title: "CloudFlow DevOps Metrics Suite 🍰",
      category: "Full Stack",
      description: "A real-time observability platform offering live streaming telemetry, interactive latency charts, and instant alert threshold notifications for cloud microservices.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "WebSockets", "Docker", "Tailwind"],
      demoUrl: "https://example.com/demo/cloudflow",
      githubUrl: "https://github.com/courtneyberry27/cloudflow-monitor",
      featured: true
    },
    {
      id: "omnicart-ecommerce",
      title: "Strawberry Shortcake Storefront 🌸",
      category: "Frontend",
      description: "An ultra-cute headless e-commerce store with smooth animated transitions, optimistic cart management, product filter tabs, and Stripe checkout integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "CSS Grid", "Stripe API", "State Management", "Animations"],
      demoUrl: "https://example.com/demo/omnicart",
      githubUrl: "https://github.com/courtneyberry27/strawberry-shortcake-store",
      featured: true
    },
    {
      id: "taskmatrix-collab",
      title: "TaskMatrix Team Kitchen 🧁",
      category: "Full Stack",
      description: "A sweet collaborative project management board featuring interactive drag-and-drop task pipelines, rich markdown notes, activity audit logs, and member roles.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Express", "PostgreSQL", "DnD Toolkit", "JWT Auth"],
      demoUrl: "https://example.com/demo/taskmatrix",
      githubUrl: "https://github.com/courtneyberry27/taskmatrix-collab",
      featured: false
    },
    {
      id: "berrypulse-wellness",
      title: "BerryPulse Wellness Tracker 🥤",
      category: "Frontend",
      description: "A pastel wellness dashboard that tracks daily habits, physical activity, water intake, and mindfulness goals with cute interactive charts and local storage saving.",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "SVG Charts", "LocalStorage", "Accessibility", "CSS3"],
      demoUrl: "https://example.com/demo/pulse",
      githubUrl: "https://github.com/courtneyberry27/berrypulse-wellness",
      featured: false
    },
    {
      id: "devsnippet-hub",
      title: "DevSnippet Sweet Code Hub 🍬",
      category: "Full Stack",
      description: "Developer utility to quickly store, tag, search, and run syntax-highlighted code snippets with instant copy-to-clipboard and markdown export.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "PrismJS", "MongoDB", "REST API"],
      demoUrl: "https://example.com/demo/devsnippet",
      githubUrl: "https://github.com/courtneyberry27/devsnippet-hub",
      featured: false
    }
  ]
};
