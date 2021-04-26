/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { Image } from 'react-bootstrap';
import { BLUE, RED } from './colors';
import Timeline from './timeline.component';

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

const aboutMeBackground = css({
  height: '100vh',
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
      <div css={aboutMeBackground}>
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
      </div>
      <div css={expBackground}>
        <div css={experience}>
          <br />
          <h1 css={expTitle}>Experience</h1>
          <Timeline />
        </div>
      </div>
    </div>
  );
};


export default Home;