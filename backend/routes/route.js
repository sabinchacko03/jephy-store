const express = require('express');
const router = express.Router();

const product_controller = require('./../controllers/productController.js');

router.get('/products', product_controller.get_products);
router.put('/products/:id', product_controller.update_product)

module.exports = router;