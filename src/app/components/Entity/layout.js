import React from 'react';
import { string, number } from 'prop-types';
import { t } from 'i18next';

import styles from './styles.module.scss';

function Entity({ name, hp, maxHp, shield, imageUrl, className }) {
  return (
    <div className={`row ${styles.container} ${className}`}>
      <div className={`column middle ${styles.entityImageContainer}`}>
        <img src={imageUrl} alt={t('Entity:imageAlt')} className={styles.entityImage} />
      </div>
      <div className={`column middle ${styles.nameHpContainer}`}>
        <span className={`${styles.info} m-bottom-3`}>{name}</span>
        <span className={`${styles.subtitle} m-top-3`}>
          {`${t('Entity:hp')}: `}
          <span className={`${styles.info} ${styles.number}`}>{`${hp}/${maxHp}`}</span>
        </span>
      </div>
      <div className={`${styles.shieldContainer} m-left-4 row center middle`}>
        <span className={`${styles.subtitle} ${styles.shield}`}>
          {`${t('Entity:shield')}: `}{' '}
          <span className={`${styles.info} ${styles.numberShield}`}>{shield}</span>
        </span>
      </div>
    </div>
  );
}

Entity.propTypes = {
  hp: number.isRequired,
  imageUrl: string.isRequired,
  maxHp: number.isRequired,
  name: string.isRequired,
  shield: number.isRequired,
  className: string
};

Entity.defaultProps = {
  className: ''
};

export default Entity;
