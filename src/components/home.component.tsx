import React from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import JumboTron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container"

export default class Home extends React.Component {
  render() {
    return (
      <div className="mt-5 ml-5">
        <JumboTron fluid style={jumbo}>
          <Container>
            <h1 style={styles.bounce}>Christopher Hui</h1>
            <p>Welcome to my site</p>
          </Container>
        </JumboTron>
      </div>
    );
  }
}

const jumbo = {
  background: 'steelblue',
  color: 'white'
}

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}
