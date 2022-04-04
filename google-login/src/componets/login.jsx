import React, { Component } from 'react';
import Sidebar from './sidebar';

class Login  extends Component {
   
    render() { 
        return (
            <React.Fragment>
                <div className='sidebar'>
                   <Sidebar/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Login ;