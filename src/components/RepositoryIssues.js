import React from 'react'
import RepositoryIssueReactions from './RepositoryIssueReactions'

const RepositoryIssues = ({ issues, onFetchMoreIssues }) => {
  if (!issues) return null
  const hasNextPage = issues.pageInfo.hasNextPage

  return (
    <div>
      <ul>
        {issues.edges.map(issue => (
          <li key={issue.node.id}>
            <a href={issue.node.url}>{issue.node.title}</a>
            <RepositoryIssueReactions reactions={issue.node.reactions.edges} />
          </li>
        ))}
      </ul>
      {hasNextPage && <button onClick={onFetchMoreIssues}>More</button>}
    </div>
  )
}

export default RepositoryIssues
