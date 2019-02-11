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

export const GET_REPOSITORY_OF_ORGANIZATION = `
  {
    organization (login: "the-road-to-learn-react") {
      name
      url
      repository (name: "the-road-to-learn-react") {
        name
        url
      }
    }
  }
`

export const GET_ISSUES_OF_REPOSITORY = `
  {
    organization (login: "the-road-to-learn-react") {
      name
      url
      repository (name: "the-road-to-learn-react") {
        name
        url
        issues (last: 5) {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
    }
  }
`
