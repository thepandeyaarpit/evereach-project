import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import AddMember from './AddMember';
import Setting from './Setting';
import Logs from './Logs';
import Premium from './Premium';
import Logout from './Logout';
import Logo from './Logo';
// import memberImage from '';


function NavBar(){
    return (
        <>
            <Toolbar className='nav-body'>
              <Typography  sx={{ flexGrow: 1 }}>
                <Logo />  
              </Typography>
                  <Premium />
                  <AddMember />
                  <Logs />
                  <Setting />
                  <Logout />
                  {/* <Login /> */}
            </Toolbar>
          <hr style={{ border: '1px solid #03EA6A', width: '100%' }} />
        
        </>
      );
}

export default NavBar;


















