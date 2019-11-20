import React from 'react';

type PageProps = Readonly<{
    title: string
}>

export class PageComponent extends React.Component<PageProps> {
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <h1>{this.props.title}.</h1>
                </div>
                <div className="col s12">
                    {this.props.children}
                </div> 
            </div>
        );
    }
}

export default PageComponent;
