export interface Fruit {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: {
    calories: number;
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
  };
}

export type GroupByOption = 'None' | 'Family' | 'Order' | 'Genus';

export interface JarFruit extends Fruit {
  count: number;
}
