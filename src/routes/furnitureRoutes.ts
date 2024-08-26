import { Router } from "express";
import * as furnitureService from "../services/furnitureServices";

const router = Router();

// Create a new furniture item
router.post("/", async (req, res) => {
  try {
    const furniture = await furnitureService.createFurniture(req.body);
    res.status(201).json(furniture);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get all furniture items
router.get("/", async (req, res) => {
  try {
    const furniture = await furnitureService.getAllFurniture();
    res.status(200).json(furniture);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get furniture items by company ID
router.get("/company/:companyId", async (req, res) => {
  try {
    const furniture = await furnitureService.getFurnitureByCompanyId(req.params.companyId);
    res.status(200).json(furniture);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get a specific furniture item by ID
router.get("/:id", async (req, res) => {
  try {
    const furniture = await furnitureService.getFurnitureById(req.params.id);
    if (furniture) {
      res.status(200).json(furniture);
    } else {
      res.status(404).json({ error: "Furniture item not found" });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Update a specific furniture item by ID
router.put("/:id", async (req, res) => {
  try {
    const furniture = await furnitureService.updateFurniture(req.params.id, req.body);
    if (furniture) {
      res.status(200).json(furniture);
    } else {
      res.status(404).json({ error: "Furniture item not found" });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Delete a specific furniture item by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await furnitureService.deleteFurniture(req.params.id);
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Furniture item not found" });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
