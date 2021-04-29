/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import compprog from '../assets/compprog.jpg';

const Projects = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={compprog}
          alt="Competitive Programming"
          width="1"
        />
        <Carousel.Caption>
          <h3>Competitive Programming</h3>
          <p>Participating in the ICPC, Codejam, Hackercup, Kattis and Leetcode contests.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>UBCProfs</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Projects;