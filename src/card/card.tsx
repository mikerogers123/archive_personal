import React from 'react';

type CardProps = Readonly<{
    description: JSX.Element,
    title: string,
    image: string
}>

export class CardComponent extends React.Component<CardProps> {
    render() {
        return (
            <div className="card hoverable">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" style={{height:"9rem"}} src={this.props.image}></img>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                        {this.props.title}<i className="material-icons right">more_vert</i>
                    </span>
                </div>
                <div className="card-reveal darkslategrey white-text">
                    <span className="card-title">
                        {this.props.title}<i className="material-icons right">close</i>
                    </span>
                    {this.props.description}
                </div>
            </div>
        );
    }
}

export default CardComponent;
