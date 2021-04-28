/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type Props = {
  showNono: boolean;
  handleClose: () => void;
};

const NoNoModal = ({ showNono, handleClose }: Props) => {
  return (
    <Modal show={showNono} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Nonononotifications</Modal.Title>
      </Modal.Header>
      <iframe
        src={`https://www.youtube.com/embed/439Ik6CvTo4?start=5730`}
        height={540}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <Modal.Body>
        First time at a joke hackathon. Was fun working on something really casual.
      </Modal.Body>
      <Modal.Footer>
        <Link to={{ pathname: 'https://devpost.com/software/nonononotifications' }} target="_blank">
          <Button variant="info">Devpost</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default NoNoModal;