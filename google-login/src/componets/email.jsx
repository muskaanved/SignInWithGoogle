import React, { Component } from 'react';
import Dashboard from './dashboard';
import Login from './login';
import data from "../data";

class Email extends Component {
    
    render() { 
        console.log(data,"dada")
        return (
            <React.Fragment>
                 {localStorage.getItem('loginData') ?
                (<div className='email content'>
                    <header>
                        <div className='col-md-6'><h1>Inbox</h1> <span><img src={require("../images/email.jpg")} />EMAILS</span></div>
                        <div className='col-md-6'>
                            <div className='search'>
                                <div class="input-group rounded">
                                    <input type="search" class="form-control rounded" placeholder="Type to search all conversations " aria-label="Search" aria-describedby="search-addon" />
                                    <span class="input-group-text border-0" id="search-addon">
                                        <i class="fas fa-search"></i>
                                    </span>

                                </div>
                            </div>
                            <Login/>
                        </div>
                    </header>
                    {data.map((item)=>{
                        return(
                        <div className='emailbox'>
                        {item.payload.headers.map((headerItem)=>{
                            return(
                                <div className='email-section rounded'>
                            {console.log(headerItem,"ttttt")} 
                           <div className='email-left col-md-9'>
                                <input type="checkbox" />
                                <span className='bot green'></span>
                                <span className='date rounded'>
                                    <span className='big'>{item.name == "Received" ? "5" :"77"}</span>
                                    Jan
                                </span>
                                <span className='ta'>TA</span>
                                <div className='mail-title'>
                                    <h2>Fwd: New project 3 {10707/1715}</h2>
                                    <span>Leo sub@gmail.com | January 12,2022 at 3:45PM |  </span>
                                </div>
                            </div>
                            <div className='email-right col-md-3'>
                                   <span className='newproject rounded'>New Project</span>
                                   <span className='newproject rounded'>New Project</span>
                                   <span className='newproject rounded'>New Project</span>
                                   <span className='newproject rounded'>New Project</span>
                            </div>    
                        </div>
                        )})}
                    </div>
                     )})}
                </div>
                ): <Dashboard/> }
            </React.Fragment>    

        );
    }
}
 
export default Email;