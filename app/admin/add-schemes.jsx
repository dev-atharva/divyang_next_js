import React, { useState } from 'react';

const AddScheme = () => {

  const [formData, setFormData] = useState({
    name: '',
    funding: '',
    type: '',
    description: '',
    beneficiary: '',
    eligibility: '',
  });

  const handleAddScheme = (event) => {
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
      <form onSubmit={handleAddScheme}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Funding:</label>
        <input type="text" name="funding" value={formData.funding} onChange={handleChange} />
      </div>
      <div>
        <label>Type:</label>
        <input type="text" name="type" value={formData.type} onChange={handleChange} />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </div>
      <div>
        <label>Beneficiary:</label>
        <input type="text" name="beneficiary" value={formData.beneficiary} onChange={handleChange} />
      </div>
      <div>
        <label>Eligibility:</label>
        <textarea name="eligibility" value={formData.eligibility} onChange={handleChange} />
      </div>
      <button type="submit">Add Scheme</button>
    </form>
    </div>
  );
};

export default AddScheme;