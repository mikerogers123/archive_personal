import React from 'react';
import { connectComponent, ConnectedComponent } from './redux/connected-components';
import Header from './header/header';
import Education from './education/education';

export class AppComponent extends ConnectedComponent {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <Education></Education>
      </div>
    );
  }
}

export default connectComponent(AppComponent);
