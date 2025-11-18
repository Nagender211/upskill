import React from 'react'
import { useNavigate } from 'react-router-dom'

const Feedback = () => {
    const navigate = useNavigate();
    const handleImoj=()=>{
        
        navigate('/thank-you')

    }
  return (
    <div className='min-h-[100vh] flex flex-col justify-center items-center bg-red-400'>
        <div className='bg-white p-10 justify-center flex flex-col'>
            <h1>How you are satisifyied with our service give us feed back or rate</h1>
            <div className='flex justify-start items-start gap-4'>
                <img src='' alt='bad' onClick={handleImoj} />
                <img src='' alt='bad' onClick={handleImoj} />
                <img src='' alt='bad' onClick={handleImoj} />
                {/* <img src='' alt='avg' />
                <img src='' alt='good' /> */}

            </div>
        </div>
    </div>
  )
}

export default Feedback