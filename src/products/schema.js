import mongoose from "mongoose"

const { Schema, model } = mongoose

const ProductSchema = new Schema(
    {
        liked: { type: Boolean, required: false },
        id: { type: Number, required: false }
    }
)

export default model("Product", ProductSchema)
