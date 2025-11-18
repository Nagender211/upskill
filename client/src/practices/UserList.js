import React from 'react'

const UserList = (props) => {

    // const {listUserProp,deletedUser}=props
    // const {image,name,dep,id}=listUserProp;
    // const handleDelet=()=>{
    //     deletedUser(id)
    // }



    // const {denstiniList} = props;
    // const {image,title}=denstiniList


    // const {todoList,handleDeleteButton} = props;
    // const {title,id} = todoList;
    // const handleDelet=()=>{
    //   handleDeleteButton(id)
    // }





    const {suggestionList,onArrowSelect}=props;
    const {title,id}=suggestionList;
    const clcikedArrow=()=>{
      onArrowSelect(id);
    }

  return (
    // <div className='flex flex-col justify-center items-center'>
    //     <div className='flex flex-col justify-center items-start'>
    //         <ul className='flex flex-col justify-start items-start'>
    //         <li className='flex justify-start items-start'>
    //             <img src={image} alt='icon' className='w-12'/> 
    //             <div>
    //                 <h3>{name}</h3>
    //             <p>{dep}</p>
    //             </div>
    //             <button onClick={handleDelet}>
    //                 <img src='https://assets.ccbp.in/frontend/react-js/cross-img.png' alt='crossIcon' className='w-4' />
    //             </button>
    //             </li>
    //     </ul>
    //     </div>
    // </div>



    // <div className='pt-12'>
    //     <div className='flex flex-col gap-2'>
    //         <img src={image} alt='image' className='rounded-lg'/>
    //         <p className='tex-lg font-serif'>{title}</p>
    //     </div>

    // </div>

    <div className='flex justify-between'>
      
       <h1 className='pr-12'>{title}</h1>
        {/* <IMG>Delet</IMG> */}
        <img src='https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png ' className='w-5 cursor-pointer' onClick={clcikedArrow} />
    </div>
  )
}

export default UserList