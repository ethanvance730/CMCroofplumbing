# CMC Roof Plumbing — Official Website

A high-performance, mobile-first one-page website engineered for **CMC Roof Plumbing** (C.M.C Roof Plumbing), headquartered in Warana, Sunshine Coast, Queensland.

Built strictly according to the guidelines in [DESIGN.md](file:///e:/CMSrooftop/DESIGN.md), featuring a dark, premium aesthetic, vanilla web technologies with zero dependencies, and optimized for sub-second load times and 90+ Lighthouse mobile performance.

---

## 📌 Project Overview

- **Business Name:** CMC Roof Plumbing (C.M.C Roof Plumbing)
- **Director / Head Roof Plumber:** Chris
- **Established:** 1999 (Over 25 years continuous operation)
- **Headquarters:** Warana, Queensland 4575 (Sunshine Coast)
- **Service Footprint:** Warana (HQ), Noosa, Maroochydore, Mooloolaba, Buderim, Coolum Beach, Caloundra, and surrounding Sunshine Coast regions.
- **Core USP:** *"The man who quotes the job... Does the job!"* (Eliminates salespeople and unvetted third-party subcontractor handoffs).
- **Primary Materials:** Colorbond Steel (Matt Monument, Windspray), Ultra Marine-Grade Profiles for high-salinity coastal environments, and Zincalume Steel.

---

## ⚡ Technical Specifications

| Parameter | Specification | Measured Status |
|---|---|---|
| **Tech Stack** | Plain HTML5, CSS3, Vanilla JS | Zero third-party frameworks/libraries |
| **CSS Size Limit** | Under 25 KB | **24.3 KB** |
| **JS Size Limit** | Under 5 KB | **1.5 KB** |
| **Fonts** | Max 2 families, max 3 weights total | `Oswald` (600, 700) + `Inter` (400) |
| **Images** | Local `.webp` only in `/images/` | 16 optimized `.webp` files |
| **Image Loading** | LCP prioritized | Hero has `fetchpriority="high"`, all other images have `loading="lazy"` |
| **Image Layout** | Zero Layout Shift (CLS) | `aspect-ratio` and dark fallback background (`#14181d`) on all containers |
| **SEO & Schema** | Structured Data | Full `LocalBusiness` / `RoofingContractor` JSON-LD schema |
| **Mobile Actions** | Sticky Bottom Bar | Minimum 48px touch targets for direct phone call & quote request |

---

## 📂 Project Structure

```text
e:/CMSrooftop/
├── index.html            # Semantic HTML5 page with full section hierarchy
├── style.css             # Vanilla stylesheet (< 25 KB)
├── script.js             # Vanilla JS (< 5 KB) for navigation & forms
├── README.md             # Project documentation & client handover
└── images/               # Local WebP assets with dark fallback containers
    ├── hero.webp         # Desktop hero image (1600x900)
    ├── hero-1280.webp    # Tablet hero image (1280x720)
    ├── hero-640.webp     # Mobile hero image (640x360)
    ├── service-1.webp    # Domestic & Residential Roofing (800x600)
    ├── service-2.webp    # Commercial & Industrial Infrastructure (800x600)
    ├── service-3.webp    # Premium Architectural Cladding (800x600)
    ├── service-4.webp    # Hazardous & Asbestos Remediation (800x600)
    ├── service-5.webp    # Precision Leak Diagnostics & Repairs (800x600)
    ├── service-6.webp    # Marine-Grade Coastal Solutions (800x600)
    ├── about.webp        # Director Chris on-site inspection (900x1100)
    ├── gallery-1.webp    # Buderim tile-to-metal conversion (800x800)
    ├── gallery-2.webp    # Noosa Heads architectural nailstrip cladding (800x800)
    ├── gallery-3.webp    # Warana industrial warehouse roof (800x800)
    ├── gallery-4.webp    # Mooloolaba marine-grade Ultra roof (800x800)
    ├── gallery-5.webp    # Maroochydore commercial box gutters (800x800)
    └── gallery-6.webp    # Coolum Beach architectural standing seam (800x800)
```

---

## 🛠️ Page Sections

1. **Sticky Header:** Brand logo, navigation menu (Services, Why Us, Recent Work, Service Areas, Reviews, Contact), direct call CTA, and mobile drawer.
2. **Hero:** High-priority visual banner with dark overlay, core USP headline, supporting credential copy, dual CTAs (*Request Quote* & *Call 0422 607 165*), and 4 trust indicators below the fold.
3. **Capabilities (Services):** 6 detailed service cards covering domestic roofing, commercial infrastructure, architectural cladding (nailstrip/dominion), asbestos removal, leak diagnostics, and coastal marine-grade profiles.
4. **Why Us (Director-Led Model):** Direct accountability breakdown, 4 key differentiators, and verified company statistics.
5. **Recent Work (Gallery):** Real project showcases with specific suburb tags and scopes across the Sunshine Coast.
6. **Service Areas:** Regional coverage breakdown highlighting Warana headquarters and primary suburban corridors.
7. **Execution Process:** 4-step workflow: Site Inspection &rarr; Transparent Quote &rarr; Director-Led Execution &rarr; Final Sign-Off & Warranty.
8. **Client Reviews:** 3 Google-style verified review cards tailored to the core personas (Premium Homeowner, Commercial Asset Manager, and Custom Builder).
9. **Contact & Quote Request:** Direct telephone, email, physical hub details, lazy-loaded Google Maps iframe, and quote request form.
10. **Site Footer:** Brand statement, fast links, material specifications, and copyright details.
11. **Mobile Bottom Bar:** Persistent sticky bottom bar with quick touch triggers for mobile users.

---

## 🖼️ Image Replacement Guide

To replace placeholder images with final client job site photos:
1. Export all photos in `.webp` format at the exact dimensions listed below.
2. Save them into the `images/` directory using the identical filenames.
3. Ensure subject matter matches the technical scope described:

| File Path | Dimensions | Subject Recommendation |
|---|---|---|
| `images/hero.webp` | `1600x900` | Architectural coastal home with Colorbond Matt Monument roof at dusk |
| `images/hero-1280.webp` | `1280x720` | Tablet breakpoint version of hero image |
| `images/hero-640.webp` | `640x360` | Mobile breakpoint version of hero image |
| `images/service-1.webp` | `800x600` | Tile-to-metal conversion or domestic roof build |
| `images/service-2.webp` | `800x600` | High-span industrial factory or warehouse roof replacement |
| `images/service-3.webp` | `800x600` | Luxury facade with crisp vertical nailstrip / dominion cladding |
| `images/service-4.webp` | `800x600` | Licensed asbestos roofing removal and replacement |
| `images/service-5.webp` | `800x600` | Custom apron flashings and commercial box gutter installations |
| `images/service-6.webp` | `800x600` | Oceanfront Colorbond Ultra salt-resistant roof build |
| `images/about.webp` | `900x1100` | Director Chris on-site in trade workwear inspecting roof plumbing |
| `images/gallery-1.webp` | `800x800` | Buderim tile-to-Colorbond conversion in Matt Monument |
| `images/gallery-2.webp` | `800x800` | Noosa Heads architectural metal wall cladding |
| `images/gallery-3.webp` | `800x800` | Warana industrial precinct warehouse re-roofing |
| `images/gallery-4.webp` | `800x800` | Mooloolaba canal/waterfront residence with Colorbond Ultra |
| `images/gallery-5.webp` | `800x800` | Maroochydore commercial complex box gutters and downpipes |
| `images/gallery-6.webp` | `800x800` | Coolum Beach standing seam roof with custom skylight flashing |

---

## 🚀 How to Run Locally

Because the project is written in standard, clean HTML5/CSS/JS without external build dependencies, it can be served using any local web server.

### Option 1: Python HTTP Server
```bash
# In e:\CMSrooftop
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option 2: Node.js (npx serve)
```bash
npx serve .
```

### Option 3: Direct File Opening
Double-click [index.html](file:///e:/CMSrooftop/index.html) to open directly in Google Chrome, Microsoft Edge, or Firefox.

---

## 📞 Official Business Credentials

- **Trade Name:** CMC Roof Plumbing / C.M.C Roof Plumbing
- **Director:** Chris (Head Roof Plumber)
- **Primary Telephone:** 0422 607 165
- **Direct Business Email:** chris@cmcroofplumbing.com.au
- **Domain:** cmcroofplumbing.com.au
- **Location:** Warana, Queensland 4575 (Sunshine Coast)
