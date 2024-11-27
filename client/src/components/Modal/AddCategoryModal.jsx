import RedButton from "../Buttons/RedButton";
import { useState } from "react";
import { createCategory } from "../../API/categoryCall";

export default function AddCategoryModal({ onAddCategory }) {
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const newCategory = await createCategory(categoryName);
      onAddCategory(newCategory);
    } catch (err) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mx-2">
      <h1 className="text-3xl font-bold">Add New Category</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-4 my-4"
      >
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 border-black px-2"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white 
            font-bold py-2 px-4 rounded cursor-pointer select-none"
          disabled={loading}
        >
          Add
        </button>
      </form>
    </div>
  );
}
