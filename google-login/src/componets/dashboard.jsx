import React from 'react';
import Login from './login';

const Dashboard = () => {
    return (
        <React.Fragment>

            <div className='content-before-login content'>
                <div className='google-login'>
                    <h3>AFFIDAVITS & RFI</h3>
                    <h2> Looks like you're not yet connected with your Google Account </h2>
                    <span>Lets make your trip fun and simple</span>
                </div>
                <Login />
            </div>
        </React.Fragment>
    );

}

export default Dashboard;