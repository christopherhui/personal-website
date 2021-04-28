/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import nwhacks2020 from '../assets/nwhacks2020.jpg';

type Props = {
  showChroniclr: boolean;
  handleClose: () => void;
};

const image = css`
  transform: scale(1);
`;

const ChroniclrModal = ({ showChroniclr, handleClose }: Props) => {
  return (
    <Modal show={showChroniclr} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Chroniclr</Modal.Title>
      </Modal.Header>
      <Image src={nwhacks2020} css={image} />
      <Modal.Body>
        Back at it for another round I guess. Same team, stronger ability.
      </Modal.Body>
      <Modal.Footer>
        <Link to={{ pathname: 'https://devpost.com/software/chroniclr' }} target="_blank">
          <Button variant="info">Devpost</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ChroniclrModal;