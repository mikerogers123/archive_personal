import React from 'react';

export type ButtonProps = Readonly<{link: string}>

class ButtonLinkComponent extends React.Component<ButtonProps> {
    render() {
        return (
            <a 
                href={this.props.link} 
                className="darkslategrey title-font btn-large"
                target="_blank"
                aria-label={this.props.link}
                data-tooltip={this.props.link}>
                {this.props.children}
            </a>
        );
    }
}

export default ButtonLinkComponent;
