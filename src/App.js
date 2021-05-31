import React from 'react'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import './App.css'

function App() {
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center' >Memories</Typography>

      </AppBar>
    </Container>
  );
}

export default App;
