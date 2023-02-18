import { Router } from "express"

import { 
    createTodo, 
    deleteToDo, 
    getTodos, 
    getTodo, 
    updateToDo 
} from "../controllers/todos"

const router = Router()
router.get("/todos", getTodos)
router.post("/todos", createTodo)
router.get("/todos/:id", getTodo)
router.patch("/todos/:id", updateToDo)
router.delete("/todos/:id", deleteToDo)

export default router