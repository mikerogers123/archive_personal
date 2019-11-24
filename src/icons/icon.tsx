import React from 'react';

export type Icon = 
    'file_download' |
    'send';
    
export type IconSize = 
    'tiny' |
    'medium' |
    'large' |
    'small';

type MaterialIconProps = Readonly<{
    icon: Icon,
    size?: IconSize
}>

export class MaterialIconComponent extends React.Component<MaterialIconProps> {
    get iconSize() {
        return this.props.size || 'large';
    }

    render() {
        return <i className={`material-icons ${this.iconSize}`}>{this.props.icon}</i>;
    }
}

export default MaterialIconComponent;
