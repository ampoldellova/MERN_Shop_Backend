const Product = require('../models/product')
// const APIFeatures = require('../utils/apiFeatures');


//create new product
exports.newProduct = async (req, res, next) => {
    // req.body.user = req.user.id;
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}

exports.getProducts = async (req, res, next) => {

    const resPerPage = 4;
    const productsCount = await Product.countDocuments();
    const apiFeatures = new APIFeatures(Product.find(), req.query).search()
    // .filter(); 

    // const products = await Product.find();
    apiFeatures.pagination(resPerPage);
    const products = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: products.length,
        productsCount,
        products
    })
}