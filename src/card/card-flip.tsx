import React from 'react';
import './card-flip.css';

type CardFlipProps = Readonly<{
    front: JSX.Element,
    back: JSX.Element
}>

export class CardFlipComponent extends React.Component<CardFlipProps> {
    render() {
        return (
            <div className="card-flip z-depth-2">
                <div className="content">
                    <div className="front">{this.props.front}</div>
                    <div className="back">{this.props.back}</div>
                </div>
            </div>
        );
    }
}

export default CardFlipComponent;
