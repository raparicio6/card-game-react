import React from 'react';
import { t } from 'i18next';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className="row background-wild-sand all-screen-height">
      <div className={`column ${styles.container}`}>
        <h1 className={styles.title}>{t('Home:title')}</h1>
        <h2 className={`${styles.whatIsYourName} m-top-6`}>{t('Home:whatIsYourName')}</h2>
        <input
          className={`${styles.nameInput} ${styles.placeholder} m-top-10`}
          placeholder={t('Home:name')}
          type="text"
        />
        <button type="button" className={`${styles.letsPlay} m-top-5`}>
          {t('Home:letsPlay')}
        </button>
      </div>
    </div>
  );
}

export default Home;
