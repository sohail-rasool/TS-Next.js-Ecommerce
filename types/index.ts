export type Product = {
  id: string;
  slug: string;
  title: string;
  /** Product photos, e.g. one per colour. The first is the main image. */
  images: string[];
  price: number;
  /** Price before discount. When set, the card shows a strikethrough price and a discount badge. */
  originalPrice?: number;
  /** Rating out of 5. */
  rating: number;
  /** Number of reviews the rating is based on. */
  numReviews: number;
  /** Units available. 0 means out of stock. */
  stock: number;
};

export type Review = {
  id: string;
  author: string;
  content: string;
  rating: number;
  verified: boolean;
  date?: string;
};

export type DressStyle = {
  title: string;
  slug: string;
  image: string;
};

export type Brand = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

export type NavLink = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: NavLink[];
};
