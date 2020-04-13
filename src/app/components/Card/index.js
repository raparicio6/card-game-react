import React from 'react';
import { string, number } from 'prop-types';

import Card from './layout';

function CardContainer({ type, value, entityType, className }) {
  return <Card imageUrl={`./cards/${entityType}/${type}/${value}.png`} className={className} />;
}

CardContainer.propTypes = {
  entityType: string.isRequired,
  type: string.isRequired,
  className: string,
  value: number
};

CardContainer.defaultProps = {
  className: '',
  value: 0
};

export default CardContainer;
