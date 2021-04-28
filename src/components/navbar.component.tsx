/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const navbar = css({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'space-evenly',
  marginRight: '10%',
  width: '100%',
  flexWrap: 'wrap',
  zIndex: 100,
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

let prevScrollPosition = 0.0;

const Navbar = () => {

  const [scrollUp, setScrollUp] = useState<boolean>(true);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > prevScrollPosition) {
      setScrollUp(false);
    }
    else {
      setScrollUp(true);
    }
    prevScrollPosition = position;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeStyles = useSpring({
    from: { opacity: 0.7 },
    to: { opacity: scrollUp ? 0.7 : 0 },
  });

  return (
    <animated.div style={fadeStyles} css={css`${navbar}; background-color: #29539b;
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
    </animated.div >
  );
};

export default Navbar;;