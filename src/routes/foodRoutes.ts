import { Router } from "express";
import * as foodService from "../services/foodServices";

const router = Router();

// Create a new food item
router.post("/", async (req, res) => {
  try {
    const food = await foodService.createFood(req.body);
    res.status(201).json(food);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get all food items
router.get("/", async (req, res) => {
  try {
    const foods = await foodService.getAllFoods();
    res.status(200).json(foods);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get food items by company ID
router.get("/company/:companyId", async (req, res) => {
  try {
    const foods = await foodService.getFoodsByCompanyId(req.params.companyId);
    res.status(200).json(foods);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get a specific food item by ID
router.get("/:id", async (req, res) => {
  try {
    const food = await foodService.getFoodById(req.params.id);
    if (food) {
      res.status(200).json(food);
    } else {
      res.status(404).json({ error: "Food item not found" });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Update a specific food item by ID
router.put("/:id", async (req, res) => {
  try {
    const food = await foodService.updateFood(req.params.id, req.body);
    if (food) {
      res.status(200).json(food);
    } else {
      res.status(404).json({ error: "Food item not found" });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Delete a specific food item by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await foodService.deleteFood(req.params.id);
    console.log(deleted);
    
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Food item not found" });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
