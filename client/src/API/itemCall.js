import axios from "axios";

const BASE_URL = "http://localhost:3000/api/items";

export const getAllItems = async () => {
    try {
        const { data } = await axios.get(BASE_URL);
        return data;
    } catch (error) {
        console.error("Error fetching items:", error);
    }
}

export const getItemById = async (id) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${id}`);
        return data;
    } catch (error) {
        console.error("Error fetching item:", error);
    }
}

export const createItem = async (name, price, category_id, type, expiry_date) => {
    try {
        const { data } = await axios.post(BASE_URL, { name, price, category_id, type, expiry_date });
        return data;
    } catch (error) {
        console.error("Error creating item:", error);
    }
}