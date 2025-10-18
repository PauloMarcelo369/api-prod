import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API online 🚀" });
});

router.get("/macaco", (req, res) => {
  res.json({ message: "O macaco voou no furacao" });
});

export default router;
