
<!-- 

Client id = 177796343416-6bf8mdaop44pgc3groisonjocafnp6ju.apps.googleusercontent.com
Client secret = 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



https://accounts.google.com/o/oauth2/v2/auth?
 scope=https://mail.google.com&
 access_type=offline&
 include_granted_scopes=true&
 state=state_parameter_passthrough_value&
 redirect_uri=http://localhost/&
 response_type=code&
 client_id=177796343416-bchrogih68b10pqkghoheqghh459g7qu.apps.googleusercontent.com


https://localhost/?state=state_parameter_passthrough_value&code=4/0AX4XfWgJw3w8WiRwbEOe8RkcaBROP-xp2m6W0ZFcaCFSncdMh_TKlszP-sn48W9veDxa9A&scope=https://mail.google.com/


POST /token HTTP/1.1
Host: oauth2.googleapis.com
Content-Type: application/x-www-form-urlencoded

code=4/0AX4XfWgJw3w8WiRwbEOe8RkcaBROP-xp2m6W0ZFcaCFSncdMh_TKlszP-sn48W9veDxa9A&
client_id=177796343416-6bf8mdaop44pgc3groisonjocafnp6ju.apps.googleusercontent.com&
client_secret=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&
redirect_uri=http://localhost/&
grant_type=authorization_code

 -->


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)










<!-- Drive Login -->



<!-- 
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
var code = 'urlencode';
var access_type = 'offline';
// var grant_type='authorization_code';
// var response_type = code;

function DriveLogin(){
    
    const test=()=>{
        
        window.gapi.auth2.authorize({ 
            client_id: client_id, scope: scope, immediate: immediate, access_type: access_type, api_key: api_key, client_secret: client_secret, code: code },
            authResult => {
                console.log(authResult);
                if (authResult && !authResult.error) {
                    localStorage.setItem("token",authResult.access_token)
                    console.log('success');
                } else {
                    console.log('error');
                }
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

var client;
window.gapi.load('client',()=>{
    var access_token = localStorage.getItem("token")
    client =window.gapi.client;
   if (access_token.length>0){
       client.init({"client_id":client_id,"scope":scope,"client_secret": client_secret});
  
       client.setToken({"access_token":access_token});
       console.log(client);
   }else{
       console.log("login")
       //send to dashboard
   }
});
window.gapi.load('drive',()=>{
    client.drive.files.list({
     mimeType:"application/vnd.google-apps.spreadsheet"
    }).then((v)=>{
        console.log(v);
    });

});

var initClient = function(){
    var access_token = localStorage.getItem("token")
     client =window.gapi.client;
    if (access_token.length>0){
        client.init({"client_id":client_id,"scope":scope,"client_secret": client_secret});
   
        client.setToken({"access_token":access_token});
    }else{
        console.log("login")
        //send to dashboard
    }
};
  
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




 -->"# evereach-project" 
