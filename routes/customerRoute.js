import express from 'express';
import {createCustomer, getAllCustomers, getSingleCustomer, updateCustomer, deleteCustomer} from '../controllers/customerController.js'

const router = express.Router();

// create new customer
router.post("/", createCustomer);

// updater customer
router.put("/:id", updateCustomer);

// delete customer
router.delete("/:id", deleteCustomer);

// get single customer
router.get("/:id", getSingleCustomer);

// get all customer
router.get("/", getAllCustomers);


export default router