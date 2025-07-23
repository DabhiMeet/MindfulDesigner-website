# Digital Agency Website

A professional agency website built with Next.js, featuring a modern dark mode design and responsive layout.

## Features

- **Modern Design**: Full dark mode styling with professional aesthetics
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Floating Navbar**: Sticky navigation with smooth transitions
- **Multiple Pages**: Home, About Us, Services, and Contact Us
- **Contact Form**: Interactive form with validation
- **Google Maps Integration**: Embedded map showing agency location
- **Professional Footer**: Complete with links and social media

## Pages

### Home Page (`/`)
- Hero section with call-to-action
- Statistics showcase
- Services overview
- Final call-to-action section

### About Us (`/about`)
- Company story and mission
- Team member profiles
- Company values
- Statistics and achievements

### Services (`/services`)
- Detailed service offerings
- Pricing information
- Service features
- Project process workflow

### Contact Us (`/contact`)
- Contact form with validation
- Contact information
- Social media links
- Embedded Google Maps

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: State management
- **Google Maps API**: Location display

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd agency-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
agency-website/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Layout.tsx
│       ├── Navbar.tsx
│       └── Footer.tsx
├── public/
├── tailwind.config.ts
└── package.json
```

## Customization

### Colors
The website uses a dark theme with blue accents. You can customize colors in:
- `src/app/globals.css` - CSS custom properties
- `tailwind.config.ts` - Tailwind theme configuration

### Content
Update content by editing the respective page files:
- `src/app/page.tsx` - Home page content
- `src/app/about/page.tsx` - About page content
- `src/app/services/page.tsx` - Services page content
- `src/app/contact/page.tsx` - Contact page content

### Google Maps
To update the map location, modify the iframe src in `src/app/contact/page.tsx`:
```tsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  // ... other props
/>
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project for production:
```bash
npm run build
npm start
```

## Features to Add

- Blog section
- Portfolio showcase
- Client testimonials
- Newsletter subscription
- Multi-language support
- CMS integration
- Analytics tracking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please contact the development team.
