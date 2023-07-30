import express from 'express';
import {createitem, getAllItems, getSingleitem, updateItem} from './../controllers/itemController.js'

const router = express.Router();

// create new orders
router.post("/", createitem);

// updater orders
router.put("/:id", updateItem);

// delete orders
// router.delete("/:id", deleteOrder);

// get single orders
router.get("/:id", getSingleitem);

// get all orders
router.get("/", getAllItems);


export default router