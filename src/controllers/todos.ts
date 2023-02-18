import { 
    RequestHandler, 
    Request, 
    Response, 
    NextFunction
} from "express"

import Todo, { TodoModel } from "../models/todos"


export const getTodo: RequestHandler = async (request: Request, response: Response, next: NextFunction) => {
    try {
        var todos = await Todo.find({})
        var count: number = await Todo.countDocuments()
        return response
            .status(200)
            .json({ count: count ,todos: todos })
    } catch (error) {
        return response
            .status(500)
            .json({ error: error.message })
    }
}


export const createTodo: RequestHandler = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const data: TodoModel = request.body
        console.log("Data", data)
        var todo = await Todo.create(data)
        return response
            .status(201)
            .json({ message: "Todo created successfully", data: todo })
    } catch (error) {
        return response
            .status(500)
            .json({ error: error.message })
    }
}


export const updateToDo: RequestHandler = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = request.params
        var todo = await Todo.findByIdAndUpdate(id, request.body, {new: true})
        return response
            .status(202)
            .json({ message: "Todo updated successfully", data: todo })
    } catch (error) {
        return response
            .status(500)
            .json({ error: error.message })
    }
}


export const deleteToDo: RequestHandler = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = request.params
        var isDeleted = await Todo.findByIdAndDelete(id)
        if ( !isDeleted ) throw new Error("Failed to delete Todo")
        return response
            .status(202)
            .json({ message: "Todo deleted successfully", todo_id: id })
    } catch (error) {
        response
            .status(500)
            .json({ error: error.message })
    }
}