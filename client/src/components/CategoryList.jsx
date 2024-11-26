import React, { useState, useEffect } from "react";

export default function CategoryList({ categories, deleteMode, handleDelete }) {
  if (!categories) return <div>Loading...</div>;

  return (
    <ul className="flex gap-6 items-center flex-wrap my-[3rem]">
      {categories.map((category) => (
        <li
          key={category.id}
          className="text-2xl hover:text-red-600 cursor-pointer 
          border-2 border-black px-4 py-2 select-none"
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
