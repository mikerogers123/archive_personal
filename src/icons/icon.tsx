import React from 'react';

export type Icon = 'file_download';

type IconProps = Readonly<{
    icon: Icon
}>

export class IconComponent extends React.Component<IconProps> {
    render() {
        return <i className="large material-icons">{this.props.icon}</i>;
    }
}

export default IconComponent;
