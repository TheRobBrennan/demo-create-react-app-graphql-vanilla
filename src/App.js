import React, { Component } from 'react'
import { TITLE } from './lib/constants'
import {
  axiosGitHubGraphQL,
  GET_ISSUES_OF_REPOSITORY,
} from './lib/github'
import Organization from './components/Organization'

// We are using class field declarations. This allows us the ability to omit the
// constructor method for initializing local state, and eliminates the need to
// explicitly bind class methods. Arrow functions will handle all the binding.
class App extends Component {
  state = {
    path: 'the-road-to-learn-react/the-road-to-learn-react',
    organization: null,
    errors: null,
  }

  componentDidMount() {
    // Fetch data
    this.onFetchFromGitHub()
  }

  onChange = event => {
    this.setState({ path: event.target.value })
  }

  onSubmit = event => {
    // Fetch data
    event.preventDefault()
  }

  onFetchFromGitHub = () => {
    axiosGitHubGraphQL.post('', { query: GET_ISSUES_OF_REPOSITORY }).then(result => {
      this.setState(() => ({
        organization: result.data.data.organization,
        errors: result.data.errors,
      }))
    })
  }

  render() {
    const { path, organization, errors } = this.state

    return (
      <div>
        <h1>{TITLE}</h1>

        <form onSubmit={this.onSubmit}>
          <label htmlFor="url">Show open issues for https://github.com/</label>
          <input
            id="url"
            type="text"
            onChange={this.onChange}
            style={{ width: '300px' }}
            value={path}
          />
          <button type="submit">Search</button>
        </form>

        <hr />

        {/* Use conditional rendering to display either the component or a placeholder */}
        {organization ? (
          <Organization organization={organization} errors={errors} />
        ) : (
          <p>No information yet...</p>
        )}
      </div>
    )
  }
}

export default App
