import React, { useState } from 'react'

const Unloac = () => {
    const [lock,setLock]=useState(false);

    const handleLock=()=>{
        console.log("button is clicked")
        setLock(prev=>(!prev))
    }
    
  return (
    <div className='min-h-[100vh] bg-slate-600 text-white flex flex-col justify-center items-center gap-4'>
        <img src={lock ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png': 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'} alt='lock' className='w-20' />
        <p className={`${lock ? 'text-xl font-medium text-red-400': 'text-xl font-medium text-green-400'}`}>{lock ? 'your website is loced': 'your website us unlocked'}</p>
        <button className={`px-4 py-2 rounded-md items-center text-center text-xl font-medium ${lock ? 'bg-red-400': 'bg-green-400'}`} onClick={handleLock}>{lock? 'UNLOCK': 'LOCK'}</button>
        
    </div>
  )
}

export default Unloac