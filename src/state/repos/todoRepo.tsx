import { db } from '../../config/fire-conf'
import { ITodoItem } from '../models/types'

const getAll = async () => {
    try {
        const todos: any = []
        const fetchedTodos = await db
            .collection('todos')
            .get()
        
        fetchedTodos.forEach((doc) => {
            const dataObject = {
                id: doc.id,
                ...doc.data(),
            }
            todos.push(dataObject)
        })
        return todos
    } catch (err) {
        throw new Error(err)
    }
}

const add = async (todo: ITodoItem) => {
    try {
        const addedTodo = await db
            .collection('todos')
            .add(todo)
        return { ...todo, id: addedTodo.id }
    } catch (err) {
        throw new Error(err)
    }
}

const update = async (todo: ITodoItem) => {
    try {
        await db
            .collection('todos')
            .doc(todo.id)
            .update({ 
                completed: !todo.completed
            })
    } catch (err) {
        throw new Error(err)
    }
}

const destroy = async (todo: ITodoItem) => {
    try {
        await db
            .collection('todos')
            .doc(todo.id)
            .delete()
    } catch (err) {
        throw new Error(err)
    }
}

const todoRepo = {
    getAll,
    add,
    update,
    destroy,
}

export default todoRepo
