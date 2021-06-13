import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { ITodoItem } from '../../state/models/types'
import { useStoreActions } from '../../state/hooks'

interface Props {
    item: ITodoItem
}

const TodoItem = ({ item, }: Props) => {
    const { completeTodo, deleteTodo } = useStoreActions((action) => action.todoModel)
    
    return (
        <Box my={1}>
            <Paper
                variant='outlined'
            >
                <Box >
                    <Grid container justify='space-between'>
                        <Grid item>
                            <Box p={1}>
                                {item.completed ? <del>{item.name}</del> : item.name}
                            </Box>
                        </Grid>
                        <Grid item>
                            <Button
                                variant='contained'
                                color={item.completed ? 'default' : 'primary'}
                                onClick={() => completeTodo(item)}
                            >
                                {item.completed ? 'Undo' : 'Complete'}
                            </Button>
                            {item.completed &&
                            <Button
                                variant='contained'
                                color='secondary'
                                onClick={() => deleteTodo(item)}
                            >
                                X
                            </Button>
                            }
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    )
}

export default TodoItem
