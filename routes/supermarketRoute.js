import express from 'express';
import {createSupermarket, getAllSupermarkets, getSinggleSupermarket, updateSupermarket, deleteSupermarket} from './../controllers/supermarketController.js'

const router = express.Router();

// create new supermarkets
router.post("/", createSupermarket);

// updater supermarkets
router.put("/:id", updateSupermarket);

// delete supermarkets
router.delete("/:id", deleteSupermarket);

// get single supermarkets
router.get("/:id", getSinggleSupermarket);

// get all supermarkets
router.get("/", getAllSupermarkets);


export default router