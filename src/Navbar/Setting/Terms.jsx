import React from 'react';
import { Typography, DialogContentText } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import imageDownArrow from '../../images/down-arrow.svg';

const useStyle = makeStyles({
    textContent: {
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '350px',
        padding: '15px', 
      },
    textFieldContent: {
        fontWeight: '700', 
        fontSize: '14px', 
        color: 'rgb(26, 26, 26)',
      },
      imageArrow: {
        height: '8px',
      },
})

function Terms() {
    const classes = useStyle();
  return (
    <>
    <DialogContentText className={ classes.textContent }>
        <Typography className={ classes.textFieldContent }>Terms and Conditions</Typography>
        <img src={imageDownArrow} className={classes.imageArrow} />
        </DialogContentText>
        
    </>
  )
}

export default Terms;