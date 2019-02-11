import React from 'react'
import RepositoryIssueReactions from './RepositoryIssueReactions'

const RepositoryIssues = ({ issues }) => {
  if (!issues) return null
  return (
    <ul>
      {issues.map(issue => (
        <li key={issue.node.id}>
          <a href={issue.node.url}>{issue.node.title}</a>
          <RepositoryIssueReactions reactions={issue.node.reactions.edges} />
        </li>
      ))}
    </ul>
  )
}

export default RepositoryIssues
