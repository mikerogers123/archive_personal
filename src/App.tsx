import React from 'react';
import { connectComponent, ConnectedComponent } from './redux/connected-components';
import Header from './header/header';
import Education from './pages/education';
import Experience from './pages/experience';

export class AppComponent extends ConnectedComponent {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container">
          <Education></Education>
          <Experience></Experience>
        </div>
      </div>
    );
  }
}

export default connectComponent(AppComponent);
