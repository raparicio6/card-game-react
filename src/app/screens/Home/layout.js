import React from 'react';

import Entity from '../../components/Entity';
import Turns from '../../components/Turns';
import Card from '../../components/Card';
import monsterImage from '../../components/Entity/assets/monster.png';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={`row center background-wild-sand all-screen-height ${styles.container}`}>
      <div className="column m-right-10">
        <Entity imageUrl={monsterImage} hp={32} maxHp={40} name="Enemy" shield={0} />
        <Entity hp={16} maxHp={48} name="Player" shield={45} className="m-top-6 m-bottom-10" />
        <div className={`row ${styles.cards}`}>
          <Card entityType="player" type="damage" value={9} className="m-right-4" />
          <Card entityType="player" type="shield" value={8} className="m-right-4" />
          <Card entityType="player" type="damage" value={12} className="m-right-4" />
          <Card entityType="player" type="heal" value={8} className="m-right-4" />
          <Card entityType="player" type="shield" value={12} className="m-right-4" />
        </div>
      </div>
      <Turns current={12} left={8} past={11} />
    </div>
  );
}

export default Home;
