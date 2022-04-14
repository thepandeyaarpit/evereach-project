import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const clientId = "177796343416-ubkpsogd24pss39javjdub4jltvoot8j.apps.googleusercontent.com";

function Login(){

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const onLoginSuccess = (res) => {

       console.log(('Login Success:', res.profileObj));
       console.log(res)
        setShowloginButton(false);
        setShowlogoutButton(true);

        saveTokenInLocalStorage(res.accessToken);

    }
    
    const saveTokenInLocalStorage = (accessToken) => {
        localStorage.setItem('accessToken', JSON.stringify(accessToken));
    }


    const onLoginFailure = (res) => {
        console.log('Login Faild', res);
    }

    const onSignoutSuccess = () => {
        alert(" you have been signin out Successfully!! ");
        setShowloginButton(true);
        setShowlogoutButton(false);
        localStorage.removeItem('accessToken');
    }

    return(
        <>
            {showloginButton ? 
            <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> :null
            }

            {showlogoutButton ? 
            <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onClick="handle"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </>
    );
}


export default Login;




// import React from 'react';
// import $ from 'jquery';

// $(document).ready( function(){
//     const clientId = "177796343416-ubkpsogd24pss39javjdub4jltvoot8j.apps.googleusercontent.com";
//     const redirect_uri = "http://localhost:3000";
//     const scope = "https://www.googleapis.com/auth/drive";
//     // alert(scope);
//     const url = "";
//     $("#login").click(function(){
//         signIn(clientId,redirect_uri,scope,url);
//     });

//     const signIn = (clientId,redirect_uri,scope,url) => {
//         url = "https://accounts.google.com/o/oauth2/v2/auth?";
//         url += encodeURI("redirect_uri="+redirect_uri +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope +"&access_type=offline");
//         console.log(url);
//         window.location = url;
//         $('#login').click(function(){
//             userDetail();
//             // console.log(code);
//         })
//     }

//     const userDetail = () => {
//         let profile = this.profileObj();
//         console.log(profile);
//         // saveTokenInLocalStorage(profile.access_token)
//     }

//     // const saveTokenInLocalStorage = (access_token) => {
//     //     localStorage.setItem('accessToken', JSON.stringify(access_token));
//     // }

// });

      

// function Login(){
//     return(
//         <>
//             <div>
//                 <button id="login" onClick="onSignIn(this)">
//                     Login with Google
//                 </button>
//             </div>
//         </>
//     );
// }

// export default Login;



