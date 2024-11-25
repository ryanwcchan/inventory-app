const db = require("../db/queries")

async function getAllItems(req, res) {
    const items = await db.getAllItems()
    res.status(200).json(items)
}

async function getItemById(req, res) {
    const item = await db.getItemById(req.params.id)
    res.status(200).json(item)
}

async function createItem(req, res) {
    const item = await db.createItem(req.body.name)
    res.status(201).json(item)
}

module.exports = {
    getAllItems,
    getItemById,
    createItem
}