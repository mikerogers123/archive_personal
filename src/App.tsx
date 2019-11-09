import React from 'react';
import './App.css';
import { connectComponent, ConnectedComponent } from './redux/connected-components';

export class AppComponent extends ConnectedComponent {
  render() {
      return <p>{this.storeState.title}</p>;
  }
}

export default connectComponent(AppComponent);
