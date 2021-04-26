/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { Image } from 'react-bootstrap';
import { BLUE, RED } from './colors';
import doge from '../assets/doge.png';
import { ReactComponent as Coursera } from '../assets/coursera.svg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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

const expBackground = css({
  backgroundColor: 'grey'
});

const experience = css({
  marginTop: '2em',
  marginBottom: '2em',
  marginRight: '10%',
  marginLeft: '10%',
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
          <h1 css={expTitle}>Experience</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              contentStyle={{ background: '#0056d2', color: '#FFF' }}
              contentArrowStyle={{ borderRight: '7px solid  #0056d2' }}
              date="Jan 2021 - Apr 2021"
              icon={<Coursera style={{ height: 40, width: 40, marginTop: '-20px', marginLeft: '-20px' }} />}
              iconStyle={{ background: '#0056d2', color: '0056d2' }}>
              <h3>Coursera</h3>
              <h4>Software Engineer Intern</h4>
              <h4>Toronto, ON</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};


export default Home;