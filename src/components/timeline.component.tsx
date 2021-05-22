/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';

import { ReactComponent as Akuna } from '../assets/akuna.svg';
import { ReactComponent as Coursera } from '../assets/coursera.svg';
import { ReactComponent as Amazon } from '../assets/amazon.svg';
import { ReactComponent as Hypatia } from '../assets/hypatia.svg';
import { ReactComponent as UBC } from '../assets/ubc.svg';
import { ReactComponent as Teradici } from '../assets/teradici.svg';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (<VerticalTimeline>
    <VerticalTimelineElement
      contentStyle={{ background: '#04a5bc' }}
      contentArrowStyle={{ borderRight: '7px solid #04a5bc' }}
      date="Starting in June 2021"
      icon={<Akuna style={{ height: 40, width: 40, marginTop: '-20px', marginLeft: '-20px' }} />}
      iconStyle={{ background: '#f3f3f3' }}>
      <h3>Akuna Capital</h3>
      <h4>Software Engineer Intern</h4>
      <h4>Chicago, IL</h4>
      <p>
        Doing some sort of C++ Development there.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      contentStyle={{ background: '#0056d2' }}
      contentArrowStyle={{ borderRight: '7px solid #0056d2' }}
      date="Jan 2021 - Apr 2021"
      icon={<Coursera style={{ height: 40, width: 40, marginTop: '-20px', marginLeft: '-20px' }} />}
      iconStyle={{ background: '#0056d2', color: '#0056d2' }}>
      <h3>Coursera</h3>
      <h4>Software Engineer Intern</h4>
      <h4>Toronto, ON</h4>
      <p>
        Frontend Developer on the Enterprise: Coursera for Campus team.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      contentStyle={{ background: '#f9a51b' }}
      contentArrowStyle={{ borderRight: '7px solid #f9a51b' }}
      date="Sep 2020 - Dec 2020"
      icon={<Amazon style={{ height: 40, width: 40, marginTop: '-20px', marginLeft: '-20px' }} />}
      iconStyle={{ background: '#231f20', color: '#f9a51b' }}>
      <h3>Amazon</h3>
      <h4>Software Development Engineer Intern</h4>
      <h4>Vancouver, BC</h4>
      <p>
        Backend Developer on the Nova Data Services team.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      contentStyle={{ background: 'white', color: '#1b89d1' }}
      contentArrowStyle={{ borderRight: '7px solid white' }}
      date="May 2020 - Jul 2020"
      icon={<Hypatia style={{ height: 40, width: 40, marginTop: '-20px', marginLeft: '-20px' }} />}
      iconStyle={{ background: 'white', color: 'white' }}>
      <h3>Hypatia Systems</h3>
      <h4>Software Developer Intern</h4>
      <h4>Vancouver, BC</h4>
      <p>
        Backend Developer working on the Electron application for creating an automated autograding and equation similarity system.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      contentStyle={{ background: '#00053d' }}
      contentArrowStyle={{ borderRight: '7px solid #00053d' }}
      date="Sep 2019 - Dec 2019"
      icon={<UBC style={{ height: 40, width: 40, marginTop: '-20px', marginLeft: '-20px' }} />}
      iconStyle={{ background: '#00053d', color: '#00053d' }}>
      <h3>University of British Columbia</h3>
      <h4>Teaching Assistant</h4>
      <h4>Vancouver, BC</h4>
      <p>
        Teaching assistant for CPSC 213: Introduction to Computer Systems.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      contentStyle={{ background: '#0098ce' }}
      contentArrowStyle={{ borderRight: '7px solid #0098ce' }}
      date="May 2019 - Aug 2019"
      icon={<Teradici style={{ height: 40, width: 40, marginTop: '-20px', marginLeft: '-20px' }} />}
      iconStyle={{ background: 'white', color: 'white' }}>
      <div style={{ color: '#f5fbfc' }}>
        <h3>Teradici</h3>
        <h4>Software Development Intern</h4>
        <h4>Vancouver, BC</h4>
        <p>
          Firmware developer on the Zero Client team.
        </p>
      </div>
    </VerticalTimelineElement>
  </VerticalTimeline>);
};

export default Timeline;