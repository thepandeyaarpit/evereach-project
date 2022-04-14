import React from 'react';
import {Typography, Box } from '@material-ui/core';

import './CssThisPart/UserDetails.css';


function UserDetails(props){
    return(
        <>
        <Box className="detailsPerson">

                    <div className="userdetailcard">
                        <Typography className="textPreDefined">First Name</Typography>
                        <Typography className="textData">{props.firstName}</Typography>
                    </div>

                    <div className="userdetailcard">
                        <Typography className="textPreDefined">Last Name</Typography>
                        <Typography className="textData">{props.lastName}</Typography>
                    </div>     

                    <div className="userdetailcard">
                        <Typography className="textPreDefined">Mobile</Typography>
                        <Typography className="textData">{props.userMobile}</Typography>
                    </div>

                    <div className="userdetailcard">
                        <Typography className="textPreDefined">Gender</Typography>
                        <Typography className="textData">{props.userGender}</Typography>
                    </div>
                 
                    <div className="userdetailcard">
                        <Typography className="textPreDefined">Email</Typography>
                        <Typography className="textData">{props.userEmail}</Typography>
                    </div> 

                    <div className="userdetailcard">
                        <Typography className="textPreDefined">City</Typography>
                        <Typography className="textData">{props.userCity}</Typography>
                    </div>

                    <div className="userdetailcard">
                        <Typography className="textPreDefined">State</Typography>
                        <Typography className="textData">{props.userState}</Typography>
                    </div>     

                    <div className="userdetailcard">
                        <Typography className="textPreDefined">Zip</Typography>
                        <Typography className="textData">{props.userZip}</Typography>
                    </div>

                    <div className="userdetailcard">
                        <Typography className="textPreDefined">Marital Status</Typography>
                        <Typography className="textData">{props.userMarital}</Typography>
                    </div> 

                    <div className="userdetailcard">
                        <Typography className="textPreDefined">DOB</Typography>
                        <Typography className="textData">{props.userDob}</Typography>
                    </div> 

                    <div className="userdetailcard">
                        <Typography className="textPreDefined">Image</Typography>
                        <Typography className="textData">{props.userImage}</Typography>
                    </div>

                    <div className="userdetailcard">
                        <Typography className="textPreDefined">Current Address</Typography>
                        <Typography className="textData">{props.userAddress}</Typography>
                    </div>
                
                    <div className="userdetailcard">
                        <Typography className="textPreDefined">Facebook</Typography>
                        <Typography className="textData">{props.Social1}</Typography>
                    </div> 

                    <div className="userdetailcard">
                        <Typography className="textPreDefined">LinkedIn</Typography>
                        <Typography className="textData">{props.Social2}</Typography>
                    </div>     

                    <div className="userdetailcard">
                        <Typography className="textPreDefined">Github</Typography>
                        <Typography className="textData">{props.Social3}</Typography>
                    </div>     

                    <div className="userdetailcard">
                        <Typography className="textPreDefined">Instagram</Typography>
                        <Typography className="textData">{props.Social4}</Typography>
                    </div>
                 
            </Box>
        </>
    )
}

export default UserDetails;