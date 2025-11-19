import React, { useEffect, useState } from 'react'
import HomePage from './Home'
import { useParams } from 'react-router-dom';

const BlogInnerPage = () => {
    const {id}=useParams();
    const [initialList, setInitialList] = useState(null);

    useEffect(()=>{
        const getApiCall=async()=>{
            const respose=await fetch(`https://apis.ccbp.in/blogs/${id}`);
            const data=await respose.json();
            console.log(data);
            const updatedData={
                id: data.id,
                author: data.author,
                avatarUrl: data.avatar_url,
                content: data.content,
                imageUrl: data.image_url,
                title: data.title,
                topic: data.topic
            }
            setInitialList(updatedData);

        }
        
        getApiCall();
    },[])
    if (!initialList) {
  return <h1 className="text-center mt-10">Loading...</h1>;
}
    
  return (
    <div className='flex flex-col justify-center items-start'>
        <img src={initialList.imageUrl} alt='image url' className='w-full h-auto' />
        <h2>{initialList.title}</h2>
       <div className='flex gap-2  items-center'>
        <img src={initialList.avatarUrl} className='rounded-full w-12 h-12' />
         <p>{initialList.author}</p>

       </div>
        <p>{initialList.topic}</p>
        <p>{initialList.content}</p>
    </div>
  )
}

export default BlogInnerPage