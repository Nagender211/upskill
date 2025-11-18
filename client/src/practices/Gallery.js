import React from 'react'

const Gallery = (props) => {
    const {galleryItem}=props;
    const {image}=galleryItem;
  return (
    <div className='max-sm:px-4 max-sm:py-4'>
        <img src={image} className='w-[450px] h-[250px] rounded-xl object-cover' />
        {/* hello */}
    </div>
  )
}

export default Gallery