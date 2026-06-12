# Quick Start Guide - N&C Benz Spectrum

## Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Pages Overview

### 🏠 Home (`/`)
- **Feature:** Auto-rotating hero slideshow (2-second intervals)
- **Content:** 5 vehicle hero images, featured collections grid
- **Action:** Browse vehicles, contact us buttons

### 🚗 Vehicles (`/vehicles`)
- **Feature:** Complete vehicle catalog
- **Content:** Card grid showing all 11 Mercedes-Benz models
- **Action:** Click any card to view details

### 📦 Stock (`/stock`)
- **Feature:** Inventory with functional filter
- **Filter Options:** All, New, Demo, Used
- **Status Badges:** Color-coded by vehicle type
- **Action:** Filter and view vehicles by status

### 🎯 Car Detail (`/vehicles/:carId`)
- **Feature:** Diagonal gallery layout with immediate modals
- **Content:** 70vh hero, specs, exterior/interior galleries
- **Actions:** Get Quote (modal), Book Test Drive (modal), Back to Vehicles
- **Modals:** Fixed-position overlays appearing instantly on click

### 📞 Contact (`/contact`)
- **Feature:** Full-width Google Map
- **Content:** Address, phone, email, contact form
- **Address:** 1010 Avenue of the Moon, New York, NY 10018, US
- **Phone:** +1 (878) 967-4455
- **Email:** hello@ncbenzspectrum.com

### 📋 Request (`/request`)
- **Feature:** Request form page
- **Content:** Vehicle request inquiry form

## Component Structure

```
App.jsx (Main Router)
├── Home.jsx
├── Vehicles.jsx
├── Stock.jsx
├── CarDetail.jsx
├── Contact.jsx
├── Request.jsx
└── Footer (in App.jsx)

Data:
└── cars.js (11 vehicle models with images)
```

## Design System

### Colors
- **Primary Accent:** `#ff6ec7` (Hot Pink)
- **Secondary Accent:** `#55d8ff` (Cyan)
- **Background Dark:** `#0e081b` (Deep Purple)
- **Background Secondary:** `#0f122d` (Dark Blue)
- **Text Primary:** `#f4f5ff` (Off-White)
- **Text Secondary:** `#d8d8ff` (Light Lavender)

### Styling Approach
- **CSS-in-JS:** All components use inline styles
- **No CSS Classes:** Pure JavaScript style objects
- **Responsive:** `repeat(auto-fit, minmax(...))` grids
- **Transitions:** 0.3s-0.8s smooth effects

## Vehicle Collection

| Model | Class | Price | Type |
|-------|-------|-------|------|
| Mercedes-AMG A 250 | A-Class | $45,000 | Sedan |
| Mercedes-Benz B 200 | B-Class | $42,000 | Hatchback |
| Mercedes-AMG C 300 | C-Class | $50,000 | Sedan |
| Mercedes-AMG E 450 | E-Class | $65,000 | Executive |
| Mercedes-AMG C63 S | AMG C63 | $75,000 | Performance |
| Mercedes-Maybach S | S-Class | $110,000 | Luxury |
| Mercedes-AMG GT C | AMG GT | $140,000 | Sports |
| Mercedes-Benz GLE 580 | GLE | $85,000 | Luxury SUV |
| Mercedes-Benz G 580 | G-Class | $130,000 | G-Class |
| Mercedes-Benz EQC 400 | EQC | $68,000 | Electric |
| Mercedes-Benz EQE 53 | EQE | $105,000 | Electric |

## Key Features

### Auto-Slideshow (Home)
```javascript
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  }, 2000);
  return () => clearInterval(interval);
}, [sliderImages.length]);
```

### Diagonal Gallery (CarDetail)
- First image: `gridColumn: 'span 2'`
- Other images: `gridColumn: 'span 1'`
- Creates creative staggered layout

### Immediate Modals (CarDetail)
- State-driven visibility: `{modalType && <div>...}</div>`
- Fixed positioning for overlay effect
- Success modal auto-closes after 2 seconds

### Filter Dropdown (Stock)
- Options: All, New, Demo, Used
- Status badges: Pink (New), Cyan (Demo), Green (Used)
- Responsive grid with 300px minimum

## Routing Map

```
/                    → Home (auto-slideshow)
/vehicles            → All vehicles catalog
/vehicles/:carId     → Car detail page
/stock               → Stock with filter
/contact             → Contact form + map
/request             → Request form
```

## Build Information

- **Build Tool:** Vite v5.4.21
- **Framework:** React 18+
- **Router:** React Router v6
- **Bundle Size:** ~200KB (62KB gzipped)
- **Modules:** 41 transformed
- **Build Time:** ~1.5 seconds

## Deployment

The application is production-ready:
1. All 41 modules build successfully
2. No errors or warnings
3. Optimized CSS and JS bundles
4. Responsive design
5. External image CDN ready

To deploy:
```bash
npm run build
# Upload dist/ folder to your hosting service
```

## Support

For questions or issues:
- **Email:** hello@ncbenzspectrum.com
- **Phone:** +1 (878) 967-4455
- **Address:** 1010 Avenue of the Moon, New York, NY 10018, US

---

**Last Updated:** 2024  
**Version:** 1.0 Complete Redesign  
**Status:** ✓ Production Ready
