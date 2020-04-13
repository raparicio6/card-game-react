import React from 'react';
import { string, func } from 'prop-types';
import { t } from 'i18next';

import styles from './styles.module.scss';

function Card({ imageUrl, className, handleOnClick }) {
  return (
    <div className={className}>
      <img src={imageUrl} alt={t('Card:imageAlt')} className={styles.cardImage} onClick={handleOnClick} />
    </div>
  );
}

Card.propTypes = {
  imageUrl: string.isRequired,
  className: string,
  handleOnClick: func
};

Card.defaultProps = {
  className: ''
};

export default Card;
