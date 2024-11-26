const db = require("../db/queries")

async function getAllCategories(req, res) {
    try {
        const categories = await db.getAllCategories()
        res.status(200).json(categories)
    } catch (error) {
        console.error("Error fetching categories:", error)
        res.status(500).json({ message: "Error fetching categories" })
    }
}

async function getCategoryById(req, res) {
    try {
        const category = await db.getCategoryById(req.params.id)
        if (!category) {
            res.status(404).json({ message: "Category not found" })
        } else {
            res.status(200).json(category)
        }
    } catch (error) {
        console.error("Error fetching category:", error)
        res.status(500).json({ message: "Error fetching category" })
    }
}

async function createCategory(req, res) {
    const { name } = req.body
    try {
        const category = await db.createCategory(name)
        res.status(201).json(category)
    } catch (error) {
        console.error("Error creating category:", error)
        res.status(500).json({ message: "Error creating category" })
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory
}