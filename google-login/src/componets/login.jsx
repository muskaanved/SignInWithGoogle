import React from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { useState } from 'react';

function Login() {

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')?
        JSON.parse(localStorage.getItem('loginData'))
        :null
      );
    
      const handleFailure = (result) => {
        console.log(result);
      }
    
      const handleLogin = async(googleData) => {
        const res = await fetch('/api/google-login',{
          method: 'POST',
          body: JSON.stringify({
            token:googleData.tokenId,
          }),
          headers:{
            'Content-Type':'application/json',
          },
        });
    
        const data = await res.json();
        setLoginData(data);
        localStorage.setItem('loginData',JSON.stringify(data));
        if(data){
        window.location.replace("/email");
        }
      }
    
      const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
        window.location.replace("/");
      };
   
    
        return (
            <React.Fragment>
        
                   
            <div className='login'>
                        {loginData ? (<div>
                        {/* <h3>you logged in as {loginData.email}</h3> */}
                        
                        <GoogleLogout className='google-login-button'
                                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                buttonText="Sign out with Google"
                                onLogoutSuccess={handleLogout}>
                                </GoogleLogout>
                        </div>): (
                            <GoogleLogin className='google-login-button'
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Sign in with Google"
                            onSuccess={handleLogin}
                            onFailure={handleFailure}
                            cookiePolicy={'single_host_origin'}>
                            </GoogleLogin>
                            )}
            </div>
                   
                
            </React.Fragment>
        );
    }

 
export default Login ;