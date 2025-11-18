import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import NoteItem from './NoteItem';
// import NoteItem from
const Note = () => {
    const [note,setNote]=useState('');
    const [notetitle,setNotetitle]=useState('');
    const [notelist,setNoteList]=useState([])
    
    const handleNote=(e)=>{
        setNote(e.target.value)
    }
    const handleTitle=(e)=>{
        setNotetitle(e.target.value)
    }

    const handleNoteSubmit=(e)=>{
        e.preventDefault();
        const newNote={
            id: uuidv4(),
            note,
            notetitle
        }
        setNoteList(prev=>[...prev,newNote])
        setNote('')
        setNotetitle('')   
    }



  return (
    <div className='flex flex-col min-h-[100vh] justify-center items-center gap-8'>
        
            <form onSubmit={handleNoteSubmit} className='shadow-lg flex flex-col gap-4 w-1/2 p-10'>
            <input placeholder='enter the note' type='text' className='border-input rounded-md w-1/2 p-3' value={note} onChange={handleNote} />
            <input placeholder='enter the note' type='text' className='border-input rounded-md w-1/2 p-3' value={notetitle} onChange={handleTitle} />
            <button className='px-4 py-2 bg-blue-400 text-white font-bold w-24 rounded-md' type='submit'>Add</button>
            </form>
        {/* </div> */}
        <div className='flex flex-row flex-wrap gap-4'>
            {notelist.length ===0 ? (<div className='flex gap-4 flex-col justify-center items-center'>
            <img src='https://assets.ccbp.in/frontend/hooks/empty-notes-img.png' alt='bulb' className='w-12' />
            <p>Not Found</p>
        </div>): (notelist.map((item)=>{
            return <NoteItem noteDeatis={item} key={item.id} />
        }))}
        </div>
    </div>
  )
}

export default Note