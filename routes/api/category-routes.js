const router = require('express').Router();
const { Category, Product } = require('../../models');
const { findByPk } = require('../../models/Product');

// Route to get all categories and their products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [Product]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get the category and its associated products by ID
router.get('/:id', async (req, res) => {
  try {
    const categoryDataById = await Category.findByPk(req.params.id, {
      include: [Product]
    });
    res.status(200).json(categoryDataById);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
