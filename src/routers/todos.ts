import { Router } from "express"

import { createTodo, getTodo, updateToDo } from "../controllers/todos"

const router = Router()
router.get("/todos", getTodo)
router.post("/todos", createTodo)
router.patch("/todos/:id", updateToDo)

export default router