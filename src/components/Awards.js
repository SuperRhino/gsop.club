import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Header, Icon } from '../styles';
import iconBall from '../images/svg/football.svg';
import iconConfetti from '../images/svg/001-confetti.svg';
import iconTrophy from '../images/svg/048-trophy-1.svg';
import iconLoser from '../images/svg/101-accident.svg';

const TrophyHeader = styled.h5`
  background-color: rgba(0,0,0,0.5);
  color: #ffffff;
  margin-top: 1vmin;
  font-size: calc(10px + 1vmin);
  display: flex;
  align-items: center;
  padding: 1vmin;
  text-transform: uppercase;
`;
const Team = styled.div`
  display: flex;
  flex-grow: 1;
  font-weight: 600;
  margin-top: 0.5em;
  justify-content: space-between;
`;
const Summary = styled.div`
  font-size: calc(10px + 1vmin);
  margin: 1em 0;
`;
const ValueNote = styled.span`
  color: #666666;
  font-weight: 400;
`;

const defaultInfo = {icon: iconBall, backgroundColor: 'rgba(0,0,0,0.5)'};
const awardInfo = [
  {icon: iconLoser, backgroundColor: 'rgba(0,0,0,0.5)'},
  {icon: iconConfetti, backgroundColor: 'rgba(22,156,115,0.75)'},
  {icon: iconTrophy, backgroundColor: 'rgba(184,66,102,0.85)'},
];


const Awards = ({ awards }) => {
  if (awards.length === 0) return null;

  return (
    <Container>
      <Header>
        <Icon src={iconTrophy} size={'large'} />
        Post-Season Awards
      </Header>
      {awards.map((data, ix) => {
        const [awardname, team, value, blurb] = data;
        const { icon, backgroundColor } = awardInfo[ix] || defaultInfo;
        return (
          <Fragment key={ix}>
            <TrophyHeader style={{ backgroundColor }}>
              <Icon src={icon} />
              {awardname}
            </TrophyHeader>
            <Team>
              {team} {value && <ValueNote>{value}</ValueNote>}
            </Team>
            <Summary>
              {blurb}
            </Summary>
          </Fragment>
        );
      })}
    </Container>
  );
};

Awards.propTypes = {
  // Array of: [awardname, team, value, blurb]
  awards: PropTypes.array,
};

Awards.defaultProps = {
  awards: [],
};

export default Awards;
