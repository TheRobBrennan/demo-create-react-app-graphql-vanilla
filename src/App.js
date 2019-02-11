import React, { Component } from 'react'
import axios from 'axios'

const TITLE = 'React GraphQL GitHub Client'

const axiosGitHubGraphQL = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_GRAPHQL_ENDPOINT,
  headers: {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
})

// We are using class field declarations. This allows us the ability to omit the
// constructor method for initializing local state, and eliminates the need to
// explicitly bind class methods. Arrow functions will handle all the binding.
class App extends Component {
  state = {
    path: 'the-road-to-learn-react/the-road-to-learn-react',
  }

  componentDidMount() {
    // Fetch data
  }

  onChange = event => {
    this.setState({ path: event.target.value })
  }

  onSubmit = event => {
    // Fetch data
    event.preventDefault()
  }

  render() {
    const { path } = this.state

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

        {/* Here comes the result! */}
      </div>
    )
  }
}

export default App
