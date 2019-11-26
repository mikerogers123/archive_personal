import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export class TimelineComponent extends React.Component {
    render() {
        return <VerticalTimeline>{this.props.children}</VerticalTimeline>;
    }
}

export default TimelineComponent;
