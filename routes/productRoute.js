import express from 'express';
import {createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct} from './../controllers/productController.js'

const router = express.Router();

// create new product
router.post("/", createProduct);

// updater product
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deleteProduct);

// get single product
router.get("/:id", getSingleProduct);

// get all product
router.get("/", getAllProducts);


export default router