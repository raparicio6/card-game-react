import { createContext } from 'react';

import { createReducer } from '../../utils/reducer';

import { actions } from './actions';

export const AppContext = createContext();

export const gameState = {};

const reducer = {};

export const gameReducer = (state = gameState, action) => createReducer(reducer, state, action);
