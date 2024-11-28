const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
router.post('/create', itemController.createItem);
router.get('/category/:id', itemController.getItemsByCategory);
router.delete('/delete/:id', itemController.deleteItem);

module.exports = router;