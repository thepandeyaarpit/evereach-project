import React, { useState } from 'react';
import {  Dialog,  Typography, DialogContent, DialogTitle,  Container, Grid, CardContent, Box } from '@material-ui/core';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './componentsCSS/SendMessage.css';
import AddMessages from '../components/AddMessages';


function SendMessage(){

    const [msgSend, setMsgSend] = useState(false);

    const [send, setSend] = React.useState(false);
    const handleClickOpen = () => {
        setSend(true);
    };
    const handleClose = () => {
        setSend(false);
    };

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const sendMsg = () => {
        alert('send');
        window.location.href = "./SendMsgtoUser";
    };
    return(

        <>
            <button onClick={handleClickOpen} className="btnSendMsg" >
                <Typography className="text">Send Message</Typography>
             </button>    
              
        <Box>
        
        <Dialog open={send} fullWidth maxWidth="md">

        <Typography className="heading" >
                    Send Message
                </Typography>
                <DialogContent>
                    <Typography className="receipts">Receipts</Typography>


                    <FormControl variant="outlined" fullWidth >
                        <div className="input-box-text">
                            Select Message
                        </div>
                        <Select
                            // labelId="demo-simple-select-standard-label"
                            // id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                            className="MessageInputbox"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>

                        <AddMessages />

                    </FormControl>


                    <Typography align="center" style={{ margin: '35px' }}>
                        <button onClick={handleClose} className="btnCancel" > Cancel</button>
                        <button className="btnSend" onClick={sendMsg} > Send</button>
                    </Typography>


                </DialogContent>

        </Dialog>
        </Box>




            <BrowserRouter>
                <Switch>
                    <Route path="/components/AddMessages" component={AddMessages} />
                </Switch>
            </BrowserRouter>

        </>
    )
}

export default SendMessage;