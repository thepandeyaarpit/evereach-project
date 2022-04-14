import React, {useState} from 'react';
import { Typography } from '@material-ui/core'
import imageLogout from '../images/logout-black.svg';
import imageLogoutWhite from '../images/logout-white.svg';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './Logout.css';
import DriveLogin from '../DriveLogin';

function Logout(){
    const [over, setOver] = useState(false);
    return(
        <>
            <button className="btnLogout" 
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
            >
              <img src={over ? imageLogoutWhite : imageLogout} alt="arrow" className="imgLogout"
              />
              <Typography className="text">Logout</Typography>
              </button>

              {/* <BrowserRouter>
                <Switch>
                <Route path="/" component={Logout} />
                
                </Switch>
            </BrowserRouter> */}
        </>
    )
}

export default Logout;