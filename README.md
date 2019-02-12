# Welcome
This project is intended to serve as an example for a simplified React web app that uses vanilla JavaScript to consume a GraphQL endpoint.

Special thanks to Robin Wieruch for starting off with this example in [The Road to GraphQL](https://www.robinwieruch.de/the-road-to-graphql-book/).

## Getting started

### Initial setup
You will need to create a `.env` file which contains the following environment variables:

```sh
REACT_APP_GITHUB_GRAPHQL_ENDPOINT=https://api.github.com/graphql
REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN=<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>
```

For more information on [creating a personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/#creating-a-token) with GitHub, please see this [guide](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/#creating-a-token).

### Run the application
Once you have configured your `.env` file, all you need to do is installed the required modules and start your application:

```sh
$ npm install
$ npm start
```

After a few moments, your application should be available at [http://localhost:3000/](http://localhost:3000/)
