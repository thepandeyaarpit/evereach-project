import React,{useEffect,useState} from 'react';
import logo from './images/evereach-logo.png';
import bgImage from './images/object.svg';
import googleIcon from './images/google-icon.svg';
import arrow from './images/green-arrow.svg';
import {makeStyles} from '@material-ui/core/styles';
import './DriveLogin.css';
import axios from 'axios';


var client_id = '177796343416-6bf8mdaop44pgc3groisonjocafnp6ju.apps.googleusercontent.com';
var client_secret = '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';
var api_key = 'AIzaSyCzx5TweiGCUP2VosC7ZelWv3X_nkqON-4';
var redirect_uri = 'http://localhost:3000/'; 
var scope = [ 
      'https://www.googleapis.com/auth/drive.file'
    ];
var immediate = true;
var code = '';
var access_type = 'offline';
// var grant_type='authorization_code';
// var response_type = code;



function DriveLogin(){
    
    const test=()=>{
        
        window.gapi.auth2.authorize({ 
            client_id: client_id, scope: scope, access_type: access_type, api_key: api_key, client_secret: client_secret, code: code },
            authResult => {
                console.log(authResult);
                
            }
        );
    }
    
     return(
        <>
            <div>
                <button onClick={test}>Test</button>
            </div>
        </>
    );
}

window.gapi.load('client',()=>{
        window.gapi.client();
  })
  
export default DriveLogin;





















// function DriveLogin(){
//     return(
//         <div className="DrievMainBody">
//                 <div className="pageHeader">
//                     <div>
//                         <img src={logo} className="imageStyle" />
//                     </div>

//                     <div>
//                         <ul className="navs">
//                             <a className="navItems" href="#">About</a>
//                             <a className="navItems" href="#">Contact</a>
//                             <a className="navItems" href="#">Privacy Policy</a>
//                             <a className="navItems" href="#">Terms & Conditions</a>
//                             <button className="navButton" >Sign In</button>
//                         </ul>
//                     </div>
//                 </div>
    
            
//             <div style={{display: 'flex'}} className="buttonArea">
//                 <div >

//                     <h1 className="heading" style={{marginLeft: '17%', marginTop: '22%',fontSize: '48px',fontWeight: 'bold',fontFamily: 'system-ui'}}>Lorem Ipsum<br /> Dolor Sit</h1>

//                     <p className="textPara" >
//                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
//                     </p>

//                     <div className="buttonStyle">
//                         <button className="loginButton" id="login">
//                             <img  src={googleIcon} className="iconFirst" />
//                             <span className="btnText">Sign In with Google</span>
//                             <img src={arrow} className="iconSecond" />
//                         </button>
//                     </div>
//                     <div class="g-signin2" data-onsuccess="onSignIn">

//                     </div>
//                 </div>

//                 <div >
//                     <img src={bgImage} className="mainImage" />
//                 </div>
//             </div>


//         </div>
        
//     );
// }
// export default DriveLogin;





// function DriveLogin(){
//     function onSignIn(res){
//         let profile = res.getBasicProfile();
//         console.log(res)
//         $('.g-signin2').css("display","none");
//     }
//     function signOut() {
//         var auth2 = gapi.auth2.getAuthInstance();
//         auth2.signOut().then(function () {
//             var auth2 = gapi.auth2.getAuthInstance();
//             auth2.signOut().then(function () {
//               console.log('User signed out.');
//             });
//         });
//         $('.signout').css('display','none');
//         $('.g-signin2').css('display','block');
//       }
//       function signOut(){
//           $('.g-signin-2').css("display","block");
//           $('.signOut').css("display","none");
//       }
//     return(
//         <>
//             <div class="g-signin2" data-onsuccess="onSignIn"></div>
//             <a href="#" class="signout" onclick="signOut()">Sign out</a>
//         </>
//     )
// }
// export default DriveLogin;





//   function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/drive.file"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//   }
//   function loadClient() {
//     gapi.client.setApiKey("AIzaSyCzx5TweiGCUP2VosC7ZelWv3X_nkqON-4");
//     return gapi.client.load("https://sheets.googleapis.com/$discovery/rest?version=v4")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   function execute() {
//     return gapi.client.sheets.spreadsheets.get({})
//         .then(function(response) {
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client:auth2", function() {
//     gapi.auth2.init({client_id: "Y177796343416-6bf8mdaop44pgc3groisonjocafnp6ju.apps.googleusercontent.com"});
//   });

// function DriveLogin(){
//     return(
//         <>
//             <button onclick="authenticate().then(loadClient)">authorize and load</button>
//             <button onclick="execute()">execute</button>
//             <script src="https://apis.google.com/js/platform.js?onload=triggerGoogleLoaded" async defer></script>
//         </>
//     )
// }
// export default DriveLogin;




