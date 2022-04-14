import React, { useState } from 'react';
import { Button, Dialog, Typography, DialogContent, TextareaAutosize, DialogActions } from '@material-ui/core';

import './componentsCSS/AddMessage.css';

import Edit from '../images/edit-solid.svg';
import Delete from '../images/delete.svg';


import '../index.css';

let list1 = [];
let n = 1;
let x = 0;


function AddMessage(){

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
            <Dialog open={add} fullWidth maxWidth="md" className="addMessageDialogBox">
                <Typography className="heading-addmessage" >
                    Add Message
                </Typography>
                <DialogContent>
                    <Typography className="write-message">
                        Write your Message
                    </Typography>
                    
                    <TextareaAutosize autoFocus margin="dense" name="addMessage" id="addMessage" label="Add Message" type="text"  variant="outlined" className="text-area" fullWidth />

                    <Typography align="right" className="small-letter" >
                        160 character
                    </Typography>

                    <Typography align="center" id="btnadd" className="btnadd">
                        <button onClick={handleClose} variant='outlined' className="btn-cancel" > Cancel</button>
                        <button className="btn-add" type="submit"  id="button" name="button" onClick={AddRow}> Add</button>
                    </Typography>


                <div className="main-div">

                    <Typography className="all-message">
                        All Messages
                    </Typography>

                    {/* <table id="show">
                        <tr>
                            <td style={{justifyContent: 'space-between'}}>
                                <div style={{fontSize: '14px', fontWeight: '600', maxWidth: '150%'}}>
                                Lorem psum  is simply dummy text of the printing andLorem psum  is simply dummy text of the printing andLorem psum  is simply dummy text of the printing andLorem psum  is simply dummy text of the printing and
                                </div>
                            </td>
                            <td>
                                <div style={{display: 'flex'}}>
                                    <Button onClick={editBtn}><img src={Edit} style={{height: '25px'}}  /></Button>
                                    <Button onClick={deleteBtn}><img src={Delete} style={{height: '25px'}}  /></Button>
                                </div>
                            </td>
                        </tr>
                    </table> */}

                    <div className="show-data-table">
                        <table id="show">
                            <tr>
                                
                            </tr>
                        </table>
                        <div className="btns">
                            <Button onClick={editBtn}><img src={Edit} className="end-btn" /></Button>
                            <Button onClick={deleteBtn}><img src={Delete} className="end-btn" /></Button>
                        </div>
                    </div>

                </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddMessage;