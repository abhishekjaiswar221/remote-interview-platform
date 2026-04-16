import express from "express";
import {
  addProblem,
  deleteProblem,
  getAllProblems,
  updateProblem,
} from "../controllers/problemController.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/get-all-problems", protectRoute, getAllProblems);
router.post("/add", protectRoute, addProblem);
router.put("/update/:id", protectRoute, updateProblem);
router.delete("/delete/:id", protectRoute, deleteProblem);

export default router;
