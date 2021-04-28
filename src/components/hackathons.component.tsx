/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

import BearModal from './bearmodal.component';
import ChargeModal from './charge.component';
import ChroniclrModal from './chroniclrmodal.component';
import ProfModal from './profstats.component';
import NoNoModal from './nonomodal.component';

import bearBuddies from '../assets/bearbuddies.png';
import chargeUP from '../assets/chargeUP.png';
import chroniclr from '../assets/chroniclr.png';
import profStats from '../assets/profStats.png';
import teepot from '../assets/teepot.png';
import nonononotifications from '../assets/nonononotifications.png';
import TeeModal from './tee.component';

const hackathonCards = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const hackathonCard = css({
  width: '20rem',
  color: 'white',
  border: 'none',
  margin: '2em',
});

const defaultCardBackground = css`
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
`;

const altCardBackground = css`
  background-color: #91d370;
  background-image: linear-gradient(319deg, #91d370 0%, #bca0ff 37%, #f2cd54 100%);
`;

const cardText = css({
  marginBottom: '3em',
});

const moreInfoButton = css({
  position: 'absolute',
  left: 20,
  bottom: 20,
});

const Hackathons = () => {
  const [showBear, setShowBear] = useState<boolean>(false);
  const [showCharge, setShowCharge] = useState<boolean>(false);
  const [showChroniclr, setShowChroniclr] = useState<boolean>(false);
  const [showProf, setShowProf] = useState<boolean>(false);
  const [showTee, setShowTee] = useState<boolean>(false);
  const [showNoNo, setShowNoNo] = useState<boolean>(false);

  return (
    <div css={hackathonCards}>
      <BearModal showBear={showBear} handleClose={() => setShowBear(false)} />
      <ChargeModal showCharge={showCharge} handleClose={() => setShowCharge(false)} />
      <ChroniclrModal showChroniclr={showChroniclr} handleClose={() => setShowChroniclr(false)} />
      <ProfModal showProf={showProf} handleClose={() => setShowProf(false)} />
      <TeeModal showTee={showTee} handleClose={() => setShowTee(false)} />
      <NoNoModal showNono={showNoNo} handleClose={() => setShowNoNo(false)} />
      <Card css={css`${hackathonCard}; ${altCardBackground};`}>
        <Card.Img variant="top" src={bearBuddies} />
        <Card.Body>
          <Card.Title>nwHacks 2021: Bear Buddies</Card.Title>
          <Card.Text css={cardText}>
            Created a solution that would ease mental health issues among kids, young adults, and adults by allowing them to play with a Tamagotchi/virtual pet that grows and plays with them. We created a web application allowing users to customize and play with their own pet by doing a set number of actions with it.
          </Card.Text>
          <Button variant="primary" css={moreInfoButton} onClick={() => setShowBear(true)}>More info</Button>
        </Card.Body>
      </Card>
      <Card css={css`${hackathonCard}; ${altCardBackground};`}>
        <Card.Img variant="top" src={chargeUP} />
        <Card.Body>
          <Card.Title>Dubhacks 2019: chargeUp</Card.Title>
          <Card.Text css={cardText}>
            Our team formed when we came to a consensus that we all wanted to be entrepreneurs who could positively impact the world. We want to encourage everyone to decrease their carbon footprint not only limited to converting to driving an EV but also sharing resources such as the chargers.
          </Card.Text>
          <Button variant="primary" css={moreInfoButton} onClick={() => setShowCharge(true)}>More info</Button>
        </Card.Body>
      </Card>
      <Card css={css`${hackathonCard}; ${defaultCardBackground};`}>
        <Card.Img variant="top" src={chroniclr} />
        <Card.Body>
          <Card.Title>nwHacks 2020: Chroniclr</Card.Title>
          <Card.Text css={cardText}>
            One of the main concerns of today's society is the increasing number of responsibilities that an individual has in their lives. In many ways, a person has many goals to want to achieve but unfortunately, the inability to plan out how to target such wishes.
          </Card.Text>
          <Button variant="primary" css={moreInfoButton} onClick={() => setShowChroniclr(true)}>More info</Button>
        </Card.Body>
      </Card>
      <Card css={css`${hackathonCard}; ${defaultCardBackground};`}>
        <Card.Img variant="top" src={profStats} />
        <Card.Body>
          <Card.Title>nwHacks 2019: ProfStats</Card.Title>
          <Card.Text css={cardText}>
            We wanted a way to aggregate professor data in order to provide students the easiest way to select their professors for their classes. This was a vision that many students shared interest in using if it existed.
          </Card.Text>
          <Button variant="primary" css={moreInfoButton} onClick={() => setShowProf(true)}>More info</Button>
        </Card.Body>
      </Card>
      <Card css={css`${hackathonCard}; ${defaultCardBackground};`}>
        <Card.Img variant="top" src={teepot} />
        <Card.Body>
          <Card.Title>Dubhacks 2020: Teepot</Card.Title>
          <Card.Text css={cardText}>
            We want to provide a platform to help sponsoring companies find influencers to partner up with and vice versa for the influencers. It is a platform for companies to find suitable influencers based on pairwise comparison and keyword search.
          </Card.Text>
          <Button variant="primary" css={moreInfoButton} onClick={() => setShowTee(true)}>More info</Button>
        </Card.Body>
      </Card>
      <Card css={css`${hackathonCard}; ${defaultCardBackground};`}>
        <Card.Img variant="top" src={nonononotifications} />
        <Card.Body>
          <Card.Title>TerribleHack VR: Nonononotifications</Card.Title>
          <Card.Text css={cardText}>
            The inspiration for our name came from the feeling when you see one of our notifications. It'll get you saying, "NONONO" in no time!
          </Card.Text>
          <Button variant="primary" css={moreInfoButton} onClick={() => setShowNoNo(true)}>More info</Button>
        </Card.Body>
      </Card>
    </div >
  );
};

export default Hackathons;