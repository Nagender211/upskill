import React, { Component } from 'react'

// const userList=[
//   {
//     id: 1,
//     title: "My First Post",
//     date: "Aug 15th",
//     discrtion: "lorem ipusum this the blog discrioon of the first post"
//   },
//   {
//     id: 2,
//     title: "My First Post",
//     date: "Aug 15th",
//     discrtion: "lorem ipusum this the blog discrioon of the first post"
//   },
//   {
//     id: 3,
//     title: "My First Post",
//     date: "Aug 15th",
//     discrtion: "lorem ipusum this the blog discrioon of the first post"
//   },
//   {
//     id: 4,
//     title: "My First Post",
//     date: "Aug 15th",
//     discrtion: "lorem ipusum this the blog discrioon of the first post"
//   },
//   {
//     id: 5,
//     title: "My First Post",
//     date: "Aug 15th",
//     discrtion: "lorem ipusum this the blog discrioon of the first post"
//   },
  
  
// ]

class HomePage extends Component{
  state={intialList: []}

  componentDidMount(){
    this.getApiCall()
  }
  getApiCall=async()=>{
    const respose=await fetch('https://apis.ccbp.in/blogs');
    const data=await respose.json()
    console.log(data);
    const updatedData=data.map(item=>({
      id: item.id,
      title: item.title,
      imageUrl: item.image_url,
      avatarUrl: item.avatar_url,
      author: item.author,
      topic: item.topic
    }))
    console.log(updatedData)
    this.setState({intialList: updatedData})

  }
  render(){
    const {intialList}=this.state
  return (
    // <div className='flex flex-col justify-center px-12 pb-12'>
    //   <div className='flex flex-col gap-3 justify-center items-center text-center pt-12'>
    //     <img src='https://assets.ccbp.in/frontend/react-js/profile-img.png' alt='ptofile' className='w-20' />
    //     <h1 className='text-xl font-bold font-mono'>Dharmaka Nagende</h1>
    //     <p className='text-lg text-gray-500 font-normal font-mono'>Software Developer</p>
    //   </div>
    //  {userList.map(item=>(
    //    <div className='flex flex-col gap-5 pt-4 pb-4 border-b-2' key={item.id}>
    //     <div className='flex justify-between'>
    //       <h1 className='text-base md:text-xl font-normal md:font-bold font-mono'>{item.title}</h1>
    //       <p className='text-lg text-gray-500 font-normal font-mono'>{item.date}</p>
    //     </div>
    //     <p>{item.discrtion}</p>
    //   </div>
    //  ))}
      
    // </div>
    

    <div className='flex flex-col justify-center px-12 pb-12 min-h-[100vh] items-center'>
      <div className='flex flex-col items-start justify-center'>
        {intialList.map(item=>(
        <div className='flex flex-col md:flex-row gap-5 py-5' key={item.key}>
        <img src={item.imageUrl} alt={'this is the pic'} className='w-full md:w-40 h-auto object-cover rounded-md' />
        <div className='relative flex flex-col'>
          <p className='text-base text-gray-400 font-mono pb-2'>{item.topic}</p>
          <h1 className='text-xl font-bold font-mono pb-4'>{item.title}</h1>
          <div className='flex gap-2 !items-center'>
            <img src={item.avatarUrl} alt='profile' className='w-3 h-3 rounded-full' />
            <p className='text-lg text-gray-400 font-mono'>{item.author}</p>

          </div>
        </div>
      </div>
      ))}

      </div>


    </div>
  )
}
}
export default HomePage