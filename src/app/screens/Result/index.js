import React from 'react';

import { useGlobalValue } from '../../../context';

import Result from './layout';

function ResultContainer() {
  const [{ gameState }] = useGlobalValue();
  const { winner } = gameState;
  return <Result winner={winner} />;
}

export default ResultContainer;
