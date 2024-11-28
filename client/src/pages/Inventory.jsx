import React from "react";
import CategoryList from "../components/List/CategoryList";
import AddCategoryModal from "../components/Modal/AddCategoryModal";
import RedButton from "../components/Buttons/RedButton";
import Modal from "../components/Modal/Modal";
import ConfirmationModal from "../components/Modal/ConfirmationModal";
import { useState, useEffect } from "react";
import { getAllCategories, deleteCategory } from "../API/categoryCall";

export default function Inventory() {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [deleteMode, setDeleteMode] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [categoryDeleteId, setCategoryDeleteId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingMsg, setLoadingMsg] = useState("Loading Categories...");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        if (data) {
          setCategories(data);
          setLoading(false);
          setError(null);
        } else {
          setLoadingMsg("Failed to fetch categories.");
        }
      } catch (error) {
        console.log("Error fetching categories:", error);
        setError("Failed to load categories. Please try again later.");
        setCategories([]);
      }
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
      {error && <p className="text-red-500">{error}</p>}
      {loading && !error ? (
        <p>{loadingMsg}</p>
      ) : (
        <CategoryList
          categories={categories}
          deleteMode={deleteMode}
          handleDelete={triggerDelete}
        />
      )}

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <AddCategoryModal onAddCategory={handleAddCategory} />
      </Modal>
      <ConfirmationModal
        isOpen={confirmModal}
        onClose={() => handleCancel()}
        onConfirm={() => handleDeleteCategory(categoryDeleteId)}
        title={`Are you sure you want to delete "${
          categories && categoryDeleteId
            ? categories.find((category) => category.id === categoryDeleteId)
                ?.name || ""
            : ""
        }" category?`}
        message={
          "This will delete all items in this category. This action cannot be undone."
        }
      />
    </div>
  );
}
