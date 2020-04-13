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
