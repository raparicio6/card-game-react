import React from 'react';
import { number } from 'prop-types';

import Turns from './layout';

function TurnsContainer({ current, past, left }) {
  return <Turns current={current} past={past} left={left} />;
}

TurnsContainer.propTypes = {
  current: number.isRequired,
  left: number.isRequired,
  past: number.isRequired
};

export default TurnsContainer;
