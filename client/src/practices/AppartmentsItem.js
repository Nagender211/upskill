import React from 'react'

const AppartmentsItem = (props) => {
  const {appermentItem,handleStar}=props;
  const {title,date,id,isStar}=appermentItem;
  const handleFav=()=>{
    handleStar(id)
  }
  return (
    <div>
      <h1>{title}</h1>
      <h1>{date}</h1>
      <img src={isStar ? 'https://cdn-icons-png.flaticon.com/512/541/541415.png': 'https://www.iconpacks.net/icons/1/free-star-icon-984-thumb.png'} className='w-6' onClick={handleFav} />
    </div>
  )
}

export default AppartmentsItem