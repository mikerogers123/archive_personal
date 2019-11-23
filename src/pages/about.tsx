import React from 'react';
import { ConnectedComponent, connectComponent } from '../redux/connected-components';
import Page from './page';

export class AboutComponent extends ConnectedComponent {

    render() {
        return (
            <Page title="About">

            </Page>
        );
    }
}

export default connectComponent(AboutComponent);
