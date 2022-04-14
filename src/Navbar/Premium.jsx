import React, {useState} from 'react';
import { Button, Dialog, Typography, DialogContent } from '@material-ui/core';
import Free from './Premium/Free';
import Paid from './Premium/Paid';
import './premium.css';

function Premium() {

    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => setShowDialog(true);
    const closeDialog = () => setShowDialog(false);
  return (
      <>
      <button onClick={openDialog} variant="contained" className="btnPremium">Premium</button>


          <Dialog open={showDialog} onClose={closeDialog} className="premiumDialogBox" maxWidth >
        <Typography className="headingMember">
            Premium Plans
        </Typography>
        <DialogContent>
        <div className="dialogContent">

            <Free />
            <Paid />  
 
        </div>

        <Typography align='center'>
            <div>
                <button onClick={closeDialog} className="cancelButton">Cancel</button>
                <button className="buyButton">Buy</button>
            </div>
        </Typography>

        </DialogContent>
    </Dialog>
      </>
  )
}

export default Premium;