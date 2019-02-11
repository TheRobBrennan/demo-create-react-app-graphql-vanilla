import React from 'react'

const RepositoryIssues = ({ issues }) => {
  if (!issues) return null
  return (
    <ul>
      {issues.map(issue => (
        <li key={issue.node.id}>
          <a href={issue.node.url}>{issue.node.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default RepositoryIssues
