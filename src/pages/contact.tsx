import React from 'react';
import { ConnectedComponent, connectComponent } from '../redux/connected-components';
import Page from './page';
import ButtonLink from '../buttons/button-link';
import ButtonEmail from '../buttons/button-email';

export class ContactComponent extends ConnectedComponent {
    render() {
        return (
            <Page title="Contact">
                <div className="row">
                    <div className="center-align col s12 m4">
                        <ButtonLink link="https://www.linkedin.com/in/michael-james-rogers">LinkedIn</ButtonLink>
                    </div>
                    <div className="center-align col s12 m4">
                        <ButtonLink link="https://github.com/mikerogers123">GitHub</ButtonLink>
                    </div>
                    <div className="center-align col s12 m4">
                        <ButtonEmail>Email me</ButtonEmail>
                    </div>
                </div>
            </Page>
        );
    }
}

export default connectComponent(ContactComponent);
