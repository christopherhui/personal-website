/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Image, Button } from 'react-bootstrap';
import Timeline from './timeline.component';
import Hackathons from './hackathons.component';
import Projects from './projects.component';
import { Link } from 'react-router-dom';
import { ArrowRightSquareFill, ArrowUpCircleFill } from 'react-bootstrap-icons';
import { useSpring, useTrail, animated } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

import doge from '../assets/doge.png';
import '../styles/arrow.css';

type VisibleProps = {
  isVisible: boolean;
};

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
  min-height: 60rem;
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
  max-height: 250rem;
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

const projects = css({
  marginTop: '2em',
  marginRight: '15%',
  marginLeft: '15%',
  color: 'white',
});

const expTitle = css({
  textAlign: 'center',
});

const projectTitle = css({
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
  clear: 'both',
  marginTop: '-40px',
});

const hackathons = css({
  marginTop: '2em',
  marginRight: '12%',
  marginLeft: '12%',
  color: 'white',
});

const config = { mass: 5, tension: 2000, friction: 200, duration: 500 };
const linkConfig = { mass: 5, tension: 2000, friction: 200, duration: 100 };
const headerConfig = { mass: 5, tension: 2000, friction: 200, duration: 1000 };
const paragraphConfig = { mass: 5, tension: 2000, friction: 200, duration: 1000 };

const links = [{
  href: "https://linkedin.com/in/christophergkhui",
  src: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg",
  alt: "christophergkhui",
}, {
  href: "https://fb.com/christopher.hui.1865",
  src: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg",
  alt: "christopher.hui.1865",
}, {
  href: "https://instagram.com/its.quatchi",
  src: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg",
  alt: "its.quatchi",
}, {
  href: "https://codeforces.com/profile/htmlbot",
  src: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codeforces.svg",
  alt: "htmlbot",
}, {
  href: "https://www.leetcode.com/christopherhui",
  src: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/leetcode.svg",
  alt: "christopherhui",
}];

const WidgetSection = ({ isVisible }: VisibleProps) => {
  const widget = useTrail(links.length, {
    linkConfig,
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -1000,
    from: { opacity: 1, x: -1000 },
    delay: 1500,
  });

  return (
    <div css={socials}>
      {widget.map(({ ...rest }, index) => (
        <animated.div key={index} style={{ ...rest }}>
          <a css={css`margin-right: 1em;`} href={links[index].href}><img src={links[index].src} alt={links[index].alt} height="40" width="30" /></a>
        </animated.div>
      ))}
    </div>
  );
};

const ResumeSection = ({ isVisible }: VisibleProps) => {
  const resumeAnimation = useSpring({
    config,
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : -40,
    from: { opacity: 0, y: -40 },
    delay: 1500,
  });

  return (
    <animated.div style={resumeAnimation} css={css`${resume}; 
    @media only screen and (max-width: 500px) {
      float: none;
    }`}>
      <Link to={{ pathname: 'https://1drv.ms/b/s!Ah4MfP6FLBzUhO9Cp7OR8pT-hN4zLA?e=a5h7yg' }} target="_blank">
        <Button variant="light" size='sm' css={css`padding: .35rem 0.75rem; font-weight: bold; 
        @media only screen and (max-width: 500px) {
          margin-top: 20px;
        }`}>
          <span>View my resume</span>
          <ArrowRightSquareFill css={css`margin-left: 10px; margin-top: -3px`} />
        </Button>
      </Link>
    </animated.div>
  );
};

const ExperienceNavigateSection = ({ isVisible }: VisibleProps) => {
  const expAnimation = useSpring({
    config,
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : -40,
    from: { opacity: 0, y: -40 },
    delay: 1500,
  });

  return (
    <animated.div style={expAnimation} css={css`${aboutMargins}; margin-top: 10rem; display: flex; 
    align-items: center; justify-content: center;
    @media only screen and (max-width: 500px) {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  `}>
      <Link to='#experience'>
        <Button variant="light" size='lg'>View my experiences</Button>
        <div className="arrow bounce" />
        <div className="arrow bounce" />
      </Link>
    </animated.div>
  );
};

const AboutSection = ({ isVisible }: VisibleProps) => {
  const about = useSpring({
    config,
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : -40,
    from: { opacity: 0, y: -40 },
  });

  const header = useSpring({
    headerConfig,
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -40,
    from: { opacity: 0, x: -40 },
    delay: 500,
  });

  const body = useSpring({
    paragraphConfig,
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -40,
    from: { opacity: 0, x: -40 },
    delay: 1500,
  });

  const img = useSpring({
    paragraphConfig,
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : 40,
    from: { opacity: 0, x: 40 },
    delay: 2500,
  });

  return (
    <animated.div style={about} css={css`${aboutMe}; ${aboutMargins}; 
      background-color: #7fcec5;
      background-image: linear-gradient(315deg, #7fcec5 0%, #14557b 74%);`}>
      <div css={css`display: flex; align-items: center; flex-wrap: wrap`}>
        <div css={css`width: 83%`}>
          <animated.h1 style={header}>Hi!</animated.h1>
          <animated.p style={body}>I'm Christopher, a fourth-year Computer Science student at UBC interested in software and web development.
          I have an interest in participating in as many hackathons as possible and doing competitive programming, which I have been participating in
          for over 3 years. Some of my other interests include:
          </animated.p>
          <animated.ul style={body}>
            <li>Writing webpages using React Typescript</li>
            <li>C++ Development</li>
            <li>Creating scripts in Python</li>
          </animated.ul>
        </div>
        <animated.div style={img}>
          <Image src={doge} roundedCircle css={css`${aboutImage}; 
          background-color: #000000;
          background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);`} />
        </animated.div>
      </div>
    </animated.div>
  );
};

const Home = () => {
  return (
    <div>
      <div css={aboutMeBackground} id='#home'>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <AboutSection isVisible={isVisible} />
          )}
        </VisibilitySensor>
        <div css={bottomHeader}>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <WidgetSection isVisible={isVisible} />
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <ResumeSection isVisible={isVisible} />
            )}
          </VisibilitySensor>
        </div>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <ExperienceNavigateSection isVisible={isVisible} />
          )}
        </VisibilitySensor>
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
        <div css={projects}>
          <br />
          <h1 css={projectTitle}>Personal Projects</h1>
          <br />
          <Projects />
          <Link to={`/#home`} css={css`display: flex; margin-top: 2em; justify-content: center;`}>
            <Button variant="light" size='sm' css={css`padding: .35rem 0.75rem; font-weight: bold;`}>
              <span>Go back to the top</span>
              <ArrowUpCircleFill css={css`margin-left: 10px; margin-top: -3px`} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Home;