import { createStore } from 'easy-peasy'
import todoModel from './models/Todo'
import { IStoreModel } from './models/types'

const storeModel: IStoreModel = {
    todoModel,
}

const store = createStore(storeModel)

export default store
