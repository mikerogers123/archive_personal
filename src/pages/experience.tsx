import React from 'react';
import Card from '../card/card';
import { ConnectedComponent, connectComponent } from '../redux/connected-components';
import BudImage from '../images/bud.jpg';
import CivicaImage from '../images/civica.jpeg';
import UkhoImage from '../images/ukho.png';
import Page from './page';

export class ExperienceComponent extends ConnectedComponent {
    render() {
        return (
            <Page title="Experience">
                <div className="row">
                    <div className="col s12 m4">
                        <Card
                            description={<p>description here</p>}
                            image={UkhoImage}
                            title="UKHO"
                        ></Card>
                    </div>

                    <div className="col s12 m4">
                        <Card
                            description={<p>description here</p>}
                            image={BudImage}
                            title="Bud"
                        ></Card>
                    </div>

                    <div className="col s12 m4">
                        <Card
                            description={<p>description here</p>}
                            image={CivicaImage}
                            title="Civica"
                        ></Card>
                    </div>
                </div>
            </Page>
        );
    }
}

export default connectComponent(ExperienceComponent);
