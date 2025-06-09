# Pitchside

A modern web application for browsing, booking, and managing turf arenas in your city. Built with Vite, React, TypeScript, and TailwindCSS, this project features a modular component library, role-based dashboards, and secure authentication flows.

## Features

- Login / Signup with protected routes  
- Browse list of turfs with details (address, dimensions, cost per hour)  
- Detailed turf pages for booking  
- Role-based dashboards (Player, Admin, Turf Owner)  
- Tournament listings and booking management  
- Responsive design and mobile support

## Tech Stack

- **Framework:** Vite + React + TypeScript  
- **Styling:** TailwindCSS  
- **State & Context:** React Context API (Auth, Booking, Payment)  
- **Routing:** React Router (ProtectedRoute component)  
- **Utilities:** Custom hooks (`use-mobile`, `use-toast`), utility functions  
- **UI Components:** re-usable UI primitives (buttons, modals, forms, tables, etc.)  
- **Build Tools:** ESLint, PostCSS, Vite config  

## Project Structure

```
shahriyarrodhro-turf-blitz-arena-pro/
├── components.json 
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── robots.txt
└── src/
    ├── main.tsx
    ├── index.css
    ├── App.tsx
    ├── App.css
    ├── vite-env.d.ts
    ├── components/           # UI primitives & dashboard pages
    ├── contexts/             # Auth, Booking, Payment contexts
    ├── hooks/                # Custom React hooks
    ├── lib/                  # Utility functions
    └── pages/                # Route components
```

## Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/Vishesh-Nagar/Pitchside.git
   cd Pitchside
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Configure environment  
   - Create a `.env` file in the root  
   - Add any necessary environment variables (e.g., API endpoints)

4. Run the development server  
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` — Start development server  
- `npm run build` — Build for production  
- `npm run preview` — Preview production build  
- `npm run lint` — Run ESLint  
- `npm run format` — Format code with Prettier

## Contributing

Contributions are welcome! Please open issues or pull requests for any enhancements or bug fixes.

## License

MIT License