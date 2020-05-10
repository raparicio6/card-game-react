import React, { useCallback, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import { useGlobalValue } from '../../../context';
import { PLAY_TURN } from '../../../queries/GamesQueries';
import { actionCreators } from '../../../context/games/actions';
import { Routes } from '../../constants';

import Game from './layout';

function GameContainer() {
  const history = useHistory();
  const [{ gameState }, dispatchGlobal] = useGlobalValue();
  const {
    id,
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
    turns,
    lastClickedCard,
    monsterEffect,
    winner
  } = gameState;

  const [playTurn] = useMutation(PLAY_TURN, {
    variables: {
      gameId: id,
      cardPlayed: turns.length && turns[turns.length - 1].cardCanBePlayed ? lastClickedCard : null
    }
  });

  const handleEndTurnOnClick = useCallback(async () => {
    const result = await playTurn();
    dispatchGlobal(actionCreators.playTurn(result.data.playTurn));
  }, [playTurn, dispatchGlobal]);

  useEffect(() => {
    if (winner) {
      history.push(Routes.RESULT);
    }
  }, [winner, history]);

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
      handleEndTurnOnClick={handleEndTurnOnClick}
      monsterCardType={monsterEffect && monsterEffect.type}
      mosterCardValue={monsterEffect && monsterEffect.value}
    />
  );
}

export default GameContainer;
