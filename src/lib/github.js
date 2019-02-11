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

// This is a higher order function because we need to pass the result of
// the promise - as well as an optional cursor - and also provide a function for the
// this.setState method that will be executing it.
export const resolveIssuesQuery = (queryResult, cursor) => state => {
  const { data, errors } = queryResult.data

  if (!cursor) {
    return {
      organization: data.organization,
      errors,
    }
  }

  // Merge the old data with the new data
  const { edges: oldIssues } = state.organization.repository.issues
  const { edges: newIssues } = data.organization.repository.issues
  const updatedIssues = [...oldIssues, ...newIssues]

  return {
    organization: {
      ...data.organization,
      repository: {
        ...data.organization.repository,
        issues: {
          ...data.organization.repository.issues,
          edges: updatedIssues,
        }
      }
    },
    errors,
  }
}

// Naive GraphQL query function(s) to return a template literal
export const getIssuesOfRepository = (path, cursor) => {
  const [organization, repository] = path.split('/')

  return axiosGitHubGraphQL.post('', {
    query: GET_ISSUES_OF_REPOSITORY,
    variables: { organization, repository, cursor },
  })
}

// Let's use GraphQL variables to define our template literal
const GET_ISSUES_OF_REPOSITORY = `
  query ($organization: String!, $repository: String!, $cursor: String) {
    organization (login: $organization) {
      name
      url
      repository (name: $repository) {
        id
        name
        url
        stargazers {
          totalCount
        }
        viewerHasStarred
        issues (first:5, after:$cursor, states: [OPEN]) {
          edges {
            node {
              id
              title
              url
              reactions (last:3) {
                edges {
                  node {
                    id
                    content
                  }
                }
              }
            }
          }
          totalCount
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  }
`

// Add a star to the repositoryId
export const addStarToRepository = repositoryId => {
  return axiosGitHubGraphQL.post('', {
    query: ADD_STAR,
    variables: { repositoryId },
  })
}

// GraphQL mutation to add a star to the repo
const ADD_STAR = `
  mutation ($repositoryId: ID!) {
    addStar (input: {starrableId:$repositoryId}) {
      starrable {
        viewerHasStarred
      }
    }
  }
`

// When resolving the promise from the mutation, you can find out about the
// viewerHasStarred property in the result. That's because we defined it as
// a field in the response from our mutation (above).
//
// viewerHasStarred is the only property that changed, but we will be using
// the spread operator to keep local state intact.
export const resolveAddStarMutation = mutationResult => state => {
  const { viewerHasStarred } = mutationResult.data.data.addStar.starrable

  return {
    ...state,
    organization: {
      ...state.organization,
      repository: {
        ...state.organization.repository,
        viewerHasStarred,
      }
    }
  }
}
