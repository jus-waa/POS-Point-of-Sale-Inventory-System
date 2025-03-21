import express from "express";
import {
    createProduct,
    deleteProduct,
    getProduct,
    getAllProducts,
    updateProduct
} from "../controllers/productController.js"

const router = express.Router();
router.post("/", createProduct);
router.delete("/:product_id", deleteProduct);
router.get("/:product_id", getProduct);
router.get("/", getAllProducts);
router.put("/:product_id", updateProduct);

export default router;