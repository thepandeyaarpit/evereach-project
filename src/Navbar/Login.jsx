import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, Typography, DialogContent, TextareaAutosize, DialogActions } from '@material-ui/core';

import '../index.css';

var clientId = "177796343416-ubkpsogd24pss39javjdub4jltvoot8j.apps.googleusercontent.com";
var redirect_uri = "http://localhost:3000/Login";
var scope = "https://www.googleapis.com/auth/drive.file";
var res = "https://www.googleapis.com/auth/userinfo.profile";

function Login(){
    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => setShowDialog(true);
    const closeDialog = () => setShowDialog(false);


    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return(
        <>
        <Button onClick={openDialog} >
              <img src="#"  />
              <Typography >Login</Typography>
              </Button>   

            <Dialog open={showDialog} fullWidth maxWidth="md" >

                <Typography style={{ fontSize: '22px', fontWeight: '800', padding: '20px' }}>
                    Add Message
                </Typography>
                <DialogContent>
                    <Typography style={{ fontSize: '14px' }}>
                        Write your Message
                    </Typography>
                    
                    
                    <TextareaAutosize autoFocus margin="dense" id="addMessage" label="Add Message" type="text"  variant="outlined" fullWidth style={{ height: '100px', width: '100%', borderRadius: '14px' }} />

                    <Typography align="right" style={{ fontSize: '12px', padding: '5px', fontStyle: 'italic'}}>
                        160 character
                    </Typography>

                    <Typography align="center" style={{ margin: '20px' }}>
                        <Button onClick={closeDialog} variant='outlined' style={{ borderRadius: '8px', margin: '0 8px', height: '40px', width: '125px', border: '1px solid #000000', color: '#000000' }}> Cancel</Button>
                        <Button style={{ backgroundColor: '#03EA6A', color: '#FFFFFF', width: '125px', height: '40px', borderRadius: '8px', margin: '0 8px' }}> Add</Button>
                    </Typography>


                    <Typography style={{ fontSize: '22px', fontWeight: '600', padding: '20px' }}>
                        All Messages
                    </Typography>

                    <DialogContent style={{display: 'flex'}}>
                        <Typography style={{fontSize: '14px', fontWeight: '600'}}>
                            Lorem psum  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        </Typography>
                        <Typography style={{display: 'flex'}}>
                            <Button><img src="#" style={{height: '25px'}} /></Button>
                            <Button><img src="#" style={{height: '25px'}}/></Button>
                        </Typography>
                    </DialogContent>


                </DialogContent>
            </Dialog>
        </>
    )
}

export default Login;