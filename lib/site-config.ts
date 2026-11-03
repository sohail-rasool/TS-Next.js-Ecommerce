import type { FooterLinkGroup, NavLink } from "@/types";

export const siteConfig = {
  name: "SHOP.CO",
  description:
    "We have clothes that suits your style and which you're proud to wear. From women to men.",
};

export const shopCategories: NavLink[] = [
  { label: "Men's Clothes", href: "/shop?category=men" },
  { label: "Women's Clothes", href: "/shop?category=women" },
  { label: "Kids Clothes", href: "/shop?category=kids" },
  { label: "Bags and Shoes", href: "/shop?category=bags-shoes" },
];

export const navLinks: NavLink[] = [
  { label: "On Sale", href: "/shop?sale=true" },
  { label: "New Arrivals", href: "/shop?sort=newest" },
  { label: "Brands", href: "/shop?view=brands" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Features", href: "#" },
      { label: "Works", href: "#" },
      { label: "Career", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Customer Support", href: "#" },
      { label: "Delivery Details", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "FAQ",
    links: [
      { label: "Account", href: "#" },
      { label: "Manage Deliveries", href: "#" },
      { label: "Orders", href: "#" },
      { label: "Payments", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Free eBooks", href: "#" },
      { label: "Development Tutorial", href: "#" },
      { label: "How to - Blog", href: "#" },
      { label: "Youtube Playlist", href: "#" },
    ],
  },
];

export const socialLinks = [
  { label: "X (Twitter)", href: "https://x.com", icon: "/icons/xTwitter.svg" },
  { label: "Facebook", href: "https://facebook.com", icon: "/icons/facebook.svg" },
  { label: "Instagram", href: "https://instagram.com", icon: "/icons/instagram.svg" },
  { label: "GitHub", href: "https://github.com", icon: "/icons/github.svg" },
];

export const paymentMethods = [
  { label: "Visa", icon: "/icons/Visa.svg" },
  { label: "Mastercard", icon: "/icons/mastercard.svg" },
  { label: "PayPal", icon: "/icons/paypal.svg" },
  { label: "Apple Pay", icon: "/icons/applePay.svg" },
  { label: "Google Pay", icon: "/icons/googlePay.svg" },
];
