import React from 'react';
import { Card, CardContent, Typography, Checkbox } from '@material-ui/core';

import imagecopy from '../../images/copy.png';
import imagePhone from '../../images/phone.svg';
import imageMail from '../../images/mail.svg';

import './CssThisPart/SideBar.css';

function SideBar(props){
    return(
        <>

                <CardContent key={props.id} className="mainSideBar">
                    <Checkbox color="default" />

                    <Card className="MainCard" >

                    <CardContent className="cardSideBar">
                        <CardContent>
                            <img src={props.image} className="userImageSideBar"/>
                        </CardContent>
                        <CardContent className="textSideBar">
                            <Typography className="userNameSideBar">{props.name}</Typography>
                            <Typography className="userSubnameSideBar">{props.subname}</Typography>
                        </CardContent>
                        <CardContent>
                            <img src={imagecopy} align="right" className="copyButton" />
                        </CardContent>
                    </CardContent>

                    <Typography  className="secondTextSideBar">
                    <CardContent>
                    <img src={imagePhone} className="imgPhone1" />
                    {props.phone}
                    </CardContent>
                    <CardContent>
                    <img src={imageMail} className="imgMail" />
                    {props.email}
                    </CardContent>
                    </Typography>

                    </Card>
                </CardContent>
           
            
        </>
    )
}

export default SideBar;