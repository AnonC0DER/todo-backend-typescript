import { Router } from "express"

import { createTodo, deleteToDo, getTodo, updateToDo } from "../controllers/todos"

const router = Router()
router.get("/todos", getTodo)
router.post("/todos", createTodo)
router.patch("/todos/:id", updateToDo)
router.delete("/todos/:id", deleteToDo)

export default router