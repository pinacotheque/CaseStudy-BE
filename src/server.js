import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import FavRouter from './favs/index.js'
import mongoose from 'mongoose'


const server = express();


const port = process.env.PORT

mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })

server.use(cors());
server.use(express.json());


server.use("/favourites", FavRouter)


console.table(listEndpoints(server))

server.listen(port, () => console.log(" Server is running on port : ", port));

server.on("error", (error) =>
    console.log(` Server is not running due to : ${error}`)
);