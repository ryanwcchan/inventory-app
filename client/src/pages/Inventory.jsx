import React from "react";
import CategoryList from "../components/CategoryList";

export default function Inventory() {
  return (
    <div className="m-[3rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Categories</h1>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Add Category
        </button>
      </div>
      <CategoryList />
    </div>
  );
}
