import React from 'react'

const CommentItem = ({commentDeatis}) => {
    // const {commentDeatis}=props;
    const {username,comment}=commentDeatis
  return (
    <div>
        <h1>{username}</h1>
        <h1>{comment}</h1>
    </div>
  )
}

export default CommentItem