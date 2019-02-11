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

// Naive GraphQL query function(s) to return a template literal
export const getIssuesOfRepository = path => {
  const [organization, repository] = path.split('/')

  return axiosGitHubGraphQL.post('', {
    query: getIssuesOfRepositoryQuery(organization, repository),
  })
}

// This is a higher order function because we need to pass the result of
// the promise, and also provide a function for the this.setState method
// that will be consuming it.
export const resolveIssuesQuery = queryResult => () => ({
  organization: queryResult.data.data.organization,
  errors: queryResult.data.errors,
})

export const getIssuesOfRepositoryQuery = (organization, repository) => `
  {
    organization (login: "${organization}") {
      name
      url
      repository (name: "${repository}") {
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
