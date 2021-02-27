import React from "react";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";

import JumboTron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import nwhacks2019 from "../assets/nwhacks2019.jpg";
import nwhacks2020 from "../assets/nwhacks2020.jpg";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <JumboTron fluid style={jumbo}>
          <Container>
            <h1 style={styles.bounce}>Christopher Hui</h1>
            <p>Welcome to my site</p>
          </Container>
        </JumboTron>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={nwhacks2019} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={nwhacks2020} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const jumbo = {
  background: "steelblue",
  color: "white",
};

const styles = {
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounce, "bounce"),
  },
};
