export type Category =
  | 'Rings'
  | 'Necklaces'
  | 'Bracelets'
  | 'Earrings'
  | 'Bangles'
  | 'Wedding Collection'
  | 'Luxury Collection';

export type Metal = 'Yellow Gold' | 'Rose Gold' | 'White Gold' | 'Platinum' | 'Silver';

export type Stone = 'Diamond' | 'Ruby' | 'Emerald' | 'Sapphire' | 'Pearl' | 'None';

export type Badge = 'Best Seller' | 'New Arrival' | 'Limited Edition' | 'Exclusive' | null;

export interface Product {
  id: string;
  title: string;
  category: Category;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  metal: Metal;
  stone: Stone;
  collection: string;
  badge: Badge;
  images: string[];
  description: string;
  materials: string;
  isNew: boolean;
  popularity: number;
}

export const categories: Category[] = [
  'Rings',
  'Necklaces',
  'Bracelets',
  'Earrings',
  'Bangles',
  'Wedding Collection',
  'Luxury Collection',
];

export const metals: Metal[] = ['Yellow Gold', 'Rose Gold', 'White Gold', 'Platinum', 'Silver'];

export const stones: Stone[] = ['Diamond', 'Ruby', 'Emerald', 'Sapphire', 'Pearl', 'None'];

export const collections = ['Heritage', 'Eternity', 'Aurelia', 'Maharaja', 'Celeste'];

