/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';

const navbar = css({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'space-evenly',
  marginRight: '10%',
  width: '100%',
  color: 'white',
  flexWrap: 'wrap',
  zIndex: 100,
  opacity: 0.7,
  'p': {
    marginTop: '15px',
    opacity: 1,
  }
});

const Navbar = () => {
  return (
    <div css={css`${navbar}; background-color: #29539b;
    background-image: linear-gradient(315deg, #29539b 0%, #1e3b70 74%);`}>
      <p>Home</p>
      <p>Experience</p>
      <p>Awesome Hackathons</p>
      <p>Heartfelt Projects</p>
    </div>
  );
};

export default Navbar;