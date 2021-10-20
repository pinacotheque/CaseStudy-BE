import { Router } from "express"

const FavRouter = Router()

FavRouter.get("/", async (req, res, next) => {
    try {
        const query = q2m(req.query)
        const { total, users } = await UserModel.findUsers(query)
        res.send({ links: query.links("/users", total), total, users })
    } catch (error) {
        console.log(error)
        next(createError(500, "Error, getting with favs"))
    }
})

export default FavRouter