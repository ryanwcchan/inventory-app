const pool = require("./pool")

// Item queries

async function getAllItems() {
    const { rows } = await pool.query(`
        SELECT 
            items.id, 
            items.name, 
            items.price, 
            items.type, 
            items.expiry_date, 
            items.category_id,
            categories.name AS category_name
        FROM items
        JOIN categories ON items.category_id = categories.id
    `);
    return rows
}

async function getItemById(id) {
    const { rows } = await pool.query("SELECT * FROM items WHERE id = $1", [id])
    return rows[0]
}

async function getItemsByCategory(categoryId) {
    const { rows } = await pool.query(`
        SELECT 
        items.id, 
            items.name, 
            items.price, 
            items.type, 
            items.expiry_date, 
            items.category_id,
            categories.name AS category_name
        FROM items 
        JOIN categories ON items.category_id = categories.id
        WHERE category_id = $1
    `, [categoryId])
    return rows
}

async function createItem(name, price, category_id, type, expiry_date) {
    const query = "INSERT INTO items (name, price, category_id, type, expiry_date) VALUES ($1, $2, $3, $4, $5) RETURNING *"
    const { rows } = await pool.query(query, [name, price, category_id, type, expiry_date])
    return rows[0]
}

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    getItemsByCategory
}