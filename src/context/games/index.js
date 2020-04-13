import { createContext } from 'react';

import { createReducer } from '../../utils/reducer';

import { actions } from './actions';

export const GameContext = createContext();

const INITIAL_STATE = {
  maxNumberOfTurns: null,
  id: null,
  playerName: null,
  playerHp: null,
  playerShield: null,
  playerCardsInHand: [],
  monsterHp: null,
  monsterShield: null,
  turns: []
};

export const gameState = { ...INITIAL_STATE };

const reducer = {
  [actions.SET_MAX_NUMBER_OF_TURNS]: (state, { payload }) => ({ ...state, maxNumberOfTurns: payload }),
  [actions.START_GAME]: (state, { payload: { id, player, monster, turns } }) => ({
    ...state,
    id,
    playerName: player.name,
    playerHp: player.hp,
    playerShield: player.shield,
    playerCardsInHand: player.cardsInHand,
    monsterHp: monster.hp,
    monsterShield: monster.shield,
    turns
  })
};

export const gameReducer = (state = gameState, action) => createReducer(reducer, state, action);
