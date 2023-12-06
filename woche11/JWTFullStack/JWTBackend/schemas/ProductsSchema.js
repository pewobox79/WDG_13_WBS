import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
name: String,
description: String
})

const Product = mongoose.model("product", ProductSchema)
export default Product