/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';

const navbar = css({
  display: 'flex',
  justifyContent: 'space-evenly',
  marginTop: '3em',
  marginRight: '10%',
  marginLeft: '10%'
});

const Navbar = () => {
  return (
    <div css={navbar}>
      <p>Home</p>
      <p>Experience</p>
      <p>Awesome Hackathons</p>
      <p>Heartfelt Projects</p>
      <p></p>
    </div>
  );
};

export default Navbar;