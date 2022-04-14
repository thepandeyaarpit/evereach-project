import React from 'react';
import { DialogContentText, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles ({
    myTimeText: {
        color: "#03EA6A", 
        margin: '3px 0',
        fontSize: "11px",
        fontFamily: 'Poppins',
        // marginTop: '-15px',
    },
  
    myText: {
        fontWeight: '700', 
        fontSize: '14px', 
        color: '#000000',
        fontFamily: 'Poppins', 
      
    },
})

function LogData(dataLog){
    const classes = useStyle();
    return(
        <>
            <DialogContentText style={{padding: '1px 0', marginLeft: '-20px'}}>
                <Typography className={ classes.myTimeText }>{dataLog.date}</Typography>
                <Typography className={ classes.myText }>
                    {dataLog.text}
                </Typography>
            </DialogContentText>
            {/* <hr style={{ color: '#f3f3f3', marginLeft: '-20px' }}/> */}
        </>
    );
}

export default LogData;