import express from 'express';

import { 
    getAllProducts,
    createProduct,
    getProdyctById,
    updateProduct,
    deleteProduct
} from '../controllers/Product.js';

const router = express.Router();

router.get('/product', getAllProducts);
router.get('/product/:id', getProductById);
router.post('/product', createProduct);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;