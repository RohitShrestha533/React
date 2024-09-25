import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    uid: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("User added successfully!");
        } else {
          alert("Failed to add user.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error connecting to the backend.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>UID:</label>
        <input
          type="text"
          name="uid"
          value={formData.uid}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
