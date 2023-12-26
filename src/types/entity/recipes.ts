export type RecipeTypes = {
  id: number;
  name: string;
  description: string;
  category: string;
  vegan: boolean;
  cookTime: number;
  thumbnail: string;
  origin: string;
  ingredients: string[];
  measures: string[];
  steps: string[];
  userId: number;
  createdAt: Date;
  updatedAt: Date;
};
