import { gql } from 'apollo-boost';

export const CREATE_GAME = gql`
  mutation createGame($playerName: String!) {
    createGame(playerName: $playerName) {
      id
      player {
        name
        hp
        shield
        cardsInHand {
          type
          value
        }
      }
      monster {
        hp
        shield
      }
      turns {
        entityWhoPlays
        cardCanBePlayed
      }
    }
  }
`;

export const GET_MAX_NUMBER_OF_TURNS = gql`
  query maxNumberOfTurns {
    maxNumberOfTurns
  }
`;

export const PLAY_TURN = gql`
  mutation playTurn($gameId: String!, $cardPlayed: CardInput) {
    playTurn(gameId: $gameId, cardPlayed: $cardPlayed) {
      player {
        hp
        shield
        cardsInHand {
          type
          value
        }
      }
      monster {
        hp
        shield
        cardsInHand {
          type
          value
        }
      }
      turns {
        entityWhoPlays
        cardCanBePlayed
      }
      monsterEffect {
        type
        value
      }
      statusAfterTurnOfPlayer {
        player {
          hp
          shield
        }
        monster {
          hp
          shield
        }
        winner
      }
      winner
    }
  }
`;
