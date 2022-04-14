import React from 'react';
// import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

import SendMsgtoUser from './SendMsgtoUser';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './componentsCSS/Profile.css';

import imagePhone from '../images/phone.svg';
import imageMail from '../images/mail.svg';
import copy from '../images/copy.png';
import { Link } from "react-router-dom";


function Profile(props){

  return(
    <>
      <Link to="components/SendMsgtoUser">
      <Card className="profileCard" >
        <CardContent className="upperPart">
          <CardContent>
            <img src={props.imgsrc} className="userImg" />
          </CardContent>
          <CardContent className="profileTitle">
            <Typography className="memberName"> {props.title} </Typography>
            <Typography className="memberWork"> {props.subheader} </Typography>
          </CardContent>

            <CardContent>
              
                <img src={copy} onClick="copyFun()" align="right" className="copyButton" />
              
            </CardContent>
        </CardContent>

        <Typography className="secondryData">
          <CardContent>
            <img src={imagePhone} className="imgPhone1" />
            {props.phone1}
          </CardContent>
          <CardContent>
            <img src={imageMail} className="imgMail" />
            {props.email}
          </CardContent>
        </Typography>
      </Card>
      </Link>

      <BrowserRouter>
        <Switch>
          <Route path="/components/SendMsgtoUser" component={Profile} />
        </Switch>
    </BrowserRouter>
      
    </>
  );
}

export default Profile;
