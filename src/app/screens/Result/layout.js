import React from 'react';
import { t } from 'i18next';
import { string } from 'prop-types';

import styles from './styles.module.scss';

function Result({ winner }) {
  return (
    <div className="row middle background-black all-screen-height">
      {winner === 'Player' ? (
        <span className={styles.resultMessage}>{t('Result:winMessage')}</span>
      ) : (
        <span className={styles.resultMessage}>{t('Result:loseMessage')}</span>
      )}
    </div>
  );
}

Result.propTypes = {
  winner: string.isRequired
};

export default Result;
