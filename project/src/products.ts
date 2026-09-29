export type Category = 'fabrics' | 'handbags' | 'heels' | 'accessories';

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  badge?: string;
}

export const CATEGORIES: { key: Category; label: string; icon: string }[] = [
  { key: 'fabrics', label: 'Fabrics', icon: 'Scissors' },
  { key: 'handbags', label: 'Handbags', icon: 'ShoppingBag' },
  { key: 'heels', label: 'Heels', icon: 'Footprints' },
  { key: 'accessories', label: 'Accessories', icon: 'Sparkles' },
];

export const WHATSAPP_NUMBER = '233200000000';

export const products: Product[] = [
  {
    id: 1,
    name: 'Ankara Print Fabric (6 Yards)',
    category: 'fabrics',
    price: 120,
    image: 'https://images.pexels.com/photos/38528495/pexels-photo-38528495.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Premium quality Ankara print fabric, 6 yards. Vibrant colours with bold traditional patterns. Perfect for making dresses, skirts, and matching sets. 100% cotton, wax-printed for lasting colour.',
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Kente Strip Fabric (4 Yards)',
    category: 'fabrics',
    price: 180,
    image: 'https://images.pexels.com/photos/38528494/pexels-photo-38528494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Authentic Kente strip fabric, handwoven with intricate patterns. 4 yards of rich gold, red, and green threads. Ideal for special occasions, weddings, and traditional ceremonies.',
    badge: 'Premium',
  },
  {
    id: 3,
    name: 'African Wax Print (6 Yards)',
    category: 'fabrics',
    price: 95,
    image: 'https://images.pexels.com/photos/38528500/pexels-photo-38528500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Colourful African wax print fabric, 6 yards. Soft texture with beautiful floral-inspired patterns. Great for everyday wear and custom tailoring.',
  },
  {
    id: 4,
    name: 'Printed Cotton Fabric (5 Yards)',
    category: 'fabrics',
    price: 75,
    image: 'https://images.pexels.com/photos/1820575/pexels-photo-1820575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Lightweight printed cotton fabric, 5 yards. Breathable and comfortable for Ghanaian weather. Lovely geometric patterns in warm tones.',
  },
  {
    id: 5,
    name: 'Designer Leather Handbag',
    category: 'handbags',
    price: 250,
    image: 'https://images.pexels.com/photos/3808229/pexels-photo-3808229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Elegant white leather handbag with gold accents. Spacious interior with multiple compartments. Comes with matching sunglasses case. Perfect for work and outings.',
    badge: 'New',
  },
  {
    id: 6,
    name: 'Python Print Leather Bag',
    category: 'handbags',
    price: 210,
    image: 'https://images.pexels.com/photos/27174539/pexels-photo-27174539.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Luxury python print leather handbag. Eye-catching texture with sturdy construction. Compact yet roomy enough for all your essentials.',
  },
  {
    id: 7,
    name: 'Brown Leather Tote Bag',
    category: 'handbags',
    price: 190,
    image: 'https://images.pexels.com/photos/27204288/pexels-photo-27204288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Stylish brown leather tote with buckle and zipper details. Perfect for everyday use — fits a laptop, documents, and personal items with ease.',
  },
  {
    id: 8,
    name: 'Luxury Shoulder Bag',
    category: 'handbags',
    price: 230,
    image: 'https://images.pexels.com/photos/27174573/pexels-photo-27174573.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Dark brown leather handbag with beige handles and adjustable strap. Timeless design that pairs beautifully with any outfit.',
  },
  {
    id: 9,
    name: 'Beige Evening Purse',
    category: 'handbags',
    price: 140,
    image: 'https://images.pexels.com/photos/27298312/pexels-photo-27298312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Elegant beige leather purse with minimalist design. Perfect for evening events and special occasions. Compact and chic.',
  },
  {
    id: 10,
    name: 'Red Statement Handbag',
    category: 'handbags',
    price: 165,
    image: 'https://images.pexels.com/photos/27100525/pexels-photo-27100525.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Bold red handbag that makes a statement. Quality leather with smooth finish. A pop of colour for any outfit.',
  },
  {
    id: 11,
    name: 'Black Stiletto Heels',
    category: 'heels',
    price: 180,
    image: 'https://images.pexels.com/photos/27204266/pexels-photo-27204266.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Classic black stiletto heels. Sleek design with comfortable insole. Perfect for formal events, dinners, and office wear.',
    badge: 'Bestseller',
  },
  {
    id: 12,
    name: 'Red High Heel Boots',
    category: 'heels',
    price: 220,
    image: 'https://images.pexels.com/photos/27398611/pexels-photo-27398611.png?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Stunning red high heel boots. Fashion-forward design that turns heads. Quality material with durable heel construction.',
    badge: 'New',
  },
  {
    id: 13,
    name: 'Minimalist Black Pumps',
    category: 'heels',
    price: 160,
    image: 'https://images.pexels.com/photos/27204295/pexels-photo-27204295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Minimalist black stiletto pumps. Clean lines and timeless appeal. A wardrobe essential for every elegant woman.',
  },
  {
    id: 14,
    name: 'Designer Stiletto Heels',
    category: 'heels',
    price: 200,
    image: 'https://images.pexels.com/photos/27204296/pexels-photo-27204296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Sophisticated black stiletto heels on a beige leather backdrop. Premium construction with elegant silhouette.',
  },
  {
    id: 15,
    name: 'Blue Suede High Heels',
    category: 'heels',
    price: 175,
    image: 'https://images.pexels.com/photos/27113450/pexels-photo-27113450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Chic blue suede high heels. Unique colour that stands out beautifully. Comfortable fit with stable heel.',
  },
  {
    id: 16,
    name: 'Gold Necklace Set',
    category: 'accessories',
    price: 130,
    image: 'https://images.pexels.com/photos/29502932/pexels-photo-29502932.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Elegant gold necklace and ring set. Minimalist design perfect for everyday elegance or gifting. High-quality finish.',
    badge: 'Premium',
  },
  {
    id: 17,
    name: 'Heart Pendant & Earrings',
    category: 'accessories',
    price: 95,
    image: 'https://images.pexels.com/photos/34444133/pexels-photo-34444133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Beautiful heart pendant necklace with matching earrings. Delicate and romantic. Comes in an elegant gift box.',
  },
  {
    id: 18,
    name: 'Pearl Jewelry Set',
    category: 'accessories',
    price: 150,
    image: 'https://images.pexels.com/photos/6716444/pexels-photo-6716444.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Luxurious pearl jewelry set including bracelet, earrings, necklace, and ring. Timeless elegance for special occasions.',
    badge: 'Bestseller',
  },
  {
    id: 19,
    name: 'Gold Bangles (Set of 3)',
    category: 'accessories',
    price: 110,
    image: 'https://images.pexels.com/photos/37573129/pexels-photo-37573129.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Set of 3 gold bangles with elegant detailing. Lightweight and comfortable for daily wear. Mix and match or wear together.',
  },
  {
    id: 20,
    name: 'Luxury Gold Jewelry Set',
    category: 'accessories',
    price: 200,
    image: 'https://images.pexels.com/photos/29502955/pexels-photo-29502955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Complete gold jewelry set featuring necklace, ring, and earrings with gemstone accents. Premium quality for the discerning woman.',
    badge: 'Premium',
  },
];
