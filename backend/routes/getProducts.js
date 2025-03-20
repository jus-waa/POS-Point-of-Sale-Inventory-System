import db from "../db/index.js";
import express from "express";
const router = express.Router();

//Get All Products
router.get('/products', async (req, res) => { //req res is route handler
    try {
        const results = await db.query("SELECT * FROM products");
        console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                products: results.rows,
            },
        });
    } catch (err) {
        console.log(err);
    }
});

//Get One Product
router.get('/products/:product_id', async (req, res) => {
    console.log(req.params.product_id);
    const text = "SELECT product_name FROM products WHERE product_id = $1"
    const values = [req.params.product_id]
    try {
        const results = await db.query(text, values);
        // should look like select * from restaurants where id = req.params.id 
        // this is a parametarized query to avoid sql injection
        res.status(200).json({
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