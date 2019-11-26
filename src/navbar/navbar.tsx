import React from 'react';
import { connectComponent, ConnectedComponent } from '../redux/connected-components';
 
class NavbarComponent extends ConnectedComponent {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="darkslategrey">
                    <div className="nav-wrapper container">
                        <span className="brand-logo left">MIKE ROGERS</span>
                        <ul id="nav-mobile" className="right">
                            <li>
                                <span className="white darkslategrey-text">SOFTWARE ENGINEER</span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default connectComponent(NavbarComponent);
