/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { Carousel } from 'react-bootstrap';

import compprog from '../assets/compprog.jpg';
import ubcprofs from '../assets/ubcprofs.png';

const Projects = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={compprog}
          alt="Competitive Programming"
        />
        <Carousel.Caption>
          <h3>Competitive Programming</h3>
          <p>Participating in the ICPC, Codejam, Hackercup, Kattis and Leetcode contests.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ubcprofs}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 css={css`color: black`}>UBCProfs</h3>
          <p css={css`color: black`}>Created an application to let students at UBC find grade statistics of UBC professors who have taught in the past.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Projects;