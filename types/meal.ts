export interface Meal {
  id: string,
  categoryIds: string[];
  title: string;
  affordability: 'affordable' | 'pricey' | 'luxurious';
  complexity: 'simple' | 'hard' | 'challenging';
  imageUrl: string;
  duration: number,
  ingredients: string[],
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean,
  isVegetarian: boolean;
  isLactoseFree: boolean;
}