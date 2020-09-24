import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextField, Button, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core'
import styled from "styled-components";
import FormContainer from './FormContainer'



const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(14, 1fr)',
      gridGap: theme.spacing(3),      
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
      height: 300,
      width: 140
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  }));

const Planner = () => {
    
    const classes = useStyles();

    return <div>
        <FormContainer /> 
        
        <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 2' }}>
          <Paper className={classes.paper}>Domingo</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 2' }}>
          <Paper className={classes.paper}>Segunda-feira</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 2' }}>
          <Paper className={classes.paper}>Terça-feira</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 2' }}>
          <Paper className={classes.paper}>Quarta-feira</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 2' }}>
          <Paper className={classes.paper}>Quinta-feira</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 2' }}>
          <Paper className={classes.paper}>Sexta-feira</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 2' }}>
          <Paper className={classes.paper}>Sábado</Paper>
        </div>
      </div>
    </div>
}
export default Planner

