import { logger } from "../lib/utils.js";
import Problem from "../models/Problem.js";

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

    // Validation
    const requiredFields = { id, title, difficulty, category };
    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (!id || !title || !difficulty || !category) {
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

    await Problem.create({
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

    return res.status(201).json({ message: "Problem added successfully!" });
  } catch (error) {
    logger.error("Error in addProblem controller", {
      stack: error.stack,
    });
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const executeProblem = async (req, res) => {
  try {
    const { language, code } = req.body;

    const languageConfig = LANGUAGE_VERSIONS[language];

    if (!languageConfig) {
      return res
        .status(400)
        .json({ message: `Unsupported language: ${language}` });
    }

    try {
      const response = await http.post();
    } catch (error) {
      console.log(error);
    }

    return res.status(200).json({ message: "Code execution completed" });
  } catch (error) {
    logger.error("Error in executeCodeController", {
      stack: error.stack,
    });
  }
};
