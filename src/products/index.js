import { Router } from "express"
import Product from "./schema.js"

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

ProductRouter.post("/", async (req, res, next) => {
    try {
        const newFav = new Product({ ...req.body })
        const { _id } = await newFav.save()
        res.status(201).send({ _id })
    } catch (error) {
        console.log(error)
        next(createError(500, "Error, posting a fav"))
    }
})

ProductRouter.put("/:id", async (req, res, next) => {
    try {
        const Fav = req.params._id
        const deletedFav = await Product.findOneAndUpdate(...req.body)
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