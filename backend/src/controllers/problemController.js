import { logger } from "../lib/utils.js";
import Problem from "../models/Problem.js";

export const getAllProblems = async (_, res) => {
  try {
    const problems = await Problem.find();

    if (!problems.length)
      return res.status(404).json({ message: "No problems found" });

    return res.status(200).json({
      message: "Problems retrieved successfully!",
      data: problems,
    });
  } catch (error) {
    logger.error("Error in getAllProblems controller", { stack: error.stack });
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const addProblem = async (req, res) => {
  try {
    const {
      id,
      title,
      difficulty,
      category,
      description,
      examples,
      constraints,
      starterCode,
      expectedOutput,
    } = req.body;

    // Validation for required fields
    const requiredFields = { id, title, difficulty, category };
    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Missing required ${missingFields.length > 1 ? "fields" : "field"}: ${missingFields.join(", ")}`,
      });
    }

    // Check Duplicate
    const existingProblem = await Problem.findOne({ id });
    if (existingProblem) {
      return res
        .status(409)
        .json({ message: "Problem with this ID already exists" });
    }

    const newProblem = new Problem({
      id,
      title,
      difficulty,
      category,
      description,
      examples,
      constraints,
      starterCode,
      expectedOutput,
    });

    await newProblem.save();

    return res.status(201).json({ message: "Problem added successfully!" });
  } catch (error) {
    logger.error("Error in addProblem controller", { stack: error.stack });
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const updateProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      difficulty,
      category,
      description,
      examples,
      constraints,
      starterCode,
      expectedOutput,
    } = req.body;

    // Validation for required fields
    const requiredFields = { id, title, difficulty, category };
    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Missing required ${missingFields.length > 1 ? "fields" : "field"}: ${missingFields.join(", ")}`,
      });
    }

    const updateProblem = await Problem.findOneAndUpdate(
      { id },
      {
        title,
        difficulty,
        category,
        description,
        examples,
        constraints,
        starterCode,
        expectedOutput,
      },
      { new: true },
    );

    if (!updateProblem) {
      return res.status(404).json({
        message: `Problem with the ID ${id} not found`,
      });
    }

    return res.status(200).json({ message: "Problem updated successfully!" });
  } catch (error) {
    logger.error("Error in updateProblem controller", {
      stack: error.stack,
    });

    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const deleteProblem = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if the problem id exist in the request path
    if (!id) return res.status(400).json({ message: "Problem ID is required" });

    const deletedProblem = await Problem.findOneAndDelete({ id });

    if (!deletedProblem)
      return res
        .status(404)
        .json({ message: `Problem with the ID ${id} not found` });

    return res.status(200).json({
      message: "Problem deleted successfully!",
      data: deletedProblem,
    });
  } catch (error) {
    logger.error("Error in deleteProblem controller", { stack: error.stack });
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
