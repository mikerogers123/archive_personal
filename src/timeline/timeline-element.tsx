import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {default as IconComponent, Icon} from '../icons/icon';

export type TimelineElementProps = Readonly<{
    icon: Icon,
    title: string,
    subtitle: string,
    date: string
}>;

export class TimelineElementComponent extends React.Component<TimelineElementProps> {
    render() {
        return (<VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'lightgray', color: 'darkslategrey' }}
            contentArrowStyle={{ borderRight: '7px solid lightgray' }}
            date={this.props.date}
            iconStyle={{ background: 'white', color: 'darkslategrey' }}
            icon={<IconComponent icon={this.props.icon} size="medium"></IconComponent>}
        >
            <h3 className="vertical-timeline-element-title">{this.props.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{this.props.subtitle}</h4>
            {this.props.children}
        </VerticalTimelineElement>);
    }
}

export default TimelineElementComponent;
