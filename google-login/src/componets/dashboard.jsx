import React, { Component } from 'react';
import Login from './login';
import Sidebar from './sidebar';
class Dashboard extends Component {
    
    render() { 
        return (
            <React.Fragment>
                <div className='sidebar'>
                     <Sidebar/> 
                </div>
                <div className='content-before-login content'>
                     <div className='google-login'>
                         <h3>AFFIDAVITS & RFI</h3>
                         <h2> Looks like you're not yet connected with your Google Account </h2>
                         <span>Lets make your trip fun and simple</span>
                     </div>
                    <Login/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Dashboard;