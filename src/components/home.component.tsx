/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { Image } from 'react-bootstrap';
import { BLUE, RED } from './colors';

import { ReactComponent as Akuna } from '../assets/akuna.svg';
import { ReactComponent as Coursera } from '../assets/coursera.svg';
import { ReactComponent as Amazon } from '../assets/amazon.svg';
import { ReactComponent as Hypatia } from '../assets/hypatia.svg';
import { ReactComponent as UBC } from '../assets/ubc.svg';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import doge from '../assets/doge.png';
import nightsky from '../assets/nightsky.jpg';

const rcHomeContainer = css({
  marginTop: '3em',
});

const aboutMe = css({
  marginRight: '10%',
  marginLeft: '10%',
  background: BLUE,
  borderRadius: '0.75em',
  padding: '1em 2em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  ':hover': {
    boxShadow: `5px 5px 30px 2px ${BLUE}`,
  }
});

const aboutImage = css({
  width: '10rem',
  height: '10rem',
  padding: '0.5em',
  background: RED,
});

const intro = css({
  marginLeft: '2em',
  background: 'white',
  borderRadius: '0.75em',
  padding: '2em',
  width: '80%'
});

const expBackground = css`
  background-color: #303030;
  marginBottom: '-35px';
`;

const experience = css({
  marginTop: '2em',
  marginRight: '10%',
  marginLeft: '10%',
  color: 'white',
});

const expTitle = css({
  textAlign: 'center'
});

const Home = () => {
  return (
    <div css={rcHomeContainer}>
      <div css={aboutMe}>
        <Image src={doge} roundedCircle css={aboutImage} />
        <div css={intro}>
          <h1>Hi!</h1>
          <p>I'm Christopher, a fourth-year Computer Science student at UBC interested in software and web development.
          I have an interest in participating in as many hackathons as possible and doing competitive programming, which I have been participating
          for over 3 years. Some of my other interests include:
          </p>
          <ul>
            <li>Writing webpages using React Typescript</li>
            <li>C++ Development</li>
            <li>Creating scripts in Python</li>
          </ul>
        </div>
      </div>
      <div css={expBackground}>
        <div css={experience}>
          <br />
          <h1 css={expTitle}>Experience</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              contentStyle={{ background: '#04a5bc' }}
              contentArrowStyle={{ borderRight: '7px solid #04a5bc' }}
              date="Jan 2021 - Apr 2021"
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
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};


export default Home;