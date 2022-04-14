import React, { useState } from 'react';
import { Button, Dialog, Typography, DialogContent, TextareaAutosize, DialogActions } from '@material-ui/core';

import './componentsCSS/AddMessages.css';
import List from './List';

import Edit from '../images/edit-solid.svg';
import Delete from '../images/delete.svg';


import '../index.css';

let list1 = [];
let n = 1;
let x = 0;


function AddMessages(){

    const AddRow = () => {
        let AddRown = document.getElementById("show");
        let NewRow = AddRown.insertRow(n);

        list1[x] = document.getElementById("addMessage").value;
        let cell1 = NewRow.insertCell(0);
        cell1.innerHTML = list1[x];
        n++;
        x++;
    }


    const [addMsg, setAddMsg] = useState(false);

    const [add, setAdd] = React.useState(false);
    const AddMessageOpen = () => {
        setAdd(true);
    };
    const handleClose = () => {
        setAdd(false);
    };

    const editBtn = () => {
        alert('edit');
    };
    const deleteBtn = () => {
        alert('delete');
    };

    

    return(
        <>
        <Typography onClick={AddMessageOpen} align="right" className="sideText">
            Add Message
        </Typography>
            <Dialog open={add} onClose={handleClose} fullWidth maxWidth="md" className="addMessageDialogBox">
                <Typography className="heading-addmessage" >
                    Add Message
                </Typography>
                <DialogContent>
                   <List />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddMessages;