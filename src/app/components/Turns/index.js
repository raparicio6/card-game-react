import React from 'react';
import { number, func } from 'prop-types';

import Turns from './layout';

function TurnsContainer({ current, past, left, handleEndTurnOnClick }) {
  return <Turns current={current} past={past} left={left} handleEndTurnOnClick={handleEndTurnOnClick} />;
}

TurnsContainer.propTypes = {
  current: number.isRequired,
  handleEndTurnOnClick: func.isRequired,
  left: number.isRequired,
  past: number.isRequired
};

export default TurnsContainer;
