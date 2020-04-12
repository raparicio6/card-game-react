import { createContext, useContext } from 'react';

import { gameReducer, gameState } from './games';

export const globalState = {
  gameState
};

export const globalReducer = (state, action) => ({
  gameState: gameReducer(state.gameState, action)
});

export const GlobalContext = createContext();

export const useGlobalValue = () => useContext(GlobalContext);
