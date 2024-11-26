import React, { useState, useEffect } from "react";

export default function CategoryList({ categories }) {
  if (!categories) return <div>Loading...</div>;
  return (
    <ul className="flex gap-6 items-center justify-center flex-wrap my-[3rem]">
      {categories.map((category) => (
        <li
          key={category.id}
          className="text-2xl hover:text-red-600 cursor-pointer border-2 border-black px-4 py-2"
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}
