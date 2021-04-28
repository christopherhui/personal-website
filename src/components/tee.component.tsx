/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type Props = {
  showTee: boolean;
  handleClose: () => void;
};

const TeeModal = ({ showTee, handleClose }: Props) => {
  return (
    <Modal show={showTee} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Teepot</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        My first virtual hackathon! I would say in-person hackathons are certainly more fun than online ones though.
      </Modal.Body>
      <Modal.Footer>
        <Link to={{ pathname: 'https://devpost.com/software/teepot' }} target="_blank">
          <Button variant="info">Devpost</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default TeeModal;