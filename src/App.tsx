import React from 'react';
import { connectComponent, ConnectedComponent } from './redux/connected-components';
import Education from './pages/education';
import Experience from './pages/experience';
import CvDownload from './cv-download/cv-download';
import Navbar from './navbar/navbar';

export class AppComponent extends ConnectedComponent {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
            <Education></Education>
            <Experience></Experience>
        </div>
        <CvDownload></CvDownload>
      </div>
    );
  }
}

export default connectComponent(AppComponent);
