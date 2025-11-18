import React, { useState } from 'react'

const NoteItem = ({noteDeatis}) => {
    const [read,setRead]=useState(false)
    const {note,notetitle}=noteDeatis;
    
    const handleRead=()=>{
        // handleRead=()
        setRead(prev=>(!prev))
    }

  return (
    <div className='relative '>
       <div className='border rounded-lg px-2 py-10 w-40 break-words'>
         <h1 className='font-bold'>{note}</h1>
        {/* <h1 className='font-medium'>{`${read ? `${notetitle}`: `${notetitle.slice(0, 100)}`}`}</h1> */}
         <h1 className='font-medium '>
        {read ? notetitle : notetitle.slice(0, 10)}
      </h1>
        <button onClick={handleRead}>{read ? 'Read Less': 'Read More'}</button>
       </div>
    </div>
  )
}

export default NoteItem