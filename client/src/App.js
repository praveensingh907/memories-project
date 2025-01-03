import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memlg from './images/memlg.jpg';
import useStyles from './styles'

const App = () => {

  const classes = useStyles();

  return (
    <Container maxWidth="lg">

      <AppBar className={classes.appBar} position='static' color='inherit'>
        <div style={{ display: 'flex', alignItems: 'center' }}> {/* Flex container */}
          <Typography className={classes.heading} variant='h3' align='center'>Memories</Typography>
          <img className={classes.image} src={memlg} alt='memories' height="100"/>
        </div>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm = {7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm = {4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>

      </Grow>

    </Container>
  )
}

export default App;