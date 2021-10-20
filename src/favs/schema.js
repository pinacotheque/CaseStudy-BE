import mongoose from "mongoose"

const { Schema } = mongoose

const FavSchema = new Schema(
    {
        Added: { type: Boolean, required: true },
    },
    {
        timestamps: true,
    }
)

export default FavSchema
