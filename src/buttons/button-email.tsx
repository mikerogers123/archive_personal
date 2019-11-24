import React from 'react';
import ButtonLink from './button-link';
import Icon from '../icons/icon';

const myEmail = "mikerogers_@hotmail.co.uk";

class ButtonEmailComponent extends React.Component {
    get href() {
        return "mailto:" + myEmail;
    }

    render() {
        return (
            <ButtonLink link={this.href}>
                Email me
            </ButtonLink>
        );
    }
}

export default ButtonEmailComponent;
