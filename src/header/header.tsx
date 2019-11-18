import React from 'react';
import { connectComponent, ConnectedComponent } from '../redux/connected-components';
import Title from './title';

export class HeaderComponent extends ConnectedComponent {
  render() {
    return (
      <div>
        <Title></Title>
        <hr/>
        Friday, 15th November 2019
        <hr/>
      </div>
    );
  }
}

export default connectComponent(HeaderComponent);
