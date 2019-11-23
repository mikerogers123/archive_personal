import React from 'react';
import { connectComponent, ConnectedComponent } from '../redux/connected-components';
 
class NavbarComponent extends ConnectedComponent {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="darkslategrey">
                    <div className="nav-wrapper">
                        <span className="brand-logo left">MIKE ROGERS</span>
                        <ul id="nav-mobile" className="right">
                            <li>
                                <span className="white darkslategrey-text">SOFTWARE ENGINEER</span>
                                {/* <a href="https://www.linkedin.com/in/michael-rogers-620836a6">Linkedin</a> */}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default connectComponent(NavbarComponent);
