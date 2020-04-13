import React from 'react';

import { useGlobalValue } from '../../../context';

import Game from './layout';

function GameContainer() {
  const [{ gameState }, dispatchGlobal] = useGlobalValue();
  const {
    maxNumberOfTurns,
    currentTurn,
    playerName,
    playerHp,
    playerMaxHp,
    playerShield,
    playerCardsInHand,
    monsterHp,
    monsterMaxHp,
    monsterShield,
    turns
  } = gameState;

  return (
    <Game
      currentTurn={currentTurn}
      monsterHp={monsterHp}
      monsterMaxHp={monsterMaxHp}
      monsterShield={monsterShield}
      playerCardsInHand={playerCardsInHand}
      playerHp={playerHp}
      playerMaxHp={playerMaxHp}
      playerName={playerName}
      playerShield={playerShield}
      turnsLeft={maxNumberOfTurns - currentTurn}
      turnsPast={currentTurn - 1}
    />
  );
}

export default GameContainer;
