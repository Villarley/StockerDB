import { Router } from "express";
import * as supplyService from "../services/supplyServices";

const router = Router();

// Create a new supply item
router.post("/", async (req, res) => {
  try {
    const supply = await supplyService.createSupply(req.body);
    res.status(201).json(supply);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get all supply items
router.get("/", async (req, res) => {
  try {
    const supplies = await supplyService.getAllSupplies();
    res.status(200).json(supplies);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get supply items by company ID
router.get("/company/:companyId", async (req, res) => {
  try {
    const supplies = await supplyService.getSuppliesByCompanyId(req.params.companyId);
    res.status(200).json(supplies);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get a specific supply item by ID
router.get("/:id", async (req, res) => {
  try {
    const supply = await supplyService.getSupplyById(req.params.id);
    if (supply) {
      res.status(200).json(supply);
    } else {
      res.status(404).json({ error: "Supply item not found" });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Update a specific supply item by ID
router.put("/:id", async (req, res) => {
  try {
    const supply = await supplyService.updateSupply(req.params.id, req.body);
    if (supply) {
      res.status(200).json(supply);
    } else {
      res.status(404).json({ error: "Supply item not found" });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Delete a specific supply item by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await supplyService.deleteSupply(req.params.id);
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Supply item not found" });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
