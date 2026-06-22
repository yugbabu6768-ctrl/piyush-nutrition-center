export const COACH = {
  name: "Aditya Kumar Ranjan",
  phone: "8528940113",
  phoneIntl: "918528940113",
  email: "adityakumarranjan39@gmail.com",
  address:
    "Near Shiv Baba Marriage Lawn, Annawan Bazar, Ambedkar Nagar",
  brand: "Piyush Nutrition Center",
  tagline:
    "Nutrition, Wellness & Weight Management Guidance Under One Roof",
}

/** Build a WhatsApp click-to-chat link with a prefilled message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${COACH.phoneIntl}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Coach", href: "#coach" },
  { label: "Transformations", href: "#transformations" },
  { label: "Products", href: "#products" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export type Product = {
  name: string
  price: string
  details: string
  image: string
}

// Prices are easy to edit here.
export const PRODUCTS: Product[] = [
  {
    name: "Herbalife Formula-1 Nutritional Shake"
    details: "Balanced meal replacement shake with protein, vitamins and minerals.",
    image: "/images/product-formula1.png",
  },
  {
    name: "Herbalife Activated Fibre - 90 Tablets"
    details: "Supports healthy digestion and daily fibre intake.",
    image: "/images/product-fibre.png",
  },
  {
    name: "Herbalife Dinoshake Strawberry Flavor - 200g"
    details: "Nutritious shake specially designed for growing children.",
    image: "/images/product-formula1.png",
  },
  {
    name: "Herbal Concentrate Original 102g"
    details: "Refreshing herbal beverage mix for daily wellness.",
    image: "/images/product-tea.png",
  },
  {
    name: "HERBALIFE Weight Loss Combo"
    details:
      "Complete weight management starter combo: Formula 1 Mango, ShakeMate, Protein Powder & Afresh Energy Drink Lemon.",
    image: "/images/product-combo.png",
  },
  {
    name: "Herbalife Skin Care Kit",
    price: "₹4,999
    details: "Complete skin wellness and personal care package.",
    image: "/images/product-skincare.png",
  },
]

export const TRANSFORMATIONS = [
  {
    image: "/images/transform-woman.png",
    name: "Anjali Sharma",
    result: "Lost 18 kg",
  },
  {
    image: "/images/transform-vinod.png",
    name: "Vinod Kumar",
    result: "Lost 14 kg",
  },
  {
    image: "/images/transform-rajesh.png",
    name: "Aditya Kumar Ranjan",
    result: "Lost 22 kg",
  },
]

export const REVIEWS = [
  {
    name: "Neha Verma",
    rating: 5,
    text: "Coach Aditya guided me with a simple nutrition plan and I feel more energetic every day. Highly recommended!",
  },
  {
    name: "Amit Singh",
    rating: 5,
    text: "Very supportive and knowledgeable. The product recommendations were perfect for my routine.",
  },
  {
    name: "Sunita Devi",
    rating: 5,
    text: "Friendly guidance and regular follow-ups kept me motivated. I am very happy with my progress.",
  },
  {
    name: "Rohit Kumar",
    rating: 5,
    text: "Great experience at the nutrition club. The shakes are tasty and the support is genuine.",
  },
  {
    name: "Kavita Yadav",
    rating: 4,
    text: "Helpful consultation and easy to follow advice. Booking on WhatsApp made everything convenient.",
  },
  {
    name: "Manish Gupta",
    rating: 5,
    text: "Professional and caring coach. My weight management journey became much easier with his support.",
  },
]
