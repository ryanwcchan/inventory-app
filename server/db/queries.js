const pool = require("./pool")

// Category queries

async function getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories")
    return rows
}

async function getCategoryById(id) {
    const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1", [id])
    return rows[0]
}

async function createCategory(name) {
    const { rows } = await pool.query("INSERT INTO categories (name) VALUES ($1) RETURNING *", [name])
    return rows[0]
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

async function createItem(name) {
    const { rows } = await pool.query("INSERT INTO items (name) VALUES ($1) RETURNING *", [name])
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
