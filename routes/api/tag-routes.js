const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Route to get all Tags and its associated products
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: {model: Product, through:ProductTag}
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get Tag details by ID
router.get('/:id', async (req, res) => {
  try {
    const tagDataById = await Tag.findByPk(req.params.id, {
      include: {
        model: Product,
        through: ProductTag,
      }
    });
    res.status(200).json(tagDataById);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
