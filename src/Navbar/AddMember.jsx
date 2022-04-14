import React, {useState} from 'react';
import { Button, Dialog, DialogContent, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import imageAdd from '../images/add.svg';
import save from '../images/save.svg';
import uploadImg from '../images/upload.svg';
import axios from 'axios';
import $ from 'jquery';

import './AddMember.css';

// $("button").click(function(){
//   $.get("demo_test.asp", function(data, status){
//       alert("Data: " + data + "\nStatus: " + status);
//   });
// });

// https://docs.google.com/spreadsheets/d/15brl8eSxDtYi2eFe0Vj9sjgfewuGlqowYV0XZ0YtQJc/edit?usp=sharing

// howItWorks = () => {
//   window.HowItWorksVideo();
// }


const useStyle = makeStyles({
  
  
})

function AddMember() {
  const classes = useStyle();

  const [showDialog, setShowDialog] = useState(false);
    const openDialog = () => setShowDialog(true);
    const closeDialog = () => setShowDialog(false);

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };



const [fname,setFname]= useState('');
const [lname,setLname]= useState('');
const [mobile,setMobile] = useState('');
const [gender,setGender] = useState('');
const [email,setEmail] = useState('');
const [city,setCity]= useState('');
const [state,setState] = useState('');
const [zip,setZip] = useState('');
const [martialstatus,setMartialstatus] = useState('');
const [dob,setDOB] = useState('');
const [image,setImage] = useState('');
const [currentaddress,setCurrentaddress] = useState('');
const [facebook,setFacebook] = useState('');
const [linkedin,setLinkedin] = useState('');
const [github,setGithub] = useState('');
const [instagram,setInstagram] = useState('');

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(fname,lname,mobile,gender,email,city,state,zip,martialstatus,dob,image,currentaddress,facebook,linkedin,github,instagram);
  
  const data={
    Fname:fname,
    Lname:lname,
    Mobile: mobile,
    Gender:gender,
    Email:email,
    City:city,
    State:state,
    Zip:zip,
    Maritelstatus:martialstatus,
    Dob:dob,
    Image:image,
    Currentaddress:currentaddress,
    Facebook:facebook,
    Linkedin:linkedin,
    Github:github,
    Instagram:instagram
  }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwOoa-WUaarsw-D0lBohhTrk9foBjDpwrwebGs8aw8GO2wahsnnkj9dxLVkSNBmwFrs/exec'
  const form = document.forms['google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => alert("Response Saved"))
      .catch(error => console.error('Error!', error.message))
  })
    
    

  axios.post('https://script.google.com/macros/s/AKfycbyurHZT6ubO5XDQdFruGsKszJr_i8mYl5RpazhcMPLuaQ6ub6nuoe-0tU_zrbIxV-Re/exec', data).then((response)=>{
    console.log(response);
    

    setFname('');
    setLname('');
    setMobile('');
    setGender('');
    setEmail('');
    setCity('');
    setState('');
    setZip('');
    setMartialstatus('');
    setDOB('')
    setImage('');
    setCurrentaddress('');
    setFacebook('');
    setLinkedin('');
    setGithub('');
    setInstagram('');
  })
}

  return (
    <>
        
        <button onClick={openDialog} variant="contained" className="memberBtn" >
              <img src={imageAdd} className="imgMember" />
              <Typography className="text"> Add Member</Typography>
        </button>
        <Dialog open={showDialog}  fullWidth maxWidth="md" className="dialogBoxMemberBtn" >


        <div className="AllDialogButton">
              <button className="btnSecond" >
                <img src={imageAdd} className="imgLogs" />
                <Typography className="text-add">Add Member</Typography>
              </button>
              <button className="btnSecond" >
                <img src={save} className="imgLogs" />
                <Typography className="text-add">Save</Typography>
              </button>
              <button className="btnSecond" onClick={closeDialog}>
              <img src={imageAdd} className="imgLogs" />
              <Typography className="text" >Cancel</Typography>
              </button>
            </div>

            <div className="trimember"></div>

            <DialogContent className="memberDialogBox">

              <form onSubmit={handleSubmit} autoComplete="off" encType="multipart/form-data" name="google-sheet">            
              <div className="sameAll">
                  <input type="text" onChange={(e)=>setFname(e.target.value)} placeholder="First Name" value={fname} className="myInputBox"/> 
                  <input type="text" onChange={(e)=>setLname(e.target.value)} placeholder="Last Name" value={lname} className="myInputBox"/> 
                </div>

                <div className="sameAll">
                  <input type="text" onChange={(e)=>setMobile(e.target.value)} placeholder="Mobile" value={mobile} className="myInputBox" /> 
                  <input type="text" onChange={(e)=>setGender(e.target.value)} placeholder="Gender" value={gender} className="myInputBox" /> 
                </div>
                
                <div className="sameAll">
                  <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" value={email} className="myInputBox"/>
                  <input type="text" onChange={(e)=>setCity(e.target.value)} placeholder="City" value={city} className="myInputBox"/>
                </div>
                
                <div className="sameAll">
                  <input type="text" onChange={(e)=>setState(e.target.value)} placeholder="State" value={state} className="myInputBox"/>
                  <input type="text" onChange={(e)=>setZip(e.target.value)} value={zip} placeholder="Zip" className="myInputBox" /> 
                </div>
                
                <div className="sameAll">
                  <input type="text" onChange={(e)=>setMartialstatus(e.target.value)} placeholder="Martialstatus" value={martialstatus} className="myInputBox"/> 
                  <input type="text" onChange={(e)=>setDOB(e.target.value)} value={dob} placeholder="Dob" className="myInputBox" />
                </div>
               
                <div className="sameAll image-class">
                  {/* <input type="file" onChange={(e)=>setImage(e.target.value)} placeholder="image" value={image} className="fileButton"/>
                  <img src={uploadImg} alt="Image upload" className="iconUpload" /> */}
                  <input type="file" onChange={(e)=>setCurrentaddress(e.target.value)} placeholder="image" value={currentaddress} className="myInputBox" /> 

                   
                  <input type="text" onChange={(e)=>setCurrentaddress(e.target.value)} placeholder="Address" value={currentaddress} className="myInputBox"/> 
                </div>
                
                <div className="sameAll">
                  <input type="text" onChange={(e)=>setFacebook(e.target.value)} placeholder="facebook" value={facebook} className="myInputBox"/> 
                  <input type="text" onChange={(e)=>setLinkedin(e.target.value)} placeholder="linkedin" value={linkedin} className="myInputBox"/> 
                </div>
                
                <div className="sameAll">
                  <input type="text" onChange={(e)=>setGithub(e.target.value)} placeholder="github" value={github} className="myInputBox"/> 
                  <input type="text" onChange={(e)=>setInstagram(e.target.value)} placeholder="instagram" value={instagram} className="myInputBox"/>
                </div>
                
                <button type="submit" id="btnSubmit" className="btnSubmit">Submit</button>
                </form>
            </DialogContent>
        </Dialog>
    </>
  )
}

export default AddMember;