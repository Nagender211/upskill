import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from './CommentItem';

const Comment = () => {
    const [username,setUsername]=useState('');
    const [comment,setComment]=useState('');
    const [commentList,setcommentList]=useState([]);

    const handleInput=(e)=>{
        setUsername(e.target.value)
    }
    const handleComment=(e)=>{
        setComment(e.target.value)
    }


    const handleCommentForm=(e)=>{
        e.preventDefault();
        const newComment={
            id: uuidv4(),
            username,
            comment
        }
        setcommentList(prev=>[...prev,newComment])
        setUsername('')
        setComment('')
    }


  return (
    <div>
        <form onSubmit={handleCommentForm}>
            <input placeholder='enter your name' type='text' value={username} onChange={handleInput} />
            <input placeholder='enter your comment' type='text' value={comment} onChange={handleComment} />
            <button>Comment</button>
        </form>
        {commentList.map(item=>(
                       <CommentItem key={item.id} commentDeatis={item} />

        ))}
    
    </div>
  )
}

export default Comment