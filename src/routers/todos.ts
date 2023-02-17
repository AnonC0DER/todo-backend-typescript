import { Router } from "express"

import { getTodo } from "../controllers/todos"

const router = Router()
router.get("/", getTodo)

export default router