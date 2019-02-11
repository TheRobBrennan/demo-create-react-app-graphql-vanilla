import React from 'react'

const Organization = ({ organization, errors }) => {
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
    </div>
  )
}

export default Organization
