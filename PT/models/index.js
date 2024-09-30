const Product = require("./Product");
const Category = require("./Category");
const Client = require("./Client");
const Order = require("./Order");

Category.hasMany(Product, { foreignKey: "categoryId" });
Product.belongsTo(Category, { foreignKey: "categoryId" });

Client.hasMany(Order, { foreignKey: "clientId" });
Order.belongsTo(Client, { foreignKey: "clientId" });

module.exports = {
  Product,
  Category,
  Client,
  Order,
};
