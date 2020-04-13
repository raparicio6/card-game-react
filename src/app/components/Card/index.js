import React, { useCallback } from 'react';
import { string, number, bool } from 'prop-types';

import { useGlobalValue } from '../../../context';
import { actionCreators } from '../../../context/games/actions';

import Card from './layout';

function CardContainer({ type, value, entityType, className, reportClick }) {
  const [_, dispatchGlobal] = useGlobalValue();

  const handleOnClick = useCallback(
    event => {
      if (reportClick) {
        dispatchGlobal(actionCreators.setLastClickedCard({ value, type }));
      }
    },
    [dispatchGlobal, reportClick, type, value]
  );

  return (
    <Card
      imageUrl={`./cards/${entityType}/${type}/${value || 0}.png`}
      className={className}
      handleOnClick={handleOnClick}
    />
  );
}

CardContainer.propTypes = {
  entityType: string.isRequired,
  type: string.isRequired,
  className: string,
  reportClick: bool,
  value: number
};

CardContainer.defaultProps = {
  className: '',
  value: 0
};

export default CardContainer;
