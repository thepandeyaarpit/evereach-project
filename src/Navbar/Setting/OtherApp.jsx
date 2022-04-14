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
        borderBottom: '1px solid rgb(211, 211, 211)',
      },
    textFieldContent: {
        fontWeight: '800', 
        fontSize: '14px', 
        color: 'rgb(26, 26, 26)',
      },
      imageArrow: {
        height: '8px',
      },
})

function OtherApp() {
    const classes = useStyle();
  return (
    <>
    <DialogContentText className={ classes.textContent }>
        <Typography className={ classes.textFieldContent }>Connect to Other Apps</Typography>
        <img src={imageDownArrow} className={classes.imageArrow} />
        </DialogContentText>
        
    </>
  )
}

export default OtherApp;