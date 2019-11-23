import React from 'react';
import { ConnectedComponent, connectComponent } from '../redux/connected-components';
import Page from './page';

export class ContactComponent extends ConnectedComponent {
    render() {
        return (
            <Page title="Contact">
            </Page>
        );
    }
}

export default connectComponent(ContactComponent);
