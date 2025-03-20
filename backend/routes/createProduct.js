import db from "../db/index.js";
import express from "express";
const router = express.Router();

//Create a new Product
router.post("/products", async (req, res) => {
    console.log(req.body);
    const text = "INSERT INTO products (product_name, category, cost_price, selling_price) VALUES ($1, $2, $3, $4) returning *"
    const values = [req.body.product_name, req.body.category, req.body.cost_price, req.body.selling_price]
    try {
        const results = await db.query(text, values);
        console.log(results);

        res.status(201).json({
            status: "success",
            data: {
                products: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

export default router;