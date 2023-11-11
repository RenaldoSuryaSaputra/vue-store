import express from "express";
import {findAll, findOne} from "../controllers/productController.js";

const router = express.Router();

// in
router.route('/').get(findAll)
router.route("/:id").get(findOne);

export default router