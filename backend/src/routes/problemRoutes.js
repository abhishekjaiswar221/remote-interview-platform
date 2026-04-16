import express from "express";
import {
  addProblem,
  deleteProblem,
  updateProblem,
} from "../controllers/problemController.js";

const router = express.Router();

router.post("/add", addProblem);
router.put("/update/:id", updateProblem);
router.delete("/delete/:id", deleteProblem);

export default router;
