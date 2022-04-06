import React, { useState, useEffect } from 'react';
import Dashboard from './dashboard';
import Login from './login';
import { BASE_URL, INBOX_URL } from "../config";
import moment from 'moment';

const Email = () => {
    let token = localStorage.getItem('token')

    const [loginData, setLoginData] = useState([]);

    useEffect(() => {

        fetch(`${BASE_URL}${INBOX_URL}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token'),
                'user': localStorage.getItem('userEmail'),
                'numberofemail': '5'
            },
        }).then(results => results.json())
            .then(data => {
                setLoginData(data)
            })

    }, [])

    return (
        <React.Fragment>
            {token ?
                (<div className='email content'>
                    
                    <header>
                        <div className='col-md-6'><h1>Inbox</h1> <span><img src={require("../images/email.jpg")} />EMAILS</span></div>
                        <div className='col-md-6'>
                            <div className='search'>
                                <div className="input-group rounded">
                                    <input type="search" className="form-control rounded" placeholder="Type to search all conversations " aria-label="Search" aria-describedby="search-addon" />
                                    <span className="input-group-text border-0" id="search-addon">
                                        <i className="fas fa-search"></i>
                                    </span>
                                </div>
                            </div>
                            <Login />
                        </div>
                    </header>
                    <p>
                        unread
                    </p>
                    {loginData.map((item) => {
                        let date = item.payload.headers.find((e) => e.name === "Received");
                        let subject = item.payload.headers.find((e) => e.name === "Subject");
                        let from = item.payload.headers.find((e) => e.name === "From");
                        let attachment = item.payload.parts[1].filename;
                      
                        
                        return (
                            <div className='emailbox' key={item.id}>

                                <div className='email-section rounded'>

                                    <div className='email-left col-md-9'>
                                        <input type="checkbox" />
                                        <span className='bot green'></span>
                                        <span className='date rounded'>
                                            <span className='big'>{moment(JSON.stringify(date.value.split(";")[1])).format("D")}</span>
                                            {moment(JSON.stringify(date.value.split(";")[1])).format("MMM")}
                                        </span>
                                        <span className='ta'>TA</span>
                                        <div className='mail-title'>
                                            <h2>{subject.value}</h2>
                                            <span>{from.value} | {moment(JSON.stringify(date.value.split(";")[1])).format("MMMM DD,YYYY, mm:ss")} | { attachment ? <p>yes</p> : ""}   </span>
                                        </div>
                                    </div>
                                    <div className='email-right col-md-3'>
                                        <span className='newproject rounded'>New Project</span>
                                        <span className='newproject rounded'>New Project</span>
                                        <span className='newproject rounded'>New Project</span>
                                        <span className='newproject rounded'>New Project</span>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                    <p>
                        read
                    </p>
                </div>
                ) : <Dashboard />}
        </React.Fragment>

    );

}

export default Email;