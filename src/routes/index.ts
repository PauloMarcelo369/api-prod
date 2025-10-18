import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API online 🚀" });
});

router.get("/macaco", (req, res) => {
  res.json({ message: "O macaco voou no furacao" });
});

router.get("/ramon-dino", (req, res) => {
  res.json({ message: "O dinossauro do acre venceu!!!!" });
});

router.get("/bomba", (req, res) => {
  res.json({ message: "boommmm!!!!" });
});

export default router;
