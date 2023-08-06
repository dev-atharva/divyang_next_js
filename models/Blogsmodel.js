import mongoose from "mongoose";

const BlogsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  type: {
    type: String,
    required: [true, "Please provide a type"],
  },
  caption: {
    type: String,
    required: [true, "Please provide a caption"],
  },
  body: {
    type: String,
    required: [true, "Please provide a body"],
  },
  author: {
    type: String,
    required: [true, "Please provide a author"],
  },
  image_url: {
    type: String,
    required: [true, "Please provide a image_url"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogsSchema);
export default Blog;
