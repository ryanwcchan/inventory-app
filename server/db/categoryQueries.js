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

async function deleteCategory(id) {
    try {
        const query = "DELETE FROM categories WHERE id = $1 RETURNING *"
        const { rows } = await pool.query(query, [id])
        return rows[0]
    } catch (error) {
        console.error("Error deleting category:", error)
        throw error
    }
}


module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    deleteCategory
}
