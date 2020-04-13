import React from 'react';

import Entity from '../../components/Entity';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={`column center background-wild-sand all-screen-height ${styles.container}`}>
      <Entity hp={32} maxHp={40} name="Enemy" shield={10} />
    </div>
  );
}

export default Home;
