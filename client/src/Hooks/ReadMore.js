import React, { useState } from 'react'

const ReadMore = () => {
    const [read,setRead]=useState(false);

    const handleRead=()=>{
        setRead(prev=>(!prev))
    }
  return (
    <div className='min-h-[100vh] flex flex-col justify-center items-center px-12'>
        <h1 className='font-bold text-xl'>Reat Hook</h1>
        <p className='text-center font-medium text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>   
        <img src='https://assets.ccbp.in/frontend/hooks/react-hooks-img.png' alt='react-hook' className='w-40 ' />
        <p className='text-start font-medium text-lg px-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        <span>{read ? '         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.': ''}</span>
</p>
<button onClick={handleRead}>{read ? 'Read less': 'Read More'}</button>
    </div>
  )
}

export default ReadMore