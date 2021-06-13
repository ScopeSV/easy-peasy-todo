import React from 'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Todos from './modules/todos/Todos'

import './App.css';


const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <div className='main'>
                <Container>
                    <Grid container justify='center'>
                        <Grid item md={6}>
                            <Todos />
                        </Grid>
                    </Grid>
                </Container>

            </div>
        </ThemeProvider>


    </div>
  );
}

export default App;
