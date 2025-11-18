import React from 'react'
import Header from '../componets/Header'
import './homeStyle.css'



const BlogList=[
  {
    id: 1,
    image: "https://media.istockphoto.com/id/2209015082/photo/beautiful-woman-spending-time-in-the-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=ejA_qoFWiPnxDMrEL4rF5C2k4Ap0PC70fmC-W2Desn4=",
    title: "This the tile of the blog This the tile of the ",
    readTime: "01/10/2025/ 2min to read",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    viewaIocn: "https://cdn-icons-png.flaticon.com/512/752/752398.png",
    viewNum: "1",
    likesIcon: "https://static.vecteezy.com/system/resources/previews/002/323/494/non_2x/heart-favorite-icon-love-happy-valentine-romantic-marriage-sign-free-vector.jpg",
    likesNum: "1"
  },
  {
    id: 2,
    image: "https://media.istockphoto.com/id/2209015082/photo/beautiful-woman-spending-time-in-the-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=ejA_qoFWiPnxDMrEL4rF5C2k4Ap0PC70fmC-W2Desn4=",
    title: "This the tile of the blog This the tile of the blog",
    readTime: "01/10/2025/ 2min to read",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    viewaIocn: "https://cdn-icons-png.flaticon.com/512/752/752398.png",
    viewNum: "1",
    likesIcon: "https://static.vecteezy.com/system/resources/previews/002/323/494/non_2x/heart-favorite-icon-love-happy-valentine-romantic-marriage-sign-free-vector.jpg",
    likesNum: "1"
  },
    {
    id: 3,
    image: "https://media.istockphoto.com/id/2209015082/photo/beautiful-woman-spending-time-in-the-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=ejA_qoFWiPnxDMrEL4rF5C2k4Ap0PC70fmC-W2Desn4=",
    title: "This the tile of the blog This the tile of the blog",
    readTime: "01/10/2025/ 2min to read",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    viewaIocn: "https://cdn-icons-png.flaticon.com/512/752/752398.png",
    viewNum: "1",
    likesIcon: "https://static.vecteezy.com/system/resources/previews/002/323/494/non_2x/heart-favorite-icon-love-happy-valentine-romantic-marriage-sign-free-vector.jpg",
    likesNum: "1"
  },
    {
    id: 4,
    image: "https://media.istockphoto.com/id/2209015082/photo/beautiful-woman-spending-time-in-the-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=ejA_qoFWiPnxDMrEL4rF5C2k4Ap0PC70fmC-W2Desn4=",
    title: "This the tile of the blog This the tile of the blog",
    readTime: "01/10/2025/ 2min to read",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    viewaIocn: "https://cdn-icons-png.flaticon.com/512/752/752398.png",
    viewNum: "1",
    likesIcon: "https://static.vecteezy.com/system/resources/previews/002/323/494/non_2x/heart-favorite-icon-love-happy-valentine-romantic-marriage-sign-free-vector.jpg",
    likesNum: "1"
  },
    {
    id: 4,
    image: "https://media.istockphoto.com/id/2209015082/photo/beautiful-woman-spending-time-in-the-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=ejA_qoFWiPnxDMrEL4rF5C2k4Ap0PC70fmC-W2Desn4=",
    title: "This the tile of the blog This the tile of the blog",
    readTime: "01/10/2025/ 2min to read",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    viewaIocn: "https://cdn-icons-png.flaticon.com/512/752/752398.png",
    viewNum: "1",
    likesIcon: "https://static.vecteezy.com/system/resources/previews/002/323/494/non_2x/heart-favorite-icon-love-happy-valentine-romantic-marriage-sign-free-vector.jpg",
    likesNum: "1"
  },
    {
    id: 4,
    image: "https://media.istockphoto.com/id/2209015082/photo/beautiful-woman-spending-time-in-the-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=ejA_qoFWiPnxDMrEL4rF5C2k4Ap0PC70fmC-W2Desn4=",
    title: "This the tile of the blog This the tile of the blog",
    readTime: "01/10/2025/ 2min to read",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    viewaIocn: "https://cdn-icons-png.flaticon.com/512/752/752398.png",
    viewNum: "1",
    likesIcon: "https://static.vecteezy.com/system/resources/previews/002/323/494/non_2x/heart-favorite-icon-love-happy-valentine-romantic-marriage-sign-free-vector.jpg",
    likesNum: "1"
  },
    {
    id: 4,
    image: "https://media.istockphoto.com/id/2209015082/photo/beautiful-woman-spending-time-in-the-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=ejA_qoFWiPnxDMrEL4rF5C2k4Ap0PC70fmC-W2Desn4=",
    title: "This the tile of the blog This the tile of the blog",
    readTime: "01/10/2025/ 2min to read",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    viewaIocn: "https://cdn-icons-png.flaticon.com/512/752/752398.png",
    viewNum: "1",
    likesIcon: "https://static.vecteezy.com/system/resources/previews/002/323/494/non_2x/heart-favorite-icon-love-happy-valentine-romantic-marriage-sign-free-vector.jpg",
    likesNum: "1"
  },
  
]
const Home = () => {

  return (
    <div>
      <Header />
      <div className='common-padding grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full gap-6'>
        {BlogList.map(item=>(
          <div className='w-full flex flex-col border rounded-xl' key={item.id}>
          <img src={item.image} alt='' className='w-full object-cover rounded-t-xl'/>
          <div className='flex flex-col justify-start items-start p-3'>
            <h1 className='line-clamp-2 font-bold text-xl md:text-2xl font-serif pb-2'>{item.title}</h1>
            <span className='text-[10px] text-gray-400 font-serif pb-5'>{item.readTime}</span>
            <p className='line-clamp-4 font-normal text-lg md:text-xl font-serif'>{item.para}</p>

          </div>
        <hr />
          <div className='flex gap-4 px-5 py-3'>
          <div className='flex flex-col justify-center items-center'>
            <img src={item.viewaIocn} alt='view-icom' className='w-8' />
            <span className='text-xs font-sans'>{item.viewNum}</span>
          </div>
           <div className='flex flex-col justify-center items-center'>
            <img src={item.likesIcon} alt='like-icom' className='w-8' />
            <span className='text-xs font-sans'>{item.likesNum}</span>
          </div>
          <input placeholder='comments' className='w-full border'/>
          

        </div>



        </div>
        ))}

        
      </div>
    </div>
  )
}

export default Home