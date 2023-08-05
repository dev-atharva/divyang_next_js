import mongoose from "mongoose";

const SchemesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  funding: {
    type: String,
    required: [true, "Please provide a funding authority"],
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

const Scheme =mongoose.models.schemes || mongoose.model("schemes", SchemesSchema);

export default Scheme;
