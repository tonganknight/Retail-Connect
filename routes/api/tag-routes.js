const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include:[
      {
        model: Product,
        attributes: ['id','product_name']
      }
    ]
  }).then(findtags => { res.json(findtags)})
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
Tag.findOne({
  where: {
    id: req.params.id
  },
  include: [
    {
      model: Product,
      attributes: ['id', 'product_name']
    }
  ]
}).then(findonetag => {res.json(findonetag)})
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  }).then(newtag => { res.json(newtag)})
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name
  },
  {
    where: {
      id: req.params.id,
    
    }
  

  }).then (tagupdate => { res.json(tagupdate)})
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(killorder => {res.json(killorder)})
});

module.exports = router;
