const pool = require("./pool")

// Category queries

async function getAllCategories() {
    try {
        const { rows } = await pool.query("SELECT * FROM categories")
        return rows
    } catch (error) {
        console.error("Error fetching categories:", error)
        throw error
    }
    
}

async function getCategoryById(id) {
    try {
        const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1", [id])
        return rows[0]
    } catch (error) {
        console.error("Error fetching category by id:", error)
        throw error
    }
}

async function createCategory(name) {
    try {
        const query = "INSERT INTO categories (name) VALUES ($1) RETURNING *"
        const { rows } = await pool.query(query, [name])
        return rows[0]
    } catch (error) {
        console.error("Error creating category:", error)
        throw error
    }
}

// Item queries

async function getAllItems() {
    const { rows } = await pool.query("SELECT * FROM items")
    return rows
}

async function getItemById(id) {
    const { rows } = await pool.query("SELECT * FROM items WHERE id = $1", [id])
    return rows[0]
}

async function createItem(name, price, category_id, type, expiry_date) {
    const query = "INSERT INTO items (name, price, category_id, type, expiry_date) VALUES ($1, $2, $3, $4, $5) RETURNING *"
    const { rows } = await pool.query(query, [name, price, category_id, type, expiry_date])
    return rows[0]
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    getAllItems,
    getItemById,
    createItem
}
