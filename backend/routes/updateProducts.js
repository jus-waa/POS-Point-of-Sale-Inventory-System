import db from "../db/index.js";
import express from "express";
const router = express.Router();

//Update Products
router.put('/products/:product_id', async (req, res) => {
    const text = "UPDATE products SET product_name = $1, category = $2, cost_price = $3, selling_price = $4 WHERE product_id = $5 returning *"
    const values = [req.body.product_name, req.body.category, req.body.cost_price, req.body.selling_price, req.params.product_id]
    try {
        const results = await db.query(text, values);
        res.status(200).json({
            status: "success",
            data: {
                products: results.rows[0]
            }
        });
    } catch (err) {
        console.log(err);
    }
});

export default router;