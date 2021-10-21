import mongoose from "mongoose"

const { Schema, model } = mongoose

const ProductSchema = new Schema(
    {
        title: { type: String },
        image: { type: String },
        description: { type: String },
        price: { type: Number },
    },
    { timestamps: true }

)

export default model("Product", ProductSchema)
