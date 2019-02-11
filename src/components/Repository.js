import React from 'react'

const Repository = ({ repository }) => {
  return (
    <div>
      <p>
        <strong>In Repository:</strong>
        <a href={repository.url}>
          {repository.name}
        </a>
      </p>
    </div>
  )
}

export default Repository
