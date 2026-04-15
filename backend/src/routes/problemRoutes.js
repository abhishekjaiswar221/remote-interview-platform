import express from "express";
import { addProblem, updateProblem } from "../controllers/problemController.js";

const router = express.Router();

router.post("/add", addProblem);
router.put("/update/:id", updateProblem);

export default router;
