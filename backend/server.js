import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import getProducts from "./routes/getProducts.js";
import createProduct from "./routes/createProduct.js";
import updateProducts from "./routes/updateProducts.js";
import deleteProduct from "./routes/deleteProduct.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

//Get All Products
app.use("/api/v1", getProducts); 
//Create a new Product
app.use("/api/v1", createProduct);
//Update Product
app.use("/api/v1", updateProducts);
//Delete a Product
app.use("/api/v1", deleteProduct);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
