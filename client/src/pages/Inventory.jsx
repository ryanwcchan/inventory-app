import React from "react";
import CategoryList from "../components/CategoryList";
import AddCategoryModal from "../components/AddCategoryModal";
import RedButton from "../components/RedButton";
import Modal from "../components/Modal";
import { useState, useEffect } from "react";
import { getAllCategories } from "../API/categoryCall";

export default function Inventory() {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleAddCategory = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
    setShowModal(false);
  };

  return (
    <div className="m-[3rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Categories</h1>
        <RedButton
          func={() => {
            console.log("clicked");
            setShowModal(true);
          }}
        >
          Add Category
        </RedButton>
      </div>
      <CategoryList categories={categories} />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <AddCategoryModal onAddCategory={handleAddCategory} />
      </Modal>
    </div>
  );
}
