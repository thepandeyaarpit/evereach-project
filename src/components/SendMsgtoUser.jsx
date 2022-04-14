import React, { useState } from 'react';
import { CardContent, Typography, Button, Box, Dialog} from '@material-ui/core';
import NavBar from '../Navbar/NavBar';

import UserDetails from './SendMsgtoUser/UserDetails';
import AllDetails from './SendMsgtoUser/AllDetails';
import SideBar from './SendMsgtoUser/SideBar';
import SideBarDetails from './SendMsgtoUser/SideBarDetails';
import SendMessage from './SendMessage';
import { Container, Grid } from '@material-ui/core';
import SearchBar from './SendMsgtoUser/SearchBar';
import './componentsCSS/SendMsgtoUser.css';
import AddMember from '.././Navbar/AddMember';

import edit from '../images/edit-black.svg'


function details(val){
      return(
          <UserDetails 
             firstName={val.firstName}
             lastName={val.lastName}
             userMobile={val.userMobile}
             userGender={val.userGender}
             userEmail={val.userEmail}
             userCity={val.userCity}
             userState={val.userState}
             userZip={val.userZip}
             userMarital={val.userMarital}
             userDob={val.userDob}
             userAddress={val.userAddress}
             userImage={val.userImage}
             Social1={val.social1}
             Social2={val.social2}
             Social3={val.social3}
             Social4={val.social4}
          />
      );
    }

function sideDetail(value){
    return(
        <SideBar 
            key={value.id}
            image={value.image}
            name={value.name}
            subname={value.subname}
            phone={value.phone}
            email={value.email}
        />
    );
}


function SendMsgtoUser(){
    const [image, setImage] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => setShowDialog(true);
    const closeDialog = () => setShowDialog(false);

    return(
        <>

        <NavBar />

        <Box className="mainBox">

            <CardContent className="firstContent" >
            
            <SearchBar />

                <Container>
                    <Grid container className='sidebar-overflow'>
                            {SideBarDetails.map(sideDetail)}
                    </Grid>
                </Container>

            </CardContent>
            

            <CardContent className="secondContent" >
                <CardContent className="userDetail" >
                <Typography>
                    <h3>Basic Details</h3>    
                </Typography>
                {/* <Link to="#"> */}
                    <Button className="buttonEdit" variant="outlined" onClick={openDialog} >
                        <img className="imageEdit" src={edit} />
                        <Typography className="textEdit">Edit</Typography>
                    </Button>
                {/* </Link> */}
                </CardContent>

                
                
                <CardContent className="card">

                <CardContent className="userCard">
                    <CardContent>
                    <img src='https://media.istockphoto.com/photos/young-man-with-laptop-and-coffee-working-indoors-home-office-concept-picture-id1334702614?b=1&k=20&m=1334702614&s=170667a&w=0&h=Ea5KZt7q8D_dm1kHuNG7__R8J--thzE-Yj7Q9nXMg6E=' className="userImage"/>
                    </CardContent>
                    <CardContent className="userCardDetail">
                        <Typography className="userName">John Doe</Typography>
                        <Typography className="userDesignation">UI UX Designer</Typography>
                    </CardContent>

                </CardContent>
                </CardContent>

                <Container>
                    <Grid container>
                        <CardContent style={{ width: '100%' }}>
                            {AllDetails.map(details)}
                        </CardContent>
                    </Grid>
                </Container>

            </CardContent>
        </Box>

        <Dialog open={showDialog} onClose={closeDialog} className="dialogBoxSeting">
            <AddMember />
        </Dialog>

        </>
    );
}

export default SendMsgtoUser;