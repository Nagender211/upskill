import React from 'react'

const HistoryList = (props) => {
    const {historyListDetails,daleteHandle}=props;
    const {timeAccessed,logoUrl,title,domainUrl,id}=historyListDetails;
    const handleDlete=()=>{
        daleteHandle(id)

    }
  return (
    <div className='flex justify-between'>
        <p className='font-medium font-serif'>{timeAccessed}</p>
        <img src={logoUrl} className='w-12' />
        <h2>{title}</h2>
        <p>{domainUrl}</p>
        <img src='https://assets.ccbp.in/frontend/react-js/delete-img.png' className='w-6 cursor-pointer' onClick={handleDlete}/>
    </div>
  )
}

export default HistoryList