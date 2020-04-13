import React from 'react';
import { string, number } from 'prop-types';
import { t } from 'i18next';

import styles from './styles.module.scss';

function Entity({ name, hp, maxHp, shield, imageUrl }) {
  return (
    <div className={`row ${styles.container}`}>
      <div className={`column middle ${styles.entityImageContainer}`}>
        <img src={imageUrl} alt={t('Entity:imageAlt')} className={styles.entityImage} />
      </div>
      <div className={`column middle ${styles.nameHpContainer}`}>
        <span className={`${styles.info} m-bottom-4`}>{name}</span>
        <span className={`${styles.subtitle} m-top-4`}>
          {`${t('Entity:hp')}: `}
          <span className={`${styles.info} ${styles.number}`}>{`${hp}/${maxHp}`}</span>
        </span>
      </div>
      <div className={`${styles.shield} m-left-4 row center middle`}>
        <span className={styles.subtitle}>
          {`${t('Entity:shield')}: `} <span className={`${styles.info} ${styles.number}`}>{shield}</span>
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
  shield: number.isRequired
};

export default Entity;
