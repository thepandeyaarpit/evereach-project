import React from 'react';
import { CardContent, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CssThisPart/SearchBar.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SendMessage from '../../components/SendMessage';

function SearchBar(){
    return(
        <>
            <CardContent className="cardSearchBar">
                <TextField margin="dense" id="search" label="Search Member" type="search" variant="outlined" className="searchItem"/>
                {/* <Link to="../components/SendMessage">
                <button type="submit" className="btnSendMsg" >Send Message</button>
                </Link> */}
                <SendMessage />
            </CardContent>

            <BrowserRouter>
                <Switch>
                    <Route path="../components/SendMessage" component={SendMessage} />
                </Switch>
            </BrowserRouter>
        </>
   
    )
}

export default SearchBar;