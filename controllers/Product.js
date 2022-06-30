import Product from '../models/productModel.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    }catch (err) {
        res.json({message: err.message});
    }
}

export const getProdyctById = async (req, res) => {
    try{
        const product = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(product[0]);
    }catch (err) {
        res.json({message: err.message});
    }
}

export const createProduct = async (req, res) => {
    try{
        await Poduct.create(req.body);
        res.json({
            'message' : 'product created'
        });
    }catch (err) {
        res.json({message: err.message});
    }
}

export const updateProduct = async (req, res) => {
    try{
        await Poduct.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            'message': 'product updated'
        });
    }catch (err) {
        res.json({message: err.message});
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Poduct.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            'message' : 'product deleted'
        });
    }catch (err) {
        res.json({message: err.message});
    }
}