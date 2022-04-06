import React from 'react';
import { handleLogin, handleLogout } from '../action/auth';

function Login() {
	return (
		<React.Fragment>
			<div className='login'>
				{localStorage.getItem("token") ? (<div>
					<button onClick={handleLogout}>Logout</button>
				</div>) : (
					<button onClick={handleLogin}>Login</button>
				)}
			</div>
		</React.Fragment>
	);
}

export default Login;