export const products: Product[] = [
  {
    id: 'daivique-solitaire-ring',
    title: 'Solitaire Eternity Ring',
    category: 'Rings',
    price: 185000,
    oldPrice: 210000,
    rating: 4.9,
    reviews: 127,
    metal: 'White Gold',
    stone: 'Diamond',
    collection: 'Eternity',
    badge: 'Best Seller',
    images: [
      'https://images.pexels.com/photos/30541177/pexels-photo-30541177.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/30541171/pexels-photo-30541171.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/30541187/pexels-photo-30541187.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    description: 'A breathtaking solitaire ring featuring a brilliant-cut diamond set in 18K white gold. Designed for the woman who appreciates understated elegance and timeless beauty.',
    materials: '18K White Gold, 1.2ct Brilliant Cut Diamond, VS1 Clarity',
    isNew: false,
    popularity: 95,
  },
  {
    id: 'daivique-sapphire-ring',
    title: 'Ceylon Sapphire Ring',
    category: 'Rings',
    price: 245000,
    rating: 5.0,
    reviews: 84,
    metal: 'Yellow Gold',
    stone: 'Sapphire',
    collection: 'Aurelia',
    badge: 'Exclusive',
    images: [
      'https://images.pexels.com/photos/14058109/pexels-photo-14058109.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/31728371/pexels-photo-31728371.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    description: 'A stunning Ceylon sapphire surrounded by a halo of diamonds, set in warm 22K yellow gold. A statement piece that commands attention.',
    materials: '22K Yellow Gold, 2.5ct Ceylon Sapphire, Diamond Halo',
    isNew: false,
    popularity: 88,
  },
  {
    id: 'daivique-rose-gold-ring',
    title: 'Rose Gold Diamond Ring',
    category: 'Rings',
    price: 165000,
    rating: 4.8,
    reviews: 203,
    metal: 'Rose Gold',
    stone: 'Diamond',
    collection: 'Celeste',
    badge: 'New Arrival',
    images: [
      'https://images.pexels.com/photos/33343007/pexels-photo-33343007.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/30541177/pexels-photo-30541177.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    description: 'Romantic rose gold meets brilliant diamonds in this contemporary ring design. Perfect for engagements and anniversary celebrations.',
    materials: '18K Rose Gold, 0.8ct Diamond Cluster, SI Clarity',
    isNew: true,
    popularity: 82,
  },
  {
    id: 'daivique-diamond-pendant-necklace',
    title: 'Diamond Pendant Necklace',
    category: 'Necklaces',
    price: 320000,
    oldPrice: 380000,
    rating: 4.9,
    reviews: 156,
    metal: 'White Gold',
    stone: 'Diamond',
    collection: 'Eternity',
    badge: 'Best Seller',
    images: [
      'https://images.pexels.com/photos/17833830/pexels-photo-17833830.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/4889719/pexels-photo-4889719.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/12217206/pexels-photo-12217206.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    description: 'A delicate diamond pendant suspended from a fine white gold chain. This necklace embodies refined luxury and everyday elegance.',
    materials: '18K White Gold, 0.5ct Diamond Pendant, 18-inch Chain',
    isNew: false,
    popularity: 90,
  },
  {
    id: 'daivique-gold-chain-necklace',
    title: 'Heritage Gold Chain Necklace',
    category: 'Necklaces',
    price: 285000,
    rating: 4.7,
    reviews: 98,
    metal: 'Yellow Gold',
    stone: 'None',
    collection: 'Heritage',
    badge: 'Limited Edition',
    images: [
      'https://images.pexels.com/photos/20858950/pexels-photo-20858950.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/4735888/pexels-photo-4735888.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    description: 'A masterfully crafted 22K gold chain necklace inspired by traditional Indian heritage. Each link is handcrafted for strength and beauty.',
    materials: '22K Yellow Gold, Handcrafted Links, 20-inch Length',
    isNew: false,
    popularity: 78,
  },
  {
    id: 'daivique-gold-pendant-necklace',
    title: 'Aurelia Pendant Necklace',
    category: 'Necklaces',
    price: 195000,
    rating: 4.8,
    reviews: 67,
    metal: 'Rose Gold',
    stone: 'Diamond',
    collection: 'Aurelia',
    badge: 'New Arrival',
    images: [
      'https://images.pexels.com/photos/12217206/pexels-photo-12217206.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/17833830/pexels-photo-17833830.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    description: 'An intricately designed pendant in rose gold with accent diamonds. A versatile piece that transitions seamlessly from day to evening.',
    materials: '18K Rose Gold, Accent Diamonds, 16-inch Chain',
    isNew: true,
    popularity: 75,
  },
  {
    id: 'daivique-gold-bracelet',
    title: 'Geometric Gold Bracelet',
    category: 'Bracelets',
    price: 145000,
    rating: 4.7,
    reviews: 112,
    metal: 'Yellow Gold',
    stone: 'None',
    collection: 'Celeste',
    badge: null,
    images: [
      'https://images.pexels.com/photos/29357584/pexels-photo-29357584.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/29502314/pexels-photo-29502314.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    description: 'A contemporary geometric bracelet in 18K yellow gold with intricate patterns. Modern luxury for the discerning collector.',
    materials: '18K Yellow Gold, Hand-Engraved Pattern, Adjustable',
    isNew: false,
    popularity: 70,
  },
  {
    id: 'daivique-leaf-bangle',
    title: 'Leaf Motif Bangle',
    category: 'Bangles',
    price: 210000,
    rating: 4.9,
    reviews: 89,
    metal: 'Rose Gold',
    stone: 'None',
    collection: 'Heritage',
    badge: 'Exclusive',
    images: [
      'https://images.pexels.com/photos/29385411/pexels-photo-29385411.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/14873626/pexels-photo-14873626.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    description: 'An exquisite bangle featuring a delicate leaf motif in rose gold with silver and gold accents. Nature-inspired luxury at its finest.',
    materials: '18K Rose Gold, Silver Accents, Hand-Carved Detail',
    isNew: false,
    popularity: 85,
  },
  {
    id: 'daivique-gold-bangles-set',
    title: 'Heritage Bangles Set',
    category: 'Bangles',
    price: 395000,
    oldPrice: 450000,
    rating: 5.0,
    reviews: 54,
    metal: 'Yellow Gold',
    stone: 'None',
    collection: 'Heritage',
    badge: 'Best Seller',
    images: [
      'https://images.pexels.com/photos/14873626/pexels-photo-14873626.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/32874211/pexels-photo-32874211.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    description: 'A set of intricately designed gold bangles celebrating centuries of Indian jewellery tradition. Each bangle is a wearable work of art.',
    materials: '22K Yellow Gold, Set of 4, Handcrafted',
    isNew: false,
    popularity: 92,
  },
  {
    id: 'daivique-jewellery-set',
    title: 'Celeste Jewellery Set',
    category: 'Luxury Collection',
    price: 575000,
    rating: 5.0,
    reviews: 41,
    metal: 'Yellow Gold',
    stone: 'Diamond',
    collection: 'Celeste',
    badge: 'Limited Edition',
    images: [
      'https://images.pexels.com/photos/29502314/pexels-photo-29502314.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/37485313/pexels-photo-37485313.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    description: 'A complete luxury set featuring bracelet, earrings, and ring in 18K gold with diamond accents. The ultimate statement of elegance.',
    materials: '18K Yellow Gold, Diamond Accents, 3-Piece Set',
    isNew: false,
    popularity: 96,
  },
  {
    id: 'daivique-bridal-necklace-set',
    title: 'Royal Bridal Necklace Set',
    category: 'Wedding Collection',
    price: 895000,
    oldPrice: 1050000,
    rating: 5.0,
    reviews: 38,
    metal: 'Yellow Gold',
    stone: 'Ruby',
    collection: 'Maharaja',
    badge: 'Exclusive',
    images: [
      'https://images.pexels.com/photos/35059564/pexels-photo-35059564.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/29038003/pexels-photo-29038003.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    description: 'A magnificent bridal set with gold necklaces and bangles adorned with rubies. Designed for the bride who deserves nothing less than royalty.',
    materials: '22K Yellow Gold, Natural Rubies, Bridal Set',
    isNew: false,
    popularity: 98,
  },
  {
    id: 'daivique-bridal-jewellery',
    title: 'Maharaja Bridal Collection',
    category: 'Wedding Collection',
    price: 1250000,
    rating: 5.0,
    reviews: 27,
    metal: 'Yellow Gold',
    stone: 'Emerald',
    collection: 'Maharaja',
    badge: 'Limited Edition',
    images: [
      'https://images.pexels.com/photos/29038003/pexels-photo-29038003.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/6011749/pexels-photo-6011749.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/33023960/pexels-photo-33023960.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    description: 'The pinnacle of DAIVIQUE craftsmanship — a complete bridal jewellery ensemble featuring emerald and gold detailing fit for a queen.',
    materials: '22K Yellow Gold, Colombian Emeralds, Complete Bridal Set',
    isNew: true,
    popularity: 100,
  },
];

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.collection === product.collection))
    .slice(0, count);
}
