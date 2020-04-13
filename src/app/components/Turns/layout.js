import React from 'react';
import { number } from 'prop-types';
import { t } from 'i18next';

import styles from './styles.module.scss';

function Turns({ current, past, left }) {
  return (
    <div className="column">
      <span>{t('Turns:turns')}</span>
      <span>{t('Turns:current')}</span>
      <span>{t('Turns:past')}</span>
      <span>{t('Turns:left')}</span>
      <span>{t('Turns:endTurn')}</span>
    </div>
  );
}

Turns.propTypes = {
  current: number.isRequired,
  left: number.isRequired,
  past: number.isRequired
};

export default Turns;
