import React from 'react';
import Card from '../card/card';
import { ConnectedComponent, connectComponent } from '../redux/connected-components';
import UniImage from '../images/uni.jpg';
import CollegeImage from '../images/college.png';
import SchoolImage from '../images/school.jpg';

export class EducationComponent extends ConnectedComponent {
    render() {
        return (
            <div className="row">
                <div className="col s4">
                    <Card
                        description={<p>description here</p>}
                        image={UniImage}
                        title="University"
                    ></Card>
                </div>

                <div className="col s4">
                    <Card
                        description={<p>description here</p>}
                        image={CollegeImage}
                        title="A-Levels"
                    ></Card>
                </div>

                <div className="col s4">
                    <Card
                        description={<p>description here</p>}
                        image={SchoolImage}
                        title="GCSEs"
                    ></Card>
                </div>
            </div>
        );
    }
}

export default connectComponent(EducationComponent);
