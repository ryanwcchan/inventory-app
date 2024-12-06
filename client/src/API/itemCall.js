import axios from "axios";

const BASE_URL =
  `${process.env.DATABASE_URL}/api/items` || "http://localhost:3000/api/items";

export const getAllItems = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    return data;
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};

export const getItemById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching item:", error);
  }
};

export const getItemsByCategory = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/category/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching items by category:", error);
  }
};

export const createItem = async (
  name,
  price,
  category_id,
  type,
  expiry_date,
  date_created
) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/create`, {
      name,
      price,
      category_id,
      type,
      expiry_date,
      date_created,
    });
    return data;
  } catch (error) {
    console.error("Error creating item:", error);
  }
};

export const deleteItem = async (id) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/delete/${id}`);
    return data;
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};
