import React from 'react';
import { t } from 'i18next';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className="column middle center background-wild-sand all-screen-height">
      <h1 className={styles.info}>{t('Home:title')}</h1>
      <h2 className={styles.info}>{t('Home:whatIsYourName')}</h2>
      <span className={styles.info}>{t('Home:name')}</span>
      <span className={styles.info}>{t('Home:letsPlay')}</span>
    </div>
  );
}

export default Home;
