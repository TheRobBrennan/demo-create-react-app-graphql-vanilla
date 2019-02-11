import axios from 'axios'

// Define our axios connection
export const axiosGitHubGraphQL = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_GRAPHQL_ENDPOINT,
  headers: {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
})

// GraphQL Queries
export const GET_ORGANIZATION = `
  {
    organization (login: "the-road-to-learn-react") {
      name
      url
    }
  }
`
