import { stringArrayToObject } from '../../utils/array';

export const actions = stringArrayToObject(
  ['SET_MAX_NUMBER_OF_TURNS', 'START_GAME', 'SET_LAST_CLICKED_CARD', 'PLAY_TURN'],
  '@@GAMES'
);

export const actionCreators = {
  setMaxNumberOfTurns: payload => ({ type: actions.SET_MAX_NUMBER_OF_TURNS, payload }),
  startGame: payload => ({ type: actions.START_GAME, payload }),
  setLastClickedCard: payload => ({ type: actions.SET_LAST_CLICKED_CARD, payload }),
  playTurn: payload => ({ type: actions.PLAY_TURN, payload })
};
