/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import nwhacks2019 from '../assets/nwhacks2019.jpg';

type Props = {
  showProf: boolean;
  handleClose: () => void;
};

const image = css`
  transform: scale(1);
`;

const ProfModal = ({ showProf, handleClose }: Props) => {
  return (
    <Modal show={showProf} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>ProfStats</Modal.Title>
      </Modal.Header>
      <Image src={nwhacks2019} css={image} />
      <Modal.Body>
        This was my second hackathon I've completed and it was one of the times I had to deal with beautifulsoup and creating REST apis.
        Definitely a fun experience for the late night grind!
      </Modal.Body>
      <Modal.Footer>
        <Link to={{ pathname: 'https://devpost.com/software/profstats' }} target="_blank">
          <Button variant="info">Devpost</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfModal;