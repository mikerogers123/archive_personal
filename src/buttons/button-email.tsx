import React from 'react';
import ButtonLink from './button-link';

const myEmail = "mikerogers_@hotmail.co.uk";

class ButtonEmailComponent extends React.Component {
    get href() {
        return "mailto:" + myEmail;
    }

    render() {
        return (
            <ButtonLink link={this.href}>
                {this.props.children}
            </ButtonLink>
        );
    }
}

export default ButtonEmailComponent;
