import { useEffect } from 'react'
import { useStoreState, useStoreActions  } from '../../state/hooks'
import TodoItem from './TodoItem'

const ShowTodos = () => {
    const todos = useStoreState((state) => state.todoModel.items)
    const { initiateTodos } = useStoreActions((action) => action.todoModel)

    useEffect(() => {
        initiateTodos()
    }, [initiateTodos])
    
    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <TodoItem item={todo} />
                </div>
                )
            )}
        </>
    )
}

export default ShowTodos