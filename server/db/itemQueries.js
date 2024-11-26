const pool = require("./pool")

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
    getAllItems,
    getItemById,
    createItem
}