import React from 'react'

const CommentItem = (props) => {
    const {updateLike,updateDelete,commentDetaile}=props;
    const {username,comment,id,isFave}=commentDetaile;
    const handleDeleteBtn=()=>{
        updateDelete(id)
    }
    const handleLikeBtn=()=>{
        updateLike(id)
        
    }
  return (
    <div className='border-b-2 pb-8 flex flex-col'>
       <div className='flex flex-col gap-3 sm:pl-12 pt-5'>
         <h1><span className='mr-2 bg-orange-300 px-2 py-2 rounded-full text-center text-lg text-white font-medium'>{username[0].toUpperCase()}{username[1].toUpperCase()}</span>{username}</h1>
        <h1 className='pl-12 text-lg pb-3'>{comment}</h1>
       </div>
        <div className='flex justify-between sm:px-12'>
        <img src={isFave ? 'https://icons.veryicon.com/png/o/miscellaneous/yuanql/icon-like.png': 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-like-icon-png-image_4013523.jpg'} className='w-12' onClick={handleLikeBtn} />
        {/* <button onClick={handleDeleteBtn}>delet</button> */}
        <img src='https://cdn-icons-png.flaticon.com/512/3161/3161358.png' className='w-12' onClick={handleDeleteBtn} />

        </div>
    </div>
  )
}

export default CommentItem