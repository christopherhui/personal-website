/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { Modal, Image, Button } from 'react-bootstrap';

import nwhacks2021 from '../assets/nwhacks2021.jpg';

type Props = {
  showBear: boolean;
  handleClose: () => void;
};

const image = css`
  transform: scale(1);
`;

const BearModal = ({ showBear, handleClose }: Props) => {
  return (
    <Modal show={showBear} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Bear Buddies</Modal.Title>
      </Modal.Header>
      <Image src={nwhacks2021} css={image} />
      <Modal.Body>
        This was my third time participating in nwHacks as part of a seemingly ongoing tradition that I partake in it every year.
        However, having this year having it be virtual had made it especially more interesting because collaboration was much more challenging.
        Unlike my previous years, I worked with a new team, which I absolutely loved! I hope to participate in more hackathons with them in the future.
        <br />
        <br />
        Also Lina if you are reading this, I'm glad we got to meet each other this way!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info">Devpost</Button>
        <Button variant="primary">See the app!</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BearModal;