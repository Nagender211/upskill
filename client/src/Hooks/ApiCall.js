import React, { useEffect, useState } from 'react'

const ApiCall = () => {
    const [bloglist,setBlogList]=useState([])

    useEffect(()=>{
        const getBlogApi=async()=>{
          const option = { 
                method: 'GET', // Typically used as a string 'GET'
            };

            const respose=await fetch('https://apis.ccbp.in/blogs',option);
            const resposeData=await respose.json()
        }
        getBlogApi()
    })
  return (
    <div>

    </div>
  )
}

export default ApiCall