import type { Brand, DressStyle, Product, Review } from "@/types";

// Static mock data. Each getter is async so it can be swapped for a
// database query or API call later without changing the callers.

const newArrivals: Product[] = [
  {
    id: "1",
    slug: "t-shirt-with-tape-details",
    title: "T-shirt with Tape Details",
    images: ["/images/pic1.png"],
    price: 120,
    rating: 4.5,
    numReviews: 128,
    stock: 24,
  },
  {
    id: "2",
    slug: "skinny-fit-jeans",
    title: "Skinny Fit Jeans",
    images: ["/images/pic2.png"],
    price: 208,
    originalPrice: 260,
    rating: 3.5,
    numReviews: 64,
    stock: 12,
  },
  {
    id: "3",
    slug: "checkered-shirt",
    title: "Checkered Shirt",
    images: ["/images/pic3.png"],
    price: 180,
    rating: 4.5,
    numReviews: 96,
    stock: 18,
  },
  {
    id: "4",
    slug: "sleeve-striped-t-shirt",
    title: "Sleeve Striped T-shirt",
    images: ["/images/pic4.png"],
    price: 112,
    originalPrice: 160,
    rating: 4.5,
    numReviews: 45,
    stock: 0,
  },
];

const topSelling: Product[] = [
  {
    id: "5",
    slug: "vertical-striped-shirt",
    title: "Vertical Striped Shirt",
    images: ["/images/pic5.png"],
    price: 186,
    originalPrice: 232,
    rating: 5,
    numReviews: 212,
    stock: 30,
  },
  {
    id: "6",
    slug: "courage-graphic-t-shirt",
    title: "Courage Graphic T-shirt",
    images: ["/images/pic6.png"],
    price: 145,
    rating: 4,
    numReviews: 87,
    stock: 15,
  },
  {
    id: "7",
    slug: "loose-fit-bermuda-shorts",
    title: "Loose Fit Bermuda Shorts",
    images: ["/images/pic7.png"],
    price: 80,
    rating: 3,
    numReviews: 33,
    stock: 8,
  },
  {
    id: "8",
    slug: "faded-skinny-jeans",
    title: "Faded Skinny Jeans",
    images: ["/images/pic8.png"],
    price: 210,
    rating: 4.5,
    numReviews: 150,
    stock: 20,
  },
];

const reviews: Review[] = [
  {
    id: "1",
    author: "Sarah M.",
    content:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
    verified: true,
  },
  {
    id: "2",
    author: "Alex K.",
    content:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
    verified: true,
  },
  {
    id: "3",
    author: "James L.",
    content:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    verified: true,
  },
  {
    id: "4",
    author: "Samantha D.",
    content:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    rating: 5,
    verified: true,
  },
  {
    id: "5",
    author: "Moose K.",
    content:
      "The fit is perfect and the material feels premium. I've washed it several times and it still looks brand new. Shipping was quick too.",
    rating: 4.5,
    verified: true,
  },
  {
    id: "6",
    author: "Ethan R.",
    content:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    rating: 5,
    verified: true,
  },
];

const dressStyles: DressStyle[] = [
  { title: "Casual", slug: "casual", image: "/images/dress-style-1.png" },
  { title: "Formal", slug: "formal", image: "/images/dress-style-2.png" },
  { title: "Party", slug: "party", image: "/images/dress-style-3.png" },
  { title: "Gym", slug: "gym", image: "/images/dress-style-4.png" },
];

const brands: Brand[] = [
  { name: "Versace", logo: "/icons/versace-logo.svg", width: 167, height: 34 },
  { name: "Zara", logo: "/icons/zara-logo.svg", width: 92, height: 38 },
  { name: "Gucci", logo: "/icons/gucci-logo.svg", width: 157, height: 36 },
  { name: "Prada", logo: "/icons/prada-logo.svg", width: 195, height: 32 },
  {
    name: "Calvin Klein",
    logo: "/icons/calvin-klein-logo.svg",
    width: 208,
    height: 34,
  },
];

export async function getNewArrivals(): Promise<Product[]> {
  return newArrivals;
}

export async function getTopSelling(): Promise<Product[]> {
  return topSelling;
}

export async function getReviews(): Promise<Review[]> {
  return reviews;
}

export async function getDressStyles(): Promise<DressStyle[]> {
  return dressStyles;
}

export async function getBrands(): Promise<Brand[]> {
  return brands;
}
