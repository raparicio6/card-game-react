import React from 'react';
import { t } from 'i18next';
import { number, string, array, func } from 'prop-types';

import Entity from '../../components/Entity';
import Turns from '../../components/Turns';
import Card from '../../components/Card';
import monsterImage from '../../components/Entity/assets/monster.png';

import styles from './styles.module.scss';

const FACTOR_TO_MULTIPLY_INDEXES = 17;

function Game({
  currentTurn,
  turnsLeft,
  turnsPast,
  playerName,
  playerHp,
  playerMaxHp,
  playerShield,
  playerCardsInHand,
  monsterHp,
  monsterMaxHp,
  monsterShield,
  monsterCardType,
  mosterCardValue,
  handleEndTurnOnClick
}) {
  return (
    <div className={`row center background-wild-sand all-screen-height ${styles.container}`}>
      <div className="column m-right-10">
        <Entity
          imageUrl={monsterImage}
          hp={monsterHp}
          maxHp={monsterMaxHp}
          name={t('Game:monsterName')}
          shield={monsterShield}
        />
        <Entity
          hp={playerHp}
          maxHp={playerMaxHp}
          name={playerName}
          shield={playerShield}
          className="m-top-6 m-bottom-10"
        />
        <div className={`row ${styles.cards}`}>
          {playerCardsInHand.map((card, index) => (
            <Card
              key={`${index * FACTOR_TO_MULTIPLY_INDEXES}${card.type}${card.value}`}
              type={card.type}
              value={card.value}
              entityType="player"
              className="m-right-4"
              reportClick
            />
          ))}
        </div>
      </div>
      <div className="column center">
        <Turns
          current={currentTurn}
          left={turnsLeft}
          past={turnsPast}
          handleEndTurnOnClick={handleEndTurnOnClick}
        />
        {monsterCardType && (
          <>
            <Card
              className="m-top-1 m-bottom-1"
              entityType="monster"
              type={monsterCardType}
              value={mosterCardValue}
              reportClick={false}
            />
            <span className={styles.monsterUses}>{t('Game:monsterUses')}</span>
          </>
        )}
      </div>
    </div>
  );
}

Game.propTypes = {
  currentTurn: number.isRequired,
  handleEndTurnOnClick: func.isRequired,
  monsterHp: number.isRequired,
  monsterMaxHp: number.isRequired,
  monsterShield: number.isRequired,
  playerCardsInHand: array.isRequired, // eslint-disable-line react/forbid-prop-types
  playerHp: number.isRequired,
  playerMaxHp: number.isRequired,
  playerName: string.isRequired,
  playerShield: number.isRequired,
  turnsLeft: number.isRequired,
  turnsPast: number.isRequired,
  monsterCardType: string,
  mosterCardValue: number
};

export default Game;
