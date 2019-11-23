import React from 'react';

export type Icon = 
    'file_download';

type MaterialIconProps = Readonly<{
    icon: Icon
}>

export class MaterialIconComponent extends React.Component<MaterialIconProps> {
    render() {
        return <i className="large material-icons">{this.props.icon}</i>;
    }
}

export default MaterialIconComponent;
