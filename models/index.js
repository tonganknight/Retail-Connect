// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_Id"
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_Id'
})

// Products belongToMany Tags (through ProductTag)
Product.hasMany(Tag, {
  through: ProductTag,
  as: 'tags',
  foreignKey: 'product_Id'
})

// Tags belongToMany Products (through ProductTag)
Tag.hasMany(Product, {
  through: ProductTag,
  foreignKey: 'product_Id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
