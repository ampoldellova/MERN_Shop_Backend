const express = require('express');
const router = express.Router();

const {getProducts,newProduct, getSingleProduct, updateProduct, deleteProduct} = require('../controllers/productController');

router.get('/products', getProducts)
router.post('/product/new', newProduct)

module.exports = router;