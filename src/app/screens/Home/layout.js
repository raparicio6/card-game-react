import React from 'react';

import Entity from '../../components/Entity';
import Turns from '../../components/Turns';
import monsterImage from '../../components/Entity/assets/monster.png';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={`row center background-wild-sand all-screen-height ${styles.container}`}>
      <div className="column m-right-10">
        <Entity imageUrl={monsterImage} hp={32} maxHp={40} name="Enemy" shield={0} />
        <Entity hp={16} maxHp={48} name="Player" shield={45} className="m-top-6" />
      </div>
      <Turns current={12} left={8} past={11} />
    </div>
  );
}

export default Home;
