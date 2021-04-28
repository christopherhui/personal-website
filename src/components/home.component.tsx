/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { Image, Button } from 'react-bootstrap';
import Timeline from './timeline.component';
import Hackathons from './hackathons.component';
import { Link } from 'react-router-dom';
import { ArrowRightSquareFill } from 'react-bootstrap-icons';

import doge from '../assets/doge.png';
import '../styles/arrow.css';

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
  color: 'white',
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
  marginLeft: '1em'
});

const expBackground = css`
  background-color: #6a93cb;
  background-image: linear-gradient(315deg, #6a93cb 0%, #a4bfef 74%);
  margin-bottom: -32px;
`;

const hackathonBackground = css`
  min-height: 50rem;
  max-height: 150rem;
  background-color: #21d190;
  background-image: linear-gradient(315deg, #21d190 0%, #d65bca 74%);
  margin-bottom: -35px;
`;

const projectBackground = css`
  min-height: 50rem;
  max-height: 150rem;
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
  textAlign: 'center',
});

const bottomHeader = css({
  marginTop: '1.5em',
  marginRight: '10%',
  marginLeft: '10%',
});

const socials = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  width: '50%',
  float: 'left',
});

const resume = css({
  float: 'right',
});

const hackathons = css({
  marginTop: '2em',
  marginRight: '12%',
  marginLeft: '12%',
  color: 'white',
});

const Home = () => {
  return (
    <div>
      <div css={aboutMeBackground} id='#home'>
        <div css={css`${aboutMe}; ${aboutMargins}; 
          background-color: #7fcec5;
          background-image: linear-gradient(315deg, #7fcec5 0%, #14557b 74%);`}>
          <div css={css`display: flex; align-items: center; flex-wrap: wrap`}>
            <div css={css`width: 83%`}>
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
            <Image src={doge} roundedCircle css={css`${aboutImage}; 
                background-color: #000000;
                background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);`} />
          </div>
        </div>
        <div css={bottomHeader}>
          <div css={socials}>
            <a href="https://linkedin.com/in/christophergkhui" target="blank"><img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="christophergkhui" height="30" width="40" /></a>
            <a href="https://fb.com/christopher.hui.1865" target="blank"><img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" alt="christopher.hui.1865" height="30" width="40" /></a>
            <a href="https://instagram.com/its.quatchi" target="blank"><img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="its.quatchi" height="30" width="40" /></a>
            <a href="https://codeforces.com/profile/htmlbot" target="blank"><img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codeforces.svg" alt="htmlbot" height="30" width="40" /></a>
            <a href="https://www.leetcode.com/christopherhui" target="blank"><img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/leetcode.svg" alt="christopherhui" height="30" width="40" /></a>
          </div>
          <div css={resume}>
            <Button variant="light" size='sm' css={css`padding: .35rem 0.75rem; font-weight: bold;`}>
              <span>View my resume</span>
              <ArrowRightSquareFill css={css`margin-left: 10px; margin-top: -3px`} />
            </Button>
          </div>
          <div css={css`clear: both`} />
        </div>
        <div css={css`${aboutMargins}; display: flex; align-items: center; justify-content: center;`}>
          <Link to='#experience'>
            <Button variant="light" size='lg'>View my experiences </Button>
            <div className="arrow bounce" />
            <div className="arrow bounce" />
          </Link>
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
        <div css={hackathons}>
          <br />
          <h1 css={expTitle}>Hackathon Experiences</h1>
          <Hackathons />
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