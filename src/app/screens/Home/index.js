import React, { useState, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import { CREATE_GAME, GET_MAX_NUMBER_OF_TURNS } from '../../../queries/GamesQueries';
import { useGlobalValue } from '../../../context';
import { actionCreators } from '../../../context/games/actions';
import { Routes } from '../../constants';

import Home from './layout';

function HomeContainer() {
  const [_, dispatchGlobal] = useGlobalValue();
  const [playerName, setPlayerName] = useState('');
  const history = useHistory();

  const { data } = useQuery(GET_MAX_NUMBER_OF_TURNS, {
    onCompleted() {
      dispatchGlobal(actionCreators.setMaxNumberOfTurns(data.maxNumberOfTurns));
    }
  });

  const [createGame] = useMutation(CREATE_GAME, {
    variables: { playerName }
  });

  const handleOnSubmit = useCallback(
    async event => {
      event.preventDefault();
      const result = await createGame();
      dispatchGlobal(actionCreators.startGame(result.data.createGame));
      history.push(Routes.GAME);
    },
    [createGame, dispatchGlobal, history]
  );

  const handleOnChange = useCallback(event => setPlayerName(event.target.value), [setPlayerName]);

  return <Home handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} />;
}

export default HomeContainer;
