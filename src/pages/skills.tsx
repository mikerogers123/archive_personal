import React from 'react';
import { ConnectedComponent, connectComponent } from '../redux/connected-components';
import Page from './page';

export class SkillsComponent extends ConnectedComponent {
    render() {
        return (
            <Page title="Skills">
            </Page>
        );
    }
}

export default connectComponent(SkillsComponent);
