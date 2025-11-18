import React, { useEffect, useState } from 'react'
import { api } from '../utils/api'

const All = () => {
    const [user,setUser]=useState('');
    
    const [error,setError]=useState(null);
    const [loading,setloading]=useState(true);
    useEffect(()=>{
    (async()=>{
      try {
        const res=await api.get('/all')
        console.log("user data is",res.data.data)
        setUser(Array.isArray(res?.data?.data) ? res.data.data : [])
      } catch (error) {
            setError(error)
        }
        finally {
        setloading(false)
      }

    })()
  },[])
  if (loading) return <div>Loading....</div>
  if (error) return <div>{error}</div>
  return (
    <div>
        <h1>All</h1>
        {user.length === 0 ? (<div>No User are Found</div>) : (
            <ul>
                {user?.map((index)=>(
                    <li key={index._id}>
                        <h1>{index.name }</h1>
                        <h1>{index.email }</h1>
                    </li>
                ))}
            </ul>
        )}
       
    </div>

  )
}

export default All