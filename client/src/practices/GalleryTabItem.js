import React from 'react'

const GalleryTabItem = (props) => {
    const {galleryTabItemImg,updateTabactive}=props;
    const {image,gallerdId}=galleryTabItemImg;
    const updateTabItem=()=>{
        updateTabactive(gallerdId);

    }
  return (
    <div className='inline-flex justify-start !items-center min-w-[48px] relative'>
        <img src={image} alt='imags' className='w-10 h-10 object-cover rounded-md pb-2' onClick={updateTabItem} />
        <span className='absolute w-full h-full bg-slate-500'></span>
    </div>
  )
}

export default GalleryTabItem