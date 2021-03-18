const product_controller = require('./../controllers/productController');

module.exports = function(app){
    app.get('/products', product_controller.get_products);
    app.put('/products/:id', product_controller.update_product);
};
