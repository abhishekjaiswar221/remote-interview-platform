import mongoose from "mongoose";

// Description Schema
const descriptionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  notes: [{ type: String }],
});

// Example Schema
const exampleSchema = new mongoose.Schema({
  input: { type: String, required: true },
  output: { type: String, required: true },
  explanation: { type: String },
});

// Starter Code Schema
const starterCodeSchema = new mongoose.Schema({
  javascript: { type: String },
  python: { type: String },
  java: { type: String },
});

// Expected Output Schema
const expectedOutputSchema = new mongoose.Schema({
  javascript: { type: String },
  python: { type: String },
  java: { type: String },
});

const problemSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    description: descriptionSchema,

    examples: [exampleSchema],

    constraints: [{ type: String }],

    starterCode: starterCodeSchema,

    expectedOutput: expectedOutputSchema,
  },
  { timestamps: true },
);

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
