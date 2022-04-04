import React, { Component } from 'react';

class Sidebar extends Component {
   
    render() { 
        return (
            <div className='sidebar'>
                  <div className='d-flex flex-column flex-shrink-0 border-right ' style={{height:"100%", width: "4.5rem"}}>
                        <a href="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                            <span className="visually-hidden">Icon-only</span>
                        </a>
                        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                            <li className="nav-item">
                                <a href="#" className="nav-link  py-3 " aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                                <svg className="bi" width="24" height="24" role="img" aria-label="Home"></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 " title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                <svg className="bi" width="24" height="24" role="img" aria-label="Dashboard"></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 " title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                                <svg className="bi" width="24" height="24" role="img" aria-label="Orders"></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 " title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                                <svg className="bi" width="24" height="24" role="img" aria-label="Products"></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 " title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                                <svg className="bi" width="24" height="24" role="img" aria-label="Customers"></svg>
                                </a>
                            </li>
                        </ul>
                        <div className="dropdown ">
                            <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" className="rounded-circle" width="24" height="24"/>
                            </a>
                        </div>
                  </div>
            </div>
        );
    }
}
 
export default Sidebar;
