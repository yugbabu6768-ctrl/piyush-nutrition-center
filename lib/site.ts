export const COACH = {
  name: "Aditya Kumar Ranjan",
  phone: "8528940113",
  phoneIntl: "918528940113",
  email: "adityakumarranjan39@gmail.com",
  address:
    "Near Shiv Baba Marriage Lawn, Annawan Bazar, Ambedkar Nagar",
  brand: "Aditya Nutrition Club",
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
    name: "Formula 1 Nutritional Shake Mix",
    price: "₹2,999",
    details: "Balanced meal shake with protein, vitamins & minerals.",
    image: "/images/product-shake.png",
  },
  {
    name: "Herbal Aloe Concentrate",
    price: "₹1,499",
    details: "Soothing aloe drink that supports digestion & hydration.",
    image: "/images/product-aloe.png",
  },
  {
    name: "Personalized Protein Powder",
    price: "₹1,199",
    details: "Add extra protein to your shake to stay fuller longer.",
    image: "/images/product-protein.png",
  },
  {
    name: "Afresh Energy Drink Mix",
    price: "₹999",
    details: "Refreshing energy boost with a light, crisp taste.",
    image: "/images/product-energy.png",
  },
  {
    name: "Multivitamin Complex",
    price: "₹899",
    details: "Daily essential vitamins & minerals for overall wellness.",
    image: "/images/product-multivitamin.png",
  },
  {
    name: "Active Fiber Complex",
    price: "₹1,299",
    details: "Dietary fiber blend to support healthy digestion.",
    image: "/images/product-fiber.png",
  },
]

export const TRANSFORMATIONS = [
  { image: "/images/transform-1.png", name: "Rahul S.", result: "Lost 12 kg" },
  { image: "/images/transform-2.png", name: "Priya M.", result: "Lost 9 kg" },
  { image: "/images/transform-3.png", name: "Anil K.", result: "Lost 15 kg" },
  { image: "/images/transform-4.png", name: "Sneha R.", result: "Lost 8 kg" },
  { image: "/images/transform-5.png", name: "Vikram T.", result: "Lost 14 kg" },
  { image: "/images/transform-6.png", name: "Pooja D.", result: "Lost 10 kg" },
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
