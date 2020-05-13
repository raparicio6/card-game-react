import React from 'react';
import { t } from 'i18next';
import { func } from 'prop-types';

import LanguageButtons from '../../components/LanguageButtons';

import styles from './styles.module.scss';

function Home({ handleOnSubmit, handleOnChange }) {
  return (
    <div className="row background-wild-sand all-screen-height">
      <div className={`column ${styles.container}`}>
        <LanguageButtons />
        <h1 className={`${styles.title} m-top-3 row center`}>{t('Home:title')}</h1>
        <h2 className={`${styles.whatIsYourName} m-top-6 row center`}>{t('Home:whatIsYourName')}</h2>
        <form onSubmit={handleOnSubmit}>
          <div className="column">
            <input
              className={`${styles.nameInput} ${styles.placeholder} m-top-10`}
              placeholder={t('Home:name')}
              type="text"
              onChange={handleOnChange}
            />
            <button type="submit" className={`${styles.letsPlay} m-top-5`}>
              {t('Home:letsPlay')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Home.propTypes = {
  handleOnChange: func.isRequired,
  handleOnSubmit: func.isRequired
};

export default Home;
