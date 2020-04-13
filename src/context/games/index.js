import { createContext } from 'react';

import { createReducer } from '../../utils/reducer';

import { actions } from './actions';

export const GameContext = createContext();

const INITIAL_STATE = {
  maxNumberOfTurns: null,
  id: null,
  currentTurn: null,
  playerName: null,
  playerHp: null,
  playerMaxHp: null,
  playerShield: null,
  playerCardsInHand: [],
  monsterHp: null,
  monsterMaxHp: null,
  monsterShield: null,
  turns: [],
  lastClickedCard: null,
  monsterEffect: null,
  winner: null
};

export const gameState = { ...INITIAL_STATE };

const reducer = {
  [actions.SET_MAX_NUMBER_OF_TURNS]: (state, { payload }) => ({ ...state, maxNumberOfTurns: payload }),
  [actions.START_GAME]: (state, { payload: { id, player, monster, turns } }) => ({
    ...state,
    id,
    currentTurn: 1,
    playerName: player.name,
    playerHp: player.hp,
    playerMaxHp: player.hp,
    playerShield: player.shield,
    playerCardsInHand: player.cardsInHand,
    monsterHp: monster.hp,
    monsterMaxHp: monster.hp,
    monsterShield: monster.shield,
    turns
  }),
  [actions.SET_LAST_CLICKED_CARD]: (state, { payload }) => ({ ...state, lastClickedCard: payload }),
  [actions.PLAY_TURN]: (state, { payload: { player, monster, turns, monsterEffect, winner } }) => ({
    ...state,
    currentTurn: turns.length,
    playerHp: player.hp,
    playerShield: player.shield,
    playerCardsInHand: player.cardsInHand,
    monsterHp: monster.hp,
    monsterShield: monster.shield,
    turns,
    monsterEffect,
    winner
  })
};

export const gameReducer = (state = gameState, action) => createReducer(reducer, state, action);
