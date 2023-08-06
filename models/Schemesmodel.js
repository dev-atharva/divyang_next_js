import mongoose from "mongoose";

const SchemesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  type: {
    type: String,
    required: [true, "Please provide a type of scheme"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  beneficiary: {
    type: [String],
  },
  eligiblity: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Scheme =
  mongoose.models.Scheme || mongoose.model("Scheme", SchemesSchema);

export default Scheme;
