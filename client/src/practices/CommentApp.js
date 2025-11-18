import React, { Component } from 'react'
import { v4 as uuid4 } from 'uuid'
import CommentItem from './CommentItem'
import axios from 'axios'

class CommentApp extends Component {
  state = {
    commetList: [],
    username: '',
    comment: '',
    count: 0,
    loaded: false, // 👈 to avoid repeated fetch
  }

  api = axios.create({
    baseURL: 'http://localhost:8080', // ✅ make sure backend runs here
  })

  // --- Fetch all comments once ---
  loadCommentsOnce = async () => {
    if (this.state.loaded) return
    try {
      const res = await this.api.get('/get-all-comments')
      const all = res.data.data.map((each) => ({
        id: each._id,
        username: each.username,
        comment: each.comment,
        isFave: false,
      }))
      this.setState({ commetList: all, count: all.length, loaded: true })
    } catch (err) {
      console.error('❌ Error loading comments:', err)
    }
  }

  // --- Add comment ---
  handleComment = async (e) => {
    e.preventDefault()
    const { username, comment } = this.state
    try {
      const res = await this.api.post('/comment', { username, comment })
      const data = res.data
      const newComment = {
        id: data.id,
        username: data.username,
        comment: data.comment,
        isFave: false,
      }
      this.setState((prev) => ({
        commetList: [...prev.commetList, newComment],
        username: '',
        comment: '',
        count: prev.count + 1,
      }))
    } catch (err) {
      console.error('Error adding comment:', err)
      alert('Failed to add comment. Please check backend.')
    }
  }

  // --- Delete comment ---
  handleDelete = async (id) => {
    try {
      await this.api.delete(`/comment-delet/${id}`)
      this.setState((prev) => ({
        commetList: prev.commetList.filter((each) => each.id !== id),
        count: prev.count - 1,
      }))
    } catch (err) {
      console.error('Error deleting comment:', err)
      alert('Failed to delete comment.')
    }
  }

  handleUsername = (e) => this.setState({ username: e.target.value })
  handleCommentInput = (e) => this.setState({ comment: e.target.value })

  handleLie = (id) => {
    this.setState((prev) => ({
      commetList: prev.commetList.map((each) =>
        each.id === id ? { ...each, isFave: !each.isFave } : each
      ),
    }))
  }

  render() {
    const { commetList, username, comment, count } = this.state

    // 👇 Fetch comments only once when rendering first time
    if (!this.state.loaded) {
      setTimeout(() => this.loadCommentsOnce(), 0)
    }

    return (
      <div className='min-h-[100vh] bg-gray-50 flex flex-col px-6 md:px-12 py-10'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>
          Add your Comments
        </h1>

        {/* --- Form --- */}
        <form
          onSubmit={this.handleComment}
          className='flex flex-col w-full md:w-2/3 lg:w-1/2 bg-white shadow-md rounded-lg p-6 gap-4 mb-8'
        >
          <input
            placeholder='Enter your name'
            className='border border-gray-300 rounded-md px-3 py-3 text-lg font-medium focus:ring-2 focus:ring-blue-400 outline-none'
            required
            value={username}
            onChange={this.handleUsername}
          />

          <textarea
            placeholder='Write your comment here...'
            className='border border-gray-300 rounded-md px-3 py-3 text-lg font-medium resize-none focus:ring-2 focus:ring-blue-400 outline-none'
            required
            value={comment}
            onChange={this.handleCommentInput}
            rows='4'
          />

          <button
            type='submit'
            className='px-6 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-lg font-medium transition'
          >
            Add Comment
          </button>
        </form>

        <p className='text-gray-600 mb-4 font-medium'>
          Total Comments: {count}
        </p>

        {/* --- Comments List --- */}
        <div className='space-y-6'>
          {commetList.map((item) => (
            <CommentItem
              commentDetaile={item}
              key={item.id}
              updateLike={this.handleLie}
              updateDelete={this.handleDelete}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default CommentApp
