import React from 'react';
import { connectComponent, ConnectedComponent } from '../redux/connected-components';

class NavbarComponent extends ConnectedComponent {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="white">
                    <div className="nav-wrapper">
                        <span className="brand-logo left">Mike Rogers</span>
                        <ul id="nav-mobile" className="right">
                            <li>
                                <a href="sass.html">
                                    Sass
                            </a>
                            </li>
                            <li>
                                <a href="badges.html">
                                    Components
                            </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default connectComponent(NavbarComponent);
