import { Router } from "express"
import Product from "./schema.js"
import createError from "http-errors"


const ProductRouter = Router()

ProductRouter.get("/", async (req, res, next) => {
    try {
        const favs = await Product.find()
        res.send(favs)
    } catch (error) {
        console.log(error)
        next(createError(500, "Error, getting with favs"))
    }
})

ProductRouter.post("/:id", async (req, res, next) => {
    try {
        await Product.findOneAndUpdate(req.params.id, {
            liked: true,
        })
        res.status(201).send("liked")
    } catch (error) {
        console.log(error)
        next(createError(500, "Error, posting a fav"))
    }
})

ProductRouter.put("/:id", async (req, res, next) => {
    try {
        const deletedFav = await Product.findOneAndUpdate(req.params.id, {
            liked: false,
        })
        if (deletedFav) {
            res.status(204).send()
        } else {
            next(createError(404, 'Product not found!'))
        }
    } catch (error) {
        console.log(error)
        next(createError(500, "Error, deleting the fav"))
    }
})



export default ProductRouter