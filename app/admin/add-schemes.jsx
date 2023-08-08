import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const AddScheme = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    beneficiary: "",
    eligiblity: "",
  });

  const handleAddScheme = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post(`/api/schemes`, formData);
      setFormData({
        name: "",
        type: "",
        description: "",
        beneficiary: "",
        eligiblity: "",
      });
      toast.success("Schemes data added");
    } catch (error) {
      toast.error(error.message);
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
    <div className="flex flex-col items-center justify-center gap-3 text-center p-4">
      <Toaster />
      <form
        onSubmit={handleAddScheme}
        className="w-[30vw] mx-auto bg-white p-6 rounded-lg shadow-md flex flex-col gap-2"
      >
        <input
          placeholder="Enter the name"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          placeholder="Enter the type"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
        />
        <textarea
          placeholder="Enter the description"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          placeholder="Enter the beneficiary"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          type="text"
          name="beneficiary"
          value={formData.beneficiary}
          onChange={handleChange}
        />
        <textarea
          placeholder="Enter the eliglibity"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          name="eligiblity"
          value={formData.eligiblity}
          onChange={handleChange}
        />
        <button
          className="bg-rose-500 text-white py-2 px-4 rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500"
          type="submit"
        >
          Add Scheme
        </button>
      </form>
    </div>
  );
};

export default AddScheme;
