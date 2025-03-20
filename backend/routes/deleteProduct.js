import db from "../db/index.js";
import express from "express";
const router = express.Router();

router.delete('/products/:product_id', async (req, res) => {
    const text = "DELETE FROM products WHERE product_id = $1 returning *"
    const values = [req.params.product_id]
    try {
        const results = await db.query(text, values);
        res.status(204).json({
            status:"success",
            data: {
                deleted_product: results.rows[0]
            }
        });
    } catch (err) {
        console.log(err);
    }
});

export default router;