export type Category = 'Bouquets' | 'Single Stems' | 'Plants' | 'Wedding';
export type ColorTag = 'Pink' | 'Peach' | 'Yellow' | 'Lilac' | 'White' | 'Green';

export interface Product {
  id: string;
  name: string;
  category: Category;
  color: ColorTag;
  price: number;
  swatch: string;
  accent: string;
}

export const products: Product[] = [
  { id: '1', name: 'Morning Blush', category: 'Bouquets', color: 'Pink', price: 48, swatch: '#F9D5D3', accent: '#F2B4B0' },
  { id: '2', name: 'Sunlit Peach', category: 'Bouquets', color: 'Peach', price: 52, swatch: '#FBD9B8', accent: '#F3BF8C' },
  { id: '3', name: 'Buttercup Dream', category: 'Single Stems', color: 'Yellow', price: 14, swatch: '#FCEBA4', accent: '#F2D86A' },
  { id: '4', name: 'Lilac Whisper', category: 'Bouquets', color: 'Lilac', price: 46, swatch: '#DCD0EC', accent: '#BEA8DC' },
  { id: '5', name: 'Mint Garden', category: 'Plants', color: 'Green', price: 32, swatch: '#CCE6D0', accent: '#9FCDA5' },
  { id: '6', name: 'Cloud Peony', category: 'Single Stems', color: 'White', price: 12, swatch: '#F4EFE7', accent: '#D8CFBF' },
  { id: '7', name: 'Rosé Vows', category: 'Wedding', color: 'Pink', price: 120, swatch: '#F9D5D3', accent: '#E89FA0' },
  { id: '8', name: 'Honey Daisy', category: 'Single Stems', color: 'Yellow', price: 10, swatch: '#FCEBA4', accent: '#E8C95B' },
  { id: '9', name: 'Lavender Pot', category: 'Plants', color: 'Lilac', price: 28, swatch: '#DCD0EC', accent: '#B39FD0' },
  { id: '10', name: 'Peach Tulips', category: 'Bouquets', color: 'Peach', price: 38, swatch: '#FBD9B8', accent: '#EEB489' },
  { id: '11', name: 'White Aisle', category: 'Wedding', color: 'White', price: 140, swatch: '#F4EFE7', accent: '#CDBFA8' },
  { id: '12', name: 'Fern Bowl', category: 'Plants', color: 'Green', price: 24, swatch: '#CCE6D0', accent: '#8CBF93' },
];

export const categories: Category[] = ['Bouquets', 'Single Stems', 'Plants', 'Wedding'];
export const colors: ColorTag[] = ['Pink', 'Peach', 'Yellow', 'Lilac', 'White', 'Green'];
