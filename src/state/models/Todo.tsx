import { action, thunk } from 'easy-peasy'
import todoRepo from '../repos/todoRepo'
import { ITodoModel } from './types'

const todoModel: ITodoModel = {
    items: [],
    initiatedTodos: action((state, payload) => {
        state.items = payload
    }),
    initiateTodos: thunk(async (actions) => {
       const res = await todoRepo.getAll() 
        actions.initiatedTodos(res)
    }),
    addedTodo: action((state, todo) => {
        state.items.push(todo)
    }),
    addTodo: thunk(async (actions, payload) => {
        const res = await todoRepo.add(payload)
        actions.addedTodo(res)
    }),
    completedTodo: action((state, payload) => {
        state.items = state.items.map((storedTodo) => {
            if (storedTodo.id === payload.id) {
                storedTodo.completed = !payload.completed
            }
            return storedTodo
        })
    }),
    completeTodo: thunk(async (actions, payload) => {
        try {
            await todoRepo.update(payload)
            actions.completedTodo(payload)
        } catch (err) {
            throw new Error(err)
        }
    }),
    deletedTodo: action((state, payload) => {
        state.items = state.items.filter((todo) => todo.id !== payload.id)
    }),
    deleteTodo: thunk(async (actions, payload) => {
        try {
            await todoRepo.destroy(payload)
            actions.deletedTodo(payload)
        } catch (err) {
            throw new Error(err)
        }
    }),
}
export default todoModel
