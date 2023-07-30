import express from 'express';
import {createOrder, getAllOrders, getSingleOrder, updateOrders, deleteOrder} from './../controllers/orderController.js'

const router = express.Router();

// create new orders
router.post("/", createOrder);

// updater orders
router.put("/:id", updateOrders);

// delete orders
router.delete("/:id", deleteOrder);

// get single orders
router.get("/:id", getSingleOrder);

// get all orders
router.get("/", getAllOrders);


export default router