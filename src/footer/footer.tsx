import React from 'react';
import { ConnectedComponent, connectComponent } from '../redux/connected-components';

class FooterComponent extends ConnectedComponent {
    render() {
        return (
            <footer className="page-footer darkslategrey white-text">
                <div className="container">
                    Footer
                </div>
            </footer>
        );
    }
}

export default connectComponent(FooterComponent);
