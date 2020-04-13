# Card Game

<img alt="Monster" src="./public/cards/monster/horror/0.png" height="200" width="200">

## Next Steps
* Use some kind of animation to show the user what happened immediately after his turn
* Search for Apollo cache policies in order to leverage its potential
* Make the game responsive
* Handle posible errors from back-end

## Getting Started

### Installing

Get the latest version of node from the [official website](https://nodejs.org/) or using [nvm](https://github.com/creationix/nvm).  
Nvm approach is preferred.

Install dependencies by running `npm i`.

To start the app run:  
`REACT_APP_BASE_URL=http://localhost:8080 npm start`  
By default [GraphQL](https://github.com/raparicio6/card-game-graphql) uses *http://localhost:8080* as the base url.

#### Only building

To only build the application in a specific env, run:  
`npm run build environment`

### Testing

In order to execute the tests run `npm test`.  
[Jest](https://jestjs.io/) was used as the testing framework along with [Enzyme](https://airbnb.io/enzyme/).

## Built With

* [React](https://reactjs.org/)
* [Apollo](https://www.apollographql.com/docs/react/)
* [SASS](https://sass-lang.com/)
* [CircleCI](https://circleci.com/)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Run the tests (`npm test`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create new Pull Request

## About

This project was written and is maintained by [Rodrigo Aparicio](https://github.com/raparicio6).

## License

This project is licensed under the MIT License.
