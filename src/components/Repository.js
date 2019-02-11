import React from 'react'
import RepositoryIssues from './RepositoryIssues'

const Repository = ({ repository, onFetchMoreIssues, onStarRepository }) => {
  return (
    <div>
      <p>
        <strong>In Repository:</strong>
        <a href={repository.url}>
          {repository.name}
        </a>
      </p>
      <button type="button" onClick={() => onStarRepository(repository.id, repository.viewerHasStarred)}>
        {repository.stargazers.totalCount}&nbsp;
        {repository.viewerHasStarred ? 'Unstar' : 'Star' }
      </button>
      <RepositoryIssues repository={repository} issues={repository.issues} onFetchMoreIssues={onFetchMoreIssues} />
    </div>
  )
}

export default Repository
