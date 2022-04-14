import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, Typography, DialogContent, DialogActions, DialogContentText, TextField } from '@material-ui/core';

import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import whatsapp from '../images/whatsapp.svg';

import './componentsCSS/OtherApps.css';

function OtherApps(){

    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => setShowDialog(true);
    const closeDialog = () => setShowDialog(false);


    return(
        <>
            <Dialog open={true} fullWidth >
                <Typography className="heading">
                    Connect to other apps
                </Typography>
                <DialogContent>
                    
                    <Typography className="image">
                        <img src={facebook} className="imageIcon"/>
                        <img src={instagram} className="imageIcon"/>
                        <img src={whatsapp} className="imageIcon"/>
                    </Typography>
                
                    <Typography align="center" className="soon" >
                        Comming Soon
                    </Typography>
                    <Typography align="center" style={{ margin: '35px' }}>
                        <Button variant='outlined' className="btnCancel"> Cancel</Button>
                    </Typography>


                </DialogContent>
            </Dialog>
        </>
    )
}

export default OtherApps;