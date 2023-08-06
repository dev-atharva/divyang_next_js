"use client"
import React, { useState } from 'react';

const AddBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        caption: '',
        body: '',
        author: '',
        image_url: '',
      });
    
      const handleAddBlog = (event) => {
        event.preventDefault();
        // Add logic to handle form submission here
        console.log(formData);
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      return (
        <div>
          <form onSubmit={handleAddBlog}>
          <div>
            <label>Title:</label>
            <input type="text" name="name" value={formData.title} onChange={handleChange} />
          </div>
          <div>
            <label>Type:</label>
            <input type="text" name="funding" value={formData.type} onChange={handleChange} />
          </div>
          <div>
            <label>Caption:</label>
            <input type="text" name="type" value={formData.caption} onChange={handleChange} />
          </div>
          <div>
            <label>Body:</label>
            <textarea name="description" value={formData.body} onChange={handleChange} />
          </div>
          <div>
            <label>Author:</label>
            <input type="text" name="beneficiary" value={formData.author} onChange={handleChange} />
          </div>
          <div>
            <label>Image url:</label>
            <textarea name="eligibility" value={formData.image_url} onChange={handleChange} />
          </div>
          <button type="submit">Add Blog</button>
        </form>
        </div>
  );
};

export default AddBlog;