import React from 'react';
import { string } from 'prop-types';
import { t } from 'i18next';

import styles from './styles.module.scss';

function Card({ imageUrl, className }) {
  return (
    <div className={className}>
      <img src={imageUrl} alt={t('Card:imageAlt')} className={styles.cardImage} />
    </div>
  );
}

Card.propTypes = {
  imageUrl: string.isRequired,
  className: string
};

Card.defaultProps = {
  className: ''
};

export default Card;
