import React from 'react';
import { ConnectedComponent, connectComponent } from '../redux/connected-components';
import Page from './page';
import Card from '../card/card-flip';

export class SkillsComponent extends ConnectedComponent {
    render() {
        return (
            <Page title="Skills">
                <Card front={<p>Hello</p>} back={<p>Hello</p>}></Card>
            </Page>
        );
    }
}

export default connectComponent(SkillsComponent);
