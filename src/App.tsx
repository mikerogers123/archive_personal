import React from 'react';
import { connectComponent, ConnectedComponent } from './redux/connected-components';
import Education from './pages/education';
import Experience from './pages/experience';
import About from './pages/about';
import Contact from './pages/contact';
import Skills from './pages/skills';
import CvDownload from './cv-download/cv-download';
import Navbar from './navbar/navbar';

export class AppComponent extends ConnectedComponent {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
            <About></About>
            <Skills></Skills>
            <Experience></Experience>
            <Education></Education>
            <Contact></Contact>
        </div>
        <CvDownload></CvDownload>
      </div>
    );
  }
}

export default connectComponent(AppComponent);
