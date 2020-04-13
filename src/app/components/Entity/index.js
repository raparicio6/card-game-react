import React from 'react';
import { string, number } from 'prop-types';

import Entity from './layout';
import defaultImage from './assets/default-entity.png';

function EntityContainer({ name, hp, maxHp, shield, imageUrl }) {
  return <Entity name={name} hp={hp} maxHp={maxHp} shield={shield} imageUrl={imageUrl} />;
}

EntityContainer.propTypes = {
  hp: number.isRequired,
  maxHp: number.isRequired,
  name: string.isRequired,
  shield: number.isRequired,
  imageUrl: string
};

EntityContainer.defaultProps = {
  imageUrl: defaultImage
};

export default EntityContainer;
