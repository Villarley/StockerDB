import { Food } from "../models/food";

interface FoodData {
  name: string;
  brand: string;
  stock: number;
  spoilingDate: Date;
  companyId: string;
}

// Create a new food item
export const createFood = async (foodData: Partial<FoodData>) => {
  return await Food.create(foodData);
};

// Get all food items
export const getAllFoods = async () => {
  return await Food.findAll();
};


export const getFoodsByCompanyId = async (companyId: string) => {
    return await Food.findAll({ where: { companyId } });
  };

// Get a specific food item by ID
export const getFoodById = async (id: string) => {
  return await Food.findByPk(id);
};

// Update a specific food item by ID
export const updateFood = async (id: string, foodData: Partial<FoodData>) => {
  const food = await Food.findByPk(id);
  if (food) {
    // Preserve existing values if not provided
    const updatedData = {
      name: foodData.name ?? food.name,
      brand: foodData.brand ?? food.brand,
      stock: foodData.stock ?? food.stock,
      spoilingDate: foodData.spoilingDate ?? food.spoilingDate,
    };

    await food.update(updatedData);
    return food;
  }
  return null;
};

// Delete a specific food item by ID
export const deleteFood = async (id: string) => {
  const food = await Food.findByPk(id);
  if (food) {
    await food.destroy();
    return true;
  }
  return false;
};
