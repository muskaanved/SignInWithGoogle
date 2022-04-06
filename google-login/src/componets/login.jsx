import React from 'react';
import { handleLogin, handleLogout } from '../action/auth';

function Login() {
	return (
		<React.Fragment>
			
				{localStorage.getItem("token") ? (
					<button className='btn-login' onClick={handleLogout}><img src={require("../images/signout.jpg")}/></button>
				) : (
					<button className='btn-login' onClick={handleLogin}><img src={require("../images/signin.jpg")}/></button>
				)}
			
		</React.Fragment>
	);
}

export default Login;
