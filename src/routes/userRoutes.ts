import { Router } from "express";
import * as userService from "../services/userServices";

const router = Router();

// Ruta para crear un nuevo usuario
router.post("/", async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error:any) {
    console.error(error)
    res.status(500).json({ error: error.message });
  }
});

// Ruta para iniciar sesión
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.loginUser({ email, password });
    res.status(200).json({ user });
  } catch (error:any) {
    res.status(401).json({ error: error.message });
  }
});

export default router;
