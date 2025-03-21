import db from "../db/index.js";

export const createProduct = async (req, res) => {
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
};

export const deleteProduct = async (req, res) => {
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
};

export const getProduct = async (req, res) => {
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
};

export const getAllProducts = async (req, res) => { //req res is route handler
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
};

export const updateProduct = async (req, res) => {
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
}; 