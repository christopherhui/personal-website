/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useTrail, animated } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

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

type VisibleProps = {
  isVisible: boolean;
};

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
  box-shadow: 0px 8px 40px rgb(0 0 0 / 14%);
`;

const altCardBackground = css`
  background-color: #91d370;
  background-image: linear-gradient(319deg, #91d370 0%, #bca0ff 37%, #f2cd54 100%);
  box-shadow: 0px 8px 40px rgb(0 0 0 / 14%);
`;

const cardText = css({
  marginBottom: '3em',
});

const moreInfoButton = css({
  position: 'absolute',
  left: 20,
  bottom: 20,
});

const linkConfig = { mass: 5, tension: 2000, friction: 200, duration: 500 };

const Hackathons = () => {
  const [showBear, setShowBear] = useState<boolean>(false);
  const [showCharge, setShowCharge] = useState<boolean>(false);
  const [showChroniclr, setShowChroniclr] = useState<boolean>(false);
  const [showProf, setShowProf] = useState<boolean>(false);
  const [showTee, setShowTee] = useState<boolean>(false);
  const [showNoNo, setShowNoNo] = useState<boolean>(false);

  const cards = [
    {
      background: altCardBackground,
      src: bearBuddies,
      title: 'nwHacks 2021: Bear Buddies',
      text: 'Created a solution that would ease mental health issues among kids, young adults, and adults by allowing them to play with a Tamagotchi/virtual pet that grows and plays with them. We created a web application allowing users to customize and play with their own pet by doing a set number of actions with it.',
      onClick: () => setShowBear(true),
    }, {
      background: altCardBackground,
      src: chargeUP,
      title: 'Dubhacks 2019: chargeUp',
      text: 'Our team formed when we came to a consensus that we all wanted to be entrepreneurs who could positively impact the world. We want to encourage everyone to decrease their carbon footprint not only limited to converting to driving an EV but also sharing resources such as the chargers.',
      onClick: () => setShowCharge(true),
    }, {
      background: defaultCardBackground,
      src: chroniclr,
      title: 'nwHacks 2020: Chroniclr',
      text: `One of the main concerns of today's society is the increasing number of responsibilities that an individual has in their lives. In many ways, a person has many goals to want to achieve but unfortunately, the inability to plan out how to target such wishes.`,
      onClick: () => setShowChroniclr(true),
    }, {
      background: defaultCardBackground,
      src: profStats,
      title: 'nwHacks 2019: ProfStats',
      text: `We wanted a way to aggregate professor data in order to provide students the easiest way to select their professors for their classes. This was a vision that many students shared interest in using if it existed.`,
      onClick: () => setShowProf(true),
    }, {
      background: defaultCardBackground,
      src: teepot,
      title: 'Dubhacks 2020: Teepot',
      text: `We want to provide a platform to help sponsoring companies find influencers to partner up with and vice versa for the influencers. It is a platform for companies to find suitable influencers based on pairwise comparison and keyword search.`,
      onClick: () => setShowTee(true),
    }, {
      background: defaultCardBackground,
      src: nonononotifications,
      title: 'TerribleHack VR: Nonononotifications',
      text: `The inspiration for our name came from the feeling when you see one of our notifications. It'll get you saying, "NONONO" in no time!`,
      onClick: () => setShowNoNo(true),
    },
  ];

  const AnimCard = ({ isVisible }: VisibleProps) => {
    const unlock = isVisible;

    const cardAnimation = useTrail(cards.length, {
      linkConfig,
      opacity: unlock ? 1 : 0,
      sc: unlock ? 0.9 : 0.8,
      x: unlock ? "0%" : "100%",
      y: unlock ? "0px" : "100px",
      skewX: unlock ? 0 : 20,
      from: {
        opacity: 0,
        sc: 0.8,
        x: "100%",
        y: "100px",
        skewX: 20
      },
      delay: 500,
    });

    return (
      <div css={hackathonCards}>
        {cardAnimation.map(({ ...rest }, index) => (
          <animated.div style={{ ...rest }} key={index}>
            <Card css={css`${hackathonCard}; ${cards[index].background};`}>
              <Card.Img variant="top" src={cards[index].src} />
              <Card.Body>
                <Card.Title>{cards[index].title}</Card.Title>
                <Card.Text css={cardText}>
                  {cards[index].text}
                </Card.Text>
                <Button variant="primary" css={moreInfoButton} onClick={cards[index].onClick}>More info</Button>
              </Card.Body>
            </Card>
          </animated.div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <BearModal showBear={showBear} handleClose={() => setShowBear(false)} />
      <ChargeModal showCharge={showCharge} handleClose={() => setShowCharge(false)} />
      <ChroniclrModal showChroniclr={showChroniclr} handleClose={() => setShowChroniclr(false)} />
      <ProfModal showProf={showProf} handleClose={() => setShowProf(false)} />
      <TeeModal showTee={showTee} handleClose={() => setShowTee(false)} />
      <NoNoModal showNono={showNoNo} handleClose={() => setShowNoNo(false)} />
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <AnimCard isVisible={isVisible} />
        )}
      </VisibilitySensor>
    </div>
  );
};

export default Hackathons;