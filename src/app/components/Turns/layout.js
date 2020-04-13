import React from 'react';
import { number, func } from 'prop-types';
import { t } from 'i18next';

import styles from './styles.module.scss';

function Turns({ current, past, left, handleEndTurnOnClick }) {
  return (
    <div className={`column ${styles.container}`}>
      <div className={styles.turnsContainer}>
        <span className={`row center ${styles.info} ${styles.big}`}>{t('Turns:turns')}</span>
      </div>
      <div className={styles.turnsInfoContainer}>
        <div className={`column center ${styles.bordered}`}>
          <span className={styles.info}>{t('Turns:current')}</span>
          <span className={`${styles.info} ${styles.number} m-top-4`}>{current}</span>
          <span className={`${styles.info} m-top-10`}>{t('Turns:past')}</span>
          <span className={`${styles.info} ${styles.number} m-top-4`}>{past}</span>
          <span className={`${styles.info} m-top-10`}>{t('Turns:left')}</span>
          <span className={`${styles.info} ${styles.number} m-top-4`}>{left}</span>
        </div>
      </div>
      <div className={`row center middle ${styles.endTurnContainer}`}>
        <button type="button" className={styles.endTurnButton} onClick={handleEndTurnOnClick}>
          {t('Turns:endTurn')}
        </button>
      </div>
    </div>
  );
}

Turns.propTypes = {
  current: number.isRequired,
  handleEndTurnOnClick: func.isRequired,
  left: number.isRequired,
  past: number.isRequired
};

export default Turns;
