export const SITE_URL = "https://laarchitects.in";
export const BRAND_NAME = "LA Architects";

export const SERVICE_AREAS = [
  "Madurai",
  "Anna Nagar, Madurai",
  "Chennai",
  "Coimbatore",
  "Trichy",
  "Salem",
  "Tirunelveli",
  "Erode",
  "Thoothukudi",
  "Tanjore",
  "Tamil Nadu",
  "Bengaluru",
  "Kerala",
  "Pondicherry",
  "India",
];

export const DEFAULT_KEYWORDS = [
  "architect near me",
  "architecture firm India",
  "interior designer near me",
  "house design India",
  "commercial architecture India",
  "landscape design studio",
  "project management architects",
  "residential architects India",
  "office interior design India",
  "modern architecture",
  "sustainable design",
];

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["ArchitectureFirm", "LocalBusiness"],
  "name": BRAND_NAME,
  "url": SITE_URL,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "424, East Cross Street, Anna Nagar",
    "addressLocality": "Madurai",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN",
  },
  "telephone": "+91-63842-84600",
  "email": "ajithmuthu.la@gmail.com",
  "openingHours": "Mo-Sa 10:00-18:00",
  "areaServed": SERVICE_AREAS.map((name) => ({
    "@type": "Place",
    name,
  })),
  "serviceType": [
    "Architecture",
    "Interior Design",
    "Landscape Design",
    "Project Management",
  ],
  "priceRange": "$$",
};
