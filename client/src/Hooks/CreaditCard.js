import React, { useState } from 'react'

const CreaditCard = () => {
    const [cardnumber,setCardNumber]=useState('')
    const [accountname,setAccountname]=useState('')

    const handleCardNumber=(e)=>{
        setCardNumber(e.target.value)

    }
      const handleAccountName=(e)=>{
        setAccountname(e.target.value)
    }
  return (
    <div className='flex min-h-[100vh] items-center justify-center'>
        <div className='relative bg-[url(https://assets.ccbp.in/frontend/hooks/credit-card-bg.png)] w-60 h-40'>
            <p className='absolute top-[50%] left-[25%] text-xl font-bold text-white'>{cardnumber}</p>
            <p className='absolute bottom-2 left-[25%] text-xl font-bold text-white'>{accountname}</p>

        </div>
        <div className='flex flex-1/2'>
            <input type='text' placeholder='please enter your number' className='border-input rounded-lg' value={cardnumber} onChange={handleCardNumber} />
            <input type='text' placeholder='please enter your name' className='border-input rounded-lg' value={accountname} onChange={handleAccountName} />
        </div>
    </div>
  )
}

export default CreaditCard