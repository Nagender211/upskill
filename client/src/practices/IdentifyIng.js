import React from 'react'

const IdentifyIng = (props) => {
    const {tabItemDeatis}=props;
    const {image,title,para}=tabItemDeatis
  return (
    <div>
        <img src={image} alt='' />
        <h3>{title}</h3>
        <p className='line-clamp-1'>{para}</p>
    </div>
  )
}

export default IdentifyIng