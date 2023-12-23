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

// Route to create new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    return res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to update tag based on ID
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update( 
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id,
        }
      });
    return res.status(200).json("{message: Tag data is updated}");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to delete tag data based on ID
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      }
      });
    res.status(200).json("{message:Deleted tag data}")
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
