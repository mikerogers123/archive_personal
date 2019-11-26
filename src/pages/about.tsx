import React from 'react';
import { ConnectedComponent, connectComponent } from '../redux/connected-components';
import Page from './page';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from '../icons/icon';
import Timeline from '../timeline/timeline';
import TimelineElement from '../timeline/timeline-element';

export class AboutComponent extends ConnectedComponent {
    render() {
        return (
            <Page title="About">
                <Timeline>
                    <TimelineElement date="2011 - present" icon="pregnant_woman" title="Birth" subtitle="Taunton">
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </TimelineElement>
                </Timeline>
            </Page>
        );
    }
}

export default connectComponent(AboutComponent);
