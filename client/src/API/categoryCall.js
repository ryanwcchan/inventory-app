import axios from "axios";

const BASE_URL =
  `${process.env.DATABASE_URL}/api/categories` ||
  "http://localhost:3000/api/categories";

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export const getCategoryById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching category:", error);
  }
};

export const createCategory = async (name) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/create`, { name });
    return data;
  } catch (error) {
    console.error("Error creating category:", error);
  }
};

export const deleteCategory = async (id) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/delete/${id}`);
    return data;
  } catch (error) {
    console.error("Error deleting category:", error);
  }
};
