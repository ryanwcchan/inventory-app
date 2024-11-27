import React from "react";
import { useState } from "react";
import { createItem } from "../../API/itemCall";

export default function AddItemModal({ categories, categoryId, onItemAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    itemPrice: "",
    category_id: `${categoryId}`,
    type: "",
    expiry_date: "",
    date_created: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value || null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newItem = await createItem(
        formData.name,
        formData.itemPrice,
        formData.category_id,
        formData.type,
        formData.expiry_date || null,
        formData.date_created
      );
      onItemAdded(newItem);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mx-6">
      <h1 className="text-3xl font-bold">Add New Item</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-4 my-4"
      >
        <div className="flex flex-col w-full max-w-md">
          <label htmlFor="name">Name: </label>
          <input
            className="border-2 border-black px-2"
            type="text"
            name="name"
            id="name"
            placeholder="Item Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full max-w-md">
          <label htmlFor="itemPrice">Price: </label>
          <input
            className="border-2 border-black px-2"
            type="text"
            name="itemPrice"
            id="itemPrice"
            placeholder="Item Price"
            required
            value={formData.itemPrice}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col w-full max-w-md">
          <label htmlFor="categoryId">Category: </label>
          <select
            className="border-2 border-black px-2"
            name="category_id"
            id="category"
            required
            value={formData.category_id}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-full max-w-md">
          <label htmlFor="type">Type: </label>
          <input
            className="border-2 border-black px-2"
            type="text"
            name="type"
            id="type"
            placeholder="Item Type"
            required
            value={formData.type}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col w-full max-w-md">
          <label htmlFor="expiryDate">Expiry Date: </label>
          <input
            className="border-2 border-black px-2"
            type="date"
            name="expiry_date"
            id="expiryDate"
            value={formData.expiry_date}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white 
            font-bold py-2 px-4 rounded cursor-pointer select-none"
          // disabled={loading}
        >
          Add
        </button>
      </form>
    </div>
  );
}
