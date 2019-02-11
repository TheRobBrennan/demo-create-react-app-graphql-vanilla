import React from 'react'
import RepositoryIssues from './RepositoryIssues'

const Repository = ({ repository, onFetchMoreIssues }) => {
  return (
    <div>
      <p>
        <strong>In Repository:</strong>
        <a href={repository.url}>
          {repository.name}
        </a>
      </p>
      <RepositoryIssues repository={repository} issues={repository.issues} onFetchMoreIssues={onFetchMoreIssues} />
    </div>
  )
}

export default Repository
