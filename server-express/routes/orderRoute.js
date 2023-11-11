import express from "express";
import {
   findCart,
   addToCart,
   removeFromCart,
} from "../controllers/orderController.js";

const router = express.Router();

// in
router.route("/user/:id").get(findCart);
router.route("/update/user/:id").post(addToCart); // {product: "123"}
router.route("/delete/user/:id/product/:code").delete(removeFromCart);

export default router;
