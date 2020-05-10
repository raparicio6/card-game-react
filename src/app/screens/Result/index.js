import React from 'react';

import { useGlobalValue } from '../../../context';

import Result from './layout';

function ResultContainer() {
  const [
    {
      gameState: { winner }
    }
  ] = useGlobalValue();
  return <Result winner={winner} />;
}

export default ResultContainer;
