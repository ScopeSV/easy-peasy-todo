import { Action, Thunk } from 'easy-peasy'

export interface ITodoItem {
    id?: any 
    name: string
    completed: boolean
}

export interface ITodoModel {
    items: ITodoItem[],
    initiatedTodos: Action<ITodoModel, ITodoItem[]>
    initiateTodos: Thunk<ITodoModel>
    addedTodo: Action<ITodoModel, ITodoItem>
    addTodo: Thunk<ITodoModel, ITodoItem>
    completedTodo: Action<ITodoModel, ITodoItem>
    completeTodo: Thunk<ITodoModel, ITodoItem>
    deletedTodo: Action<ITodoModel, ITodoItem>
    deleteTodo: Thunk<ITodoModel, ITodoItem>
}

export interface IStoreModel {
    todoModel: ITodoModel
}
