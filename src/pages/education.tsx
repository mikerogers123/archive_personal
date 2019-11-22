import React from 'react';
import Card from '../card/card';
import { ConnectedComponent, connectComponent } from '../redux/connected-components';
import UniImage from '../images/uni.png';
import CollegeImage from '../images/college.png';
import SchoolImage from '../images/school.jpg';
import Page from './page';

export class EducationComponent extends ConnectedComponent {
    render() {
        return (
            <Page title="Education">
                <div className="row">
                    <div className="col s12 m4">
                        <Card
                            description={<p>description here</p>}
                            image={UniImage}
                            title="University"
                        ></Card>
                    </div>

                    <div className="col s12 m4">
                        <Card
                            description={<p>description here</p>}
                            image={CollegeImage}
                            title="A-Levels"
                        ></Card>
                    </div>

                    <div className="col s12 m4">
                        <Card
                            description={<p>description here</p>}
                            image={SchoolImage}
                            title="GCSEs"
                        ></Card>
                    </div>
                </div>
            </Page>
        );
    }
}

export default connectComponent(EducationComponent);
