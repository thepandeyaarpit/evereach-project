import React from 'react';
import './index.css';
import { Container, Grid } from '@material-ui/core';
import NavBar from './Navbar/NavBar';
import Profile from './components/Profile';
import UserData from './components/UserData';

function App(){
const ncard = (val) => {
  return(
        <>
            <Profile 
            imgsrc={val.imgsrc}
            title={val.title}
            subheader={val.subheader}
            phone1 = {val.phone1}
            email = {val.email}
            />

        </>
  );
}

  return(
    <>
      <NavBar />

      <Container>
        <Grid container spacing={3} xs={12} md={12} lg={12}>
        <h3 className="heading-header">Member's</h3>
          <div className="main-body">
              {UserData.map(ncard)}
            </div>
        </Grid>
      </Container>

    </>
  );
}


export default App;