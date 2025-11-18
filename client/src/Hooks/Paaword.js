import React, { useState } from 'react'

const PaawordMangerHook = () => {
    const [password,setPassword]=useState('')

    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
  return (
    <div className='min-h-[100vh] flex flex-col justify-center items-center'>
   <div className='flex flex-col py-3 px-12'>
         <h1 className='font-semibold text-2xl'>PasswordManger please check this one</h1>
        <input type='password' placeholder='please enter your password' value={password} onChange={handlePassword} />
        <p className={`${password.length > 8 ? '': 'text-red-400 text-lg' }`}>{password.length>8 ? '': 'please entr the 8 letter in the input'}</p>
   </div>
    </div>
  )
}

export default PaawordMangerHook