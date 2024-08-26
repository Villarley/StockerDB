import { Supply } from "../models/supply";

interface SupplyData {
  name: string;
  brand: string;
  stock: number;
  companyId: string;
  category:string;
}

// Create a new supply item
export const createSupply = async (supplyData: SupplyData) => {
  return await Supply.create(supplyData);
};

// Get all supply items
export const getAllSupplies = async () => {
  return await Supply.findAll();
};

// Get supply items by company ID
export const getSuppliesByCompanyId = async (companyId: string) => {
  return await Supply.findAll({ where: { companyId } });
};

// Get a specific supply item by ID
export const getSupplyById = async (id: string) => {
  return await Supply.findByPk(id);
};

// Update a specific supply item by ID
export const updateSupply = async (id: string, supplyData: Partial<SupplyData>) => {
  const supply = await Supply.findByPk(id);
  if (supply) {
    // Preserve existing values if not provided
    const updatedData = {
      name: supplyData.name ?? supply.name,
      brand: supplyData.brand ?? supply.brand,
      stock: supplyData.stock ?? supply.stock,
      category: supplyData.category ?? supply.category
    };

    await supply.update(updatedData);
    return supply;
  }
  return null;
};

// Delete a specific supply item by ID
export const deleteSupply = async (id: string) => {
  const supply = await Supply.findByPk(id);
  if (supply) {
    await supply.destroy();
    return true;
  }
  return false;
};
