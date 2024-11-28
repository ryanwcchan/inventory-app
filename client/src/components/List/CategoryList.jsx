import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryList({ categories, deleteMode, handleDelete }) {
  const navigate = useNavigate();

  // if (!Array.isArray(categories) || categories.length === 0)
  //   return <div>Loading...</div>;

  return (
    <ul className="flex gap-6 items-center flex-wrap my-[3rem]">
      {categories.map((category) => (
        <li
          key={category.id}
          className="text-2xl hover:text-red-600 cursor-pointer 
          border-2 border-black px-4 py-2 select-none"
          onClick={() => {
            if (deleteMode) {
              handleDelete(category.id);
            } else {
              navigate(`/inventory/${category.id}`, {
                state: { categories },
              });
            }
          }}
        >
          {category.name}
          {deleteMode && (
            <button
              className="text-red-600 hover:text-red-800 ml-2 font-bold"
              onClick={() => handleDelete(category.id)}
            >
              &times;
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
