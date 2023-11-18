const express = require('express');
const router = express.Router();
const upload = require('../utils/multer')

const { newProduct, getProducts, getSingleProduct, updateProduct, deleteProduct, getAdminProducts, productSales } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.get('/products', getProducts)
router.get('/product/:id', getSingleProduct);
router.get('/admin/products', isAuthenticatedUser, authorizeRoles('admin',), getAdminProducts);
router.route('/admin/product/:id', isAuthenticatedUser, authorizeRoles('admin',)).put(updateProduct).delete(deleteProduct);
router.post('/admin/product/new', isAuthenticatedUser, upload.array('images', 10), newProduct);

router.get('/admin/product-sales', productSales);

module.exports = router;