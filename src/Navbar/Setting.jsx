// import React from 'react'
import React, {useState} from 'react';
import { Button, Dialog, Box, Typography, DialogContent } from '@material-ui/core';
import AddMessage from './Setting/AddMessage';
import ApiSetting from './Setting/ApiSetting';
import EmailSetting from './Setting/EmailSetting';
import OtherApp from './Setting/OtherApp';
import Privacy from './Setting/Privacy';
import Terms from './Setting/Terms';
import imageSetting from '../images/settings-black.svg';
import imageSettingWhite from '../images/settings-white.svg';
import imageAdd from '../images/add.svg';

import './Setting.css';

function Setting() {
    const [image, setImage] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => setShowDialog(true);
    const closeDialog = () => setShowDialog(false);
    
  return (
      <>
      <button onClick={openDialog} className="btnSetting" 
      onMouseOver={() => setImage(true)}
      onMouseOut={() => setImage(false)}
      >
        <img src={image ? imageSettingWhite : imageSetting} className="imgSetting" />
        <Typography className="text">Settings</Typography>
      </button>    

          
          <Box>
          <Dialog open={showDialog} className="dialogBoxSeting">

            <div className="buttonBoth">
              <button className="btnSetting"
              onMouseOver={() => setImage(true)}
              onMouseOut={() => setImage(false)}
              >
                <img src={image ? imageSettingWhite : imageSetting} className="imgSetting" />
                <Typography className="text">Settings</Typography>
              </button>
              <button className="btnSecond" onClick={closeDialog} >
              <img src={imageAdd} className="imgLogs" />
              <Typography className="textRed">Cancel</Typography>
              </button>
            </div>

            <div className="cone"></div>
  
            <Typography className="title">
                Settings
            </Typography>
            <DialogContent>
                
                <AddMessage />
                <ApiSetting />
                <EmailSetting />
                <OtherApp />
                <Privacy />
                <Terms />

            </DialogContent>
        </Dialog>
        </Box>
      </>
  )
}

export default Setting;