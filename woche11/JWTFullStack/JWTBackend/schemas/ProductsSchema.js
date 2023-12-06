import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
name: String,
description: String
})

const product = mongoose.model("product", ProductSchema)
export default product