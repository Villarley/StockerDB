import { Furniture } from "../models/furniture";

interface FurnitureData {
  name: string;
  state: string;
  companyId: string;
}

// Create a new furniture item
export const createFurniture = async (furnitureData: FurnitureData) => {
  return await Furniture.create(furnitureData);
};

// Get all furniture items
export const getAllFurniture = async () => {
  return await Furniture.findAll();
};

// Get furniture items by company ID
export const getFurnitureByCompanyId = async (companyId: string) => {
  return await Furniture.findAll({ where: { companyId } });
};

// Get a specific furniture item by ID
export const getFurnitureById = async (id: string) => {
  return await Furniture.findByPk(id);
};

// Update a specific furniture item by ID
export const updateFurniture = async (id: string, furnitureData: Partial<FurnitureData>) => {
  const furniture = await Furniture.findByPk(id);
  if (furniture) {
    // Preserve existing values if not provided
    const updatedData = {
      name: furnitureData.name ?? furniture.name,
      state: furnitureData.state ?? furniture.state,
    };

    await furniture.update(updatedData);
    return furniture;
  }
  return null;
};

// Delete a specific furniture item by ID
export const deleteFurniture = async (id: string) => {
  const furniture = await Furniture.findByPk(id);
  if (furniture) {
    await furniture.destroy();
    return true;
  }
  return false;
};
