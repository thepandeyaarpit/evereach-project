import React, { useState } from 'react';
import { Button, Dialog, Typography, DialogContent, DialogActions, DialogContentText, TextField } from '@material-ui/core';


import './componentsCSS/ApiSetting.css';


function ApiSetting(){
    const classes = useStyle();
    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => setShowDialog(true);
    const closeDialog = () => setShowDialog(false);


    return(
        <>
            <Dialog open={true} fullWidth maxWidth="md">
                <Typography className="heading">
                    API Settings
                </Typography>
                <DialogContent>
                    
                <TextField autoFocus margin="dense" id="userFname" label="Host" type="text"  variant="outlined" className="fields"/>
                <TextField autoFocus margin="dense" id="userLname" label="Port" type="text"   variant="outlined" className="fields" />

                <TextField autoFocus margin="dense" id="userEmail" label="User Name" type="email"  variant="outlined" className="fields" />
                <TextField autoFocus margin="dense" id="userPhone" label="Password" type="text"  variant="outlined" className="fields"/>


                    <Typography align="center" className="buttonsApi">
                        <Button variant='outlined' className="btnCancel"> Cancel</Button>
                        <Button className="btnSave"> Save</Button>
                    </Typography>


                </DialogContent>
            </Dialog>
        </>
    )
}

export default ApiSetting;