const db = require("../db/queries")

async function getAllCategories(req, res) {
    const categories = await db.getAllCategories()
    res.status(200).json(categories)
}

async function getCategoryById(req, res) {
    const category = await db.getCategoryById(req.params.id)
    res.status(200).json(category)
}

async function createCategory(req, res) {
    const category = await db.createCategory(req.body.name)
    res.status(201).json(category)
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory
}