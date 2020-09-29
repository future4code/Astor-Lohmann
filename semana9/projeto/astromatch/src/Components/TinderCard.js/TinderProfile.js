import React from 'react';
import {useStyles} from './style'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function TinderCard(props) {
    const classes = useStyles();

    return (
      <div>
        <div>
          <img src={props.dados.photo}/>
        </div>
        <div>
          <p>{props.dados.name}</p>
          <p>{props.dados.age}</p>
          <p>{props.dados.bio}</p>
        </div>
        
      </div>
    );
  }
