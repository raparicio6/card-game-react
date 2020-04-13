import React from 'react';

import Entity from '../../components/Entity';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={`column center background-wild-sand all-screen-height ${styles.container}`}>
      <Entity hp={32} maxHp={40} name="Enemy" shield={0} />
      <Entity hp={16} maxHp={48} name="Player" shield={45} className="m-top-6" />
    </div>
  );
}

export default Home;
