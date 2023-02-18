import * as express from "express"
import mongoose, { ConnectOptions } from "mongoose";
import { json, urlencoded } from "body-parser"

import todoRoutes from "./routers/todos"

const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))
app.use("/api", todoRoutes)
app.use((
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        res.status(500).json({ message: err.message })
    }
)

mongoose.connect(process.env.MONGO_HOST, { autoIndex: true } as ConnectOptions)
    .then((db) => {
        console.log("Database Connected Successfuly.")
    })
    .catch((err) => {
        console.log(err)
})
    
app.listen(3000)