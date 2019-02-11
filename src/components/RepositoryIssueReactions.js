import React from 'react'

const RepositoryIssueReactions = ({ reactions }) => {
  if (!reactions) return null
  return (
    <ul>
      {reactions.map(reaction => (
        <li key={reaction.node.id}>
          {reaction.node.content}
        </li>
      ))}
    </ul>
  )
}

export default RepositoryIssueReactions
