// import React from 'react'
import React, {useState} from 'react';
import { Button, Dialog, Box, Typography, DialogContent, Container, Grid, CardContent } from '@material-ui/core';
import imageLogs from '../images/logs-black.svg';
import imageLogsWhite from '../images/logs-white.svg';
import imageAdd from '../images/add.svg';
 
import LogData from './Logs/LogData';
import LogDetails from './Logs/LogDetails';


import './Logs.css';

  function cardDetail(value){
    return(
        <LogData 
            date={value.date}
            text={value.text}
        />
    );
}

function Logs() { 
    const [over, setOver] = useState(false);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

  return (
      <>
        <button onClick={handleClickOpen} className="btnLogs" 
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        >
            <img src={over ? imageLogsWhite : imageLogs} className="imgLogs" />
            <Typography className="text">Logs</Typography>
        </button>    
              
        <Box>
        
        <Dialog open={open} fullWidth className="myDialogBox">

        <div className="buttons">
              <button className="btnLogs" 
              onMouseOver={() => setOver(true)}
              onMouseOut={() => setOver(false)}
              >
                <img src={over ? imageLogsWhite : imageLogs} className="imgLogs" />
                <Typography className="text">Logs</Typography>
              </button>
              <button className="btnSecond" onClick={handleClose} >
              <img src={imageAdd} className="imgLogs" />
              <Typography className="textRed">Cancel</Typography>
              </button>
            </div>

            <div className="coneLogs"></div>

            <Typography className="title">
                Logs
            </Typography>


            <DialogContent>  
            <Container>
                <Grid container>
                    <CardContent style={{ width: '100%' }}>
                        {LogDetails.map(cardDetail)}
                    </CardContent>
                </Grid>
            </Container>   
            </DialogContent>

        </Dialog>
        </Box>


      </>
  )
}

export default Logs;