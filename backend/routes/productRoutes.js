import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router();


// @desc  Fetch all products
// @route GET /api/products
// @access Fetch all products

router.get('/', asyncHandler(async (req, res)=> {
    const products = await Product.find({})
    res.json(products);
}))

router.get('/:id', asyncHandler(async (req, res) => {
    // try {
    //     const product = await Product.findById(req.params.id);
    //     res.json(product)
        
    // } catch (error) {
    //     res.status(404).json({message:'Prodcut not found'})
    // }

    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({message:'Prodcut not found'})
    }
}))


export default router;