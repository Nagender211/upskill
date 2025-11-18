import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const HelloHooks = () => {
    const [username,setUsername]=useState('');
    const [userList,setUserList]=useState([])
    const handleInput=(e)=>{
        setUsername(e.target.value)
    }
    const handleInputSubmit=(e)=>{
        e.preventDefault()
        setUserList((prev)=>[
            ...prev,{id: uuidv4(),username}
        ])
    }
  return (
    <div>
        {/* <input type='enter your name' value={username} onChange={handleInput} /> */}
        <form onSubmit={handleInputSubmit}>
        <input type='enter your name' value={username} onChange={handleInput} className='border-input' />
        <button type='submit'>add</button>
        </form>
        <h1>heelo {userList.map(item=>(
            <div key={item.id}>
                <span>{item.username}</span>

            </div>
        ))}</h1>
        
    </div>
  )
}

export default HelloHooks