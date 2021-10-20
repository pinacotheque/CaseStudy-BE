import mongoose from "mongoose"

const { Schema } = mongoose

const ChartSchema = new Schema(
    {
        Added: { type: Boolean, required: true },
    },
    {
        timestamps: true,
    }
)

export default ChartSchema
