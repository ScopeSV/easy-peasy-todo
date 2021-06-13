import { useState } from 'react'
import { useStoreActions } from '../../state/hooks'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    focused: {
        borderColor: 'fff',
    },
    label: {
        color: '#999999'
    },
    input: {
        color: "white"
    },
    outline: {
        color: '#999999',
    },
}));

const AddTodo = () => {
    const classes = useStyles()
    const [todoInput, setTodoInput] = useState<string>('')
    const { addTodo } = useStoreActions((action) => action.todoModel)
    
    
    const handleTodoSubmit = (e: any) => {
        e.preventDefault()
        
        addTodo({
            name: todoInput,
            completed: false,
        })
        
        setTodoInput('')
    }
    
    return (
        <>
            <form onSubmit={handleTodoSubmit}>
                <Grid container justify='space-evenly'>
                    <Grid item md={9}>
                        <TextField
                            variant='outlined'
                            fullWidth
                            label='Todo'
                            className={classes.focused}
                            InputProps={{className: classes.input}}
                            InputLabelProps={{className: classes.label}}
                            size='small'
                            value={todoInput}
                            onChange={({ target }) => setTodoInput(target.value)}
                        />
                    </Grid>
                    <Grid item md={1}>
                        <Button
                            variant='contained'
                            color='primary'
                            type='submit'
                        >
                            Add
                        </Button>
                    </Grid>
            </Grid>
        </form>
        </>
    )
}

export default AddTodo
