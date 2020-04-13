import React from 'react';
import { string, number } from 'prop-types';

import Entity from './layout';
import defaultImage from './assets/default-entity.png';

function EntityContainer({ name, hp, maxHp, shield, imageUrl, className }) {
  return (
    <Entity name={name} hp={hp} maxHp={maxHp} shield={shield} imageUrl={imageUrl} className={className} />
  );
}

EntityContainer.propTypes = {
  hp: number.isRequired,
  maxHp: number.isRequired,
  name: string.isRequired,
  shield: number.isRequired,
  className: string,
  imageUrl: string
};

EntityContainer.defaultProps = {
  className: '',
  imageUrl: defaultImage
};

export default EntityContainer;
