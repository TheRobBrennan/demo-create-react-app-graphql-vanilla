import React from 'react'
import Repository from './Repository'

const Organization = ({ organization, errors, onFetchMoreIssues }) => {
  if (errors) {
    // Uh oh. Display any error message(s)
    return (
      <p>
        <strong>Something went wrong:</strong>
        {errors.map(error => error.message).join(' ')}
      </p>
    )
  }

  // All good. Display our data!
  return (
    <div>
      <p>
        <strong>
          Issues from Organization:
        </strong>
        <a href={organization.url}>
          {organization.name}
        </a>
      </p>
      <Repository repository={organization.repository} onFetchMoreIssues={onFetchMoreIssues} />
    </div>
  )
}

export default Organization
