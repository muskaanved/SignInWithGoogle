import React, { Component } from 'react';

class Sidebar extends Component {

    render() { 
        return (
            <div className='sidebar'>
                  <div className='d-flex flex-column flex-shrink-0 border-right ' style={{height:"100%", width: "4.5rem"}}>
                        <a href="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                           <img src={require("../images/logo.png")} />
                        </a>
                        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                            <li className="nav-item">
                                <a href="#" className="nav-link  py-3 " aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                                    <img src={require("../images/sidebar-im.jpg")} />
                                </a>
                            </li>
                           
                        </ul>
                        <div className="dropdown ">
                            <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none" id="dropdownUser3"  aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" className="rounded-circle" width="24" height="24"/>
                            </a>
                        </div>
                  </div>
            </div>
        );
    }
}
 
export default Sidebar;
