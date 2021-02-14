const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include:[
      {
        model: Product,
        attributes: [ 'id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  }).then(allData =>{ res.json(allData)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where:{
      id: req.params.id
    },
    include: [
      {
      model: Product,
      attributes: ['id']
      }
    ]
  }).then(oneData => { res.json(oneData)})
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_Id: req.body.category_Id,
    category_name: req.body.category_name
  }).then(catData => { res.json(catData)
   

  });
});

router.put('/:id', (req, res) =>{ 
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  },
  {
    where: {
      id: req.params.id,
      
    }

  
  }).then (catupdate => { res.json(catupdate)
  })

})

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
    
  }).then(killorder => { res.json(killorder)})
});

module.exports = router;
