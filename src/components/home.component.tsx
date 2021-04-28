/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { Image, Button } from 'react-bootstrap';
import { BLUE } from './colors';
import Timeline from './timeline.component';
import { Link } from 'react-router-dom';

import doge from '../assets/doge.png';

const aboutMargins = css({
  marginTop: '5rem',
  marginRight: '10%',
  marginLeft: '10%',
});

const aboutMe = css({
  borderRadius: '0.75em',
  padding: '1em 2em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  ':hover': {
    boxShadow: `5px 5px 30px 2px #0056d2`,
  }
});

const aboutMeBackground = css`
  background-color: #eec0c6;
  background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);
  margin-bottom: -50px;
  overflow: hidden;
  min-height: 50rem;
  max-height: 150rem;
`;

const aboutImage = css({
  width: '10rem',
  height: '10rem',
  padding: '0.5em',
  background: '#	292825',
});

const intro = css({
  marginLeft: '2em',
  background: BLUE,
  borderRadius: '0.75em',
  padding: '2em',
  width: '80%',
  color: 'white'
});

const expBackground = css`
  background-color: #6a93cb;
  background-image: linear-gradient(315deg, #6a93cb 0%, #a4bfef 74%);
  margin-bottom: -32px;
`;

const hackathonBackground = css`
  height: 500px;
  background-color: #21d190;
  background-image: linear-gradient(315deg, #21d190 0%, #d65bca 74%);
  margin-bottom: -35px;
`;

const projectBackground = css`
  height: 500px;
  background-color: #537895;
  background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
  margin-bottom: -35px;
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
    <div>
      <div css={aboutMeBackground} id='#home'>
        <div css={css`${aboutMe}; ${aboutMargins}; 
          background-color: #485461;
          background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);`}>
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
        <div css={css`${aboutMargins}; display: flex; align-items: center; justify-content: center;`}>
          <Button variant="outline-primary" size="lg">View my experiences</Button>
        </div>
      </div>
      <div css={expBackground} id='#experience'>
        <div css={experience}>
          <br />
          <h1 css={expTitle}>Experience</h1>
          <Timeline />
        </div>
      </div>
      <div css={hackathonBackground} id='#hackathons'>
        <div css={experience}>
          <br />
          <h1 css={expTitle}>Hackathon Experiences</h1>
        </div>
      </div>
      <div css={projectBackground} id='#projects'>
        <div css={experience}>
          <br />
          <h1 css={expTitle}>Personal Projects</h1>
        </div>
      </div>
    </div>
  );
};


export default Home;