import React from "react";
import CategoryList from "../components/CategoryList";
import AddCategoryModal from "../components/AddCategoryModal";
import RedButton from "../components/RedButton";
import Modal from "../components/Modal";
import ConfirmationModal from "../components/ConfirmationModal";
import { useState, useEffect } from "react";
import { getAllCategories, deleteCategory } from "../API/categoryCall";

export default function Inventory() {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [deleteMode, setDeleteMode] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [categoryDeleteId, setCategoryDeleteId] = useState(null);

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

  const handleDeleteCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId);
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category.id !== categoryId)
      );
    } catch (error) {
      console.error("Error deleting category:", error);
    }
    setConfirmModal(false);
  };

  const triggerDelete = (categoryId) => {
    setConfirmModal(true);
    setCategoryDeleteId(categoryId);
  };

  const handleCancel = () => {
    setConfirmModal(false);
    setCategoryDeleteId(null);
  };

  return (
    <div className="m-[3rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Categories</h1>
        <div className="flex gap-4">
          <RedButton
            func={() => {
              console.log("clicked");
              setShowModal(true);
            }}
          >
            Add
          </RedButton>
          <RedButton
            func={() => {
              setDeleteMode(!deleteMode);
            }}
          >
            Delete
          </RedButton>
        </div>
      </div>
      <CategoryList
        categories={categories}
        deleteMode={deleteMode}
        handleDelete={triggerDelete}
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <AddCategoryModal onAddCategory={handleAddCategory} />
      </Modal>
      <ConfirmationModal
        isOpen={confirmModal}
        onClose={() => handleCancel()}
        onConfirm={() => handleDeleteCategory(categoryDeleteId)}
        title={"Are you sure you want to delete this category?"}
        message={
          "This will delete all items in this category. This action cannot be undone."
        }
      />
    </div>
  );
}
