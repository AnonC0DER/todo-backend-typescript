import { 
    RequestHandler, 
    Request, 
    Response, 
    NextFunction
} from "express"

import Todo from "../models/todos"


export const getTodo: RequestHandler = async (request: Request, response: Response, next: NextFunction) => {
    try {
        var todos = await Todo.find({})
        return response
            .status(200)
            .json({ todos: todos })
    } catch (error) {
        return response
            .status(500)
            .json({ error: error.message })
    }
}