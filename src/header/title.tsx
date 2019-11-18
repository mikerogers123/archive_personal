import React from 'react';
import { connectComponent, ConnectedComponent } from '../redux/connected-components';

export class TitleComponent extends ConnectedComponent {
  render() {
    return <h1>{this.storeState.title}</h1>;
  }
}

export default connectComponent(TitleComponent);
