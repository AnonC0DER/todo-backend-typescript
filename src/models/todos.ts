import mongoose from "mongoose"

export interface TodoModel {
    title: {
        type: String,
        required: true
    }
    description: {
        type: String,
        required: true
    }
}


const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})


type TodoType = TodoModel & mongoose.Document
const Todo: mongoose.Model <TodoType> = mongoose.model <TodoType> ("Todo", TodoSchema)

export default Todo