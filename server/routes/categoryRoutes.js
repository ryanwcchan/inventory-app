const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/create', categoryController.createCategory);
router.delete('/delete/:id', categoryController.deleteCategory);

module.exports = router;