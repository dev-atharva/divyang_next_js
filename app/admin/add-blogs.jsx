"use client";
import axios from "axios";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const AddBlog = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    caption: "",
    body: "",
    author: "",
    image_url: "",
  });

  const handleAddBlog = async (event) => {
    event.preventDefault();
    try {
      const formData1 = new FormData();
      formData1.append("file", selectedFile);
      formData1.append("upload_preset", "qhbxrfjg");
      const response_cloudinary = await fetch(
        `https://api.cloudinary.com/v1_1/dcyo1ji8f/image/upload`,
        {
          method: "POST",
          body: formData1,
        }
      );
      const data = await response_cloudinary.json();

      let sample_doc = {
        title: formData.title,
        type: formData.type,
        caption: formData.caption,
        author: formData.author,
        body: formData.body,
        image_url: data.secure_url,
      };
      console.log(sample_doc);
      const response = await axios.post("/api/blogs", sample_doc);
      setFormData({
        title: "",
        type: "",
        caption: "",
        body: "",
        author: "",
        image_url: "",
      });
      toast.success("Added blog");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="p-4">
      <Toaster />
      <form
        onSubmit={handleAddBlog}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Caption:
          </label>
          <input
            type="text"
            name="caption"
            value={formData.caption}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Type:
          </label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Body:
          </label>
          <input
            type="text"
            name="body"
            value={formData.body}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Author:
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image:
          </label>
          <input
            type="file"
            name="image_url"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
