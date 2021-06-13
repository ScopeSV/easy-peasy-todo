import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'

import AddTodo from './AddTodo'
import ShowTodos from './ShowTodos'

const Todos = () => {
    return (
        <>
            <Box mb={2}>
                <AddTodo />
            </Box>
            <Divider />
            <Box my={2}>
                <ShowTodos />
            </Box>
        </>
    )   
}

export default Todos
