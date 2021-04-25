/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { Image } from 'react-bootstrap';
import doge from '../assets/doge.png';

const rcHomeContainer = css({
  marginTop: '3em',
  marginRight: '10%',
  marginLeft: '10%'
});

const aboutMe = css({
  background: 'steelblue',
  borderRadius: '1em',
  boxShadow: '10px 10px 100px 5px steelblue'
});

const aboutImage = css({
  width: '10rem',
  height: '10rem',
  padding: '0.5em',
});

const Home = () => {
  return (
    <div css={rcHomeContainer}>
      <div css={aboutMe}>
        <Image src={doge} roundedCircle css={aboutImage} />
      </div>
    </div>
  );
};


export default Home;