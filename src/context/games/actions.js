import { stringArrayToObject } from '../../utils/array';

export const actions = stringArrayToObject(['SET_MAX_NUMBER_OF_TURNS', 'START_GAME'], '@@GAMES');

export const actionCreators = {
  setMaxNumberOfTurns: payload => ({ type: actions.SET_MAX_NUMBER_OF_TURNS, payload }),
  startGame: payload => ({ type: actions.START_GAME, payload })
};
