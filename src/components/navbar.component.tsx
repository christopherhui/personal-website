/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navbar = ({ scrollPosition }: { scrollPosition: number; }) => css({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'space-evenly',
  marginRight: '10%',
  width: '100%',
  flexWrap: 'wrap',
  zIndex: 100,
  opacity: scrollPosition <= 100 ? 0.5 : 0.15,
  ':hover': {
    opacity: 0.7,
  },
  'p': {
    marginTop: '15px',
    color: 'white',
    ':hover': {
      textDecoration: 'underline white'
    }
  }
});

const Navbar = () => {

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div css={css`${navbar({ scrollPosition })}; background-color: #29539b;
    background-image: linear-gradient(315deg, #29539b 0%, #1e3b70 74%);`}>
      <Link to={`/#home`}>
        <p>Home</p>
      </Link>
      <Link to={`/#experience`}>
        <p>Experience</p>
      </Link>
      <Link to={`/#hackathons`}>
        <p>Awesome Hackathons</p>
      </Link>
      <Link to={`/#projects`}>
        <p>Heartfelt Projects</p>
      </Link>
    </div >
  );
};

export default Navbar;