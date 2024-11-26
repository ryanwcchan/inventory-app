const db = require("../db/queries")

async function getAllItems(req, res) {
    try {
        const items = await db.getAllItems()
        res.status(200).json(items)
    } catch (error) {
        console.error("Error fetching items:", error)
        res.status(500).json({ message: "Error fetching items" })
    }
}

async function getItemById(req, res) {
    try {
        const item = await db.getItemById(req.params.id)
        if (!item) {
            res.status(404).json({ message: "Item not found" })
        } else {
            res.status(200).json(item)
        }
    } catch (error) {
        console.error("Error fetching item:", error)
        res.status(500).json({ message: "Error fetching item" })
    }
}

async function createItem(req, res) {
    const { name, price, category_id, type, expiry_date } = req.body;
    try {
        const item = await db.createItem(name, price, category_id, type, expiry_date);
        res.status(201).json(item);
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getAllItems,
    getItemById,
    createItem
}