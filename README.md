# 🍓 Sweet Strawberry React Portfolio

A cute, delightful, and fast developer portfolio website themed around strawberries and sweet pastel aesthetics, built with **React** and **Vite**.

---

## 🍓 Cute Strawberry Features

- **🌸 Strawberry Aesthetics & Palette**:
  - **Strawberry Milk Pink** light theme with soft rose accents, strawberry seed textures, and marshmallow card backgrounds.
  - **Chocolate Dipped Strawberry** dark theme with rich velvety berry tones and glowing strawberry pink highlights.
  - Cute rounded fonts (**Fredoka** & **Quicksand**), sweet bouncing buttons, and floating strawberry animations.
- **⚡ Sweet Hero Section**:
  - Floating strawberry & blossom decorations.
  - "🍓 Freshly picked & open for sweet projects!" status badge.
  - Sweet career statistics and quick call-to-action buttons.
- **👤 About the Baker & Coder**:
  - Story & engineering philosophy blending clean architecture with playful creativity.
  - Core bakery-inspired competency cards (*Frontend Frosting*, *Layered Backends*, *Smart AI Recipes*, *Fresh DevOps Garden*).
  - Categorized technical skills matrix with cute strawberry, cookie, and leaf badges.
- **🍰 Handmade Creations (Projects Section)**:
  - Interactive filter tabs (**🍓 All Treats**, **🍰 Full Stack**, **🧠 AI / ML**, **🌸 Frontend**) with count badges.
  - Cute project cards with strawberry badges, candy tags, live preview links, and source code buttons.
- **💌 Sweet Mailbox (Contact Section)**:
  - Direct contact cards (Email with one-click **"Copied 🍓"** feedback, location, and response time).
  - Interactive React contact form with validation, baking/sending simulation, and success confirmation.
- **🍓 Footer**:
  - Sweet branding, social links, and smooth strawberry "Back to top" button.

---

## 📁 Project Structure

```text
portfolio/
├── index.html                  # HTML entry point with strawberry favicon & cute fonts
├── package.json                # Project dependencies and build scripts
├── vite.config.js              # Vite configuration
├── README.md                   # Project documentation
└── src/
    ├── App.jsx                 # Theme state management & page layout
    ├── main.jsx                # React DOM mount
    ├── index.css               # Strawberry Milk Pink & Chocolate Berry stylesheets
    ├── components/
    │   ├── Navbar.jsx          # Header with strawberry logo & theme toggle
    │   ├── Hero.jsx            # Hero section with floating strawberries
    │   ├── About.jsx           # About section & skills matrix
    │   ├── Projects.jsx        # Filterable projects gallery
    │   ├── ProjectCard.jsx     # Individual project card with strawberry badges
    │   ├── Contact.jsx         # Contact info & sweet message form
    │   ├── Footer.jsx          # Footer & back-to-top button
    │   └── Icons.jsx           # Clean SVG icons (GitHub, LinkedIn, Twitter)
    └── data/
        └── portfolioData.js    # Centralized data file to customize info & projects
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v16.14+ or higher).

### Installation

Navigate to the project directory:

```bash
cd "Documents/code projects/portfolio"
npm install
```

### Development Server

Start the local Vite development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

The production assets will be output to the `dist/` directory.

### Preview Production Build

To preview the built app locally:

```bash
npm run preview
```

---

## ✏️ Customization

All the portfolio content is centralized in **`src/data/portfolioData.js`**. You can easily customize:

- **Personal Information**: Name, title, tagline, location, availability, and social links.
- **About Bio & Highlights**: Your personal story, engineering pillars, and categorized skills list.
- **Projects**: Add, remove, or modify project cards (title, category, description, tags, image, live demo, and source links).
