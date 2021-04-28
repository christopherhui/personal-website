/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import dubhacks2019 from '../assets/dubhacks2019.jpg';

type Props = {
  showCharge: boolean;
  handleClose: () => void;
};

const image = css`
  transform: scale(1);
`;

const ChargeModal = ({ showCharge, handleClose }: Props) => {
  return (
    <Modal show={showCharge} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>chargeUP</Modal.Title>
      </Modal.Header>
      <Image src={dubhacks2019} css={image} />
      <Modal.Body>
        Alright the building we were hacking at in the University of Washington is seriously uncomparable to any of the buildings I have seen at UBC. The amount of sponsors
        and the amount of funding this hackathon gets is seriously underrated. I had a great time hacking and enjoying
        their downstairs bowling alley and ping pong tables. Really wish to go again in person in 2021!
      </Modal.Body>
      <Modal.Footer>
        <Link to={{ pathname: 'https://devpost.com/software/chargeup' }} target="_blank">
          <Button variant="info">Devpost</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ChargeModal;