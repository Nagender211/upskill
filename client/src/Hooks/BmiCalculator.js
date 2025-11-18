import React, { useEffect, useState } from 'react'

const BmiCalculator = () => {
    const heightStorage=JSON.parse(localStorage.getItem("height"))
    const weightStorage=JSON.parse(localStorage.getItem("weight"))
    const [height,setHeight]=useState(heightStorage !== null ? heightStorage: 170);
    const [weight,setWeight]=useState(weightStorage !== null ? weightStorage: 60);

    const getBmi=()=>{
        const heightcal=height/100;
        const bmical=weight/heightcal **2;
        return bmical.toFixed(2)
    }

    const handleheightIncrement=()=>{
        setHeight(prev=>(prev+1))
    }
    const handleweightIncrement=()=>{
        setWeight(prev=>(prev+1))
    }
    const handleheightDecrement=()=>{
        setHeight(prev=>(prev-1))
    }
    const handleweightDecrement=()=>{
        setWeight(prev=>(prev-1))
    }
    useEffect(()=>{
        document.title=`bmi cal: ${getBmi(height,weight)}`
    },[height,weight])

    useEffect(()=>{
        localStorage.setItem("height",JSON.stringify(height))
    },[height])
    useEffect(()=>{
        localStorage.setItem("weight",JSON.stringify(weight))
    },[weight])

  return (
    <div>
        <div>
            <h1>{height}</h1>
            <div className='flex gap-3'>
                <button onClick={handleheightIncrement}>+</button>
                <button onClick={handleheightDecrement}>-</button>

            </div>
        </div>
        <div>
            <h1>{weight}</h1>
            <div className='flex gap-3'>
                <button onClick={handleweightIncrement}>+</button>
                <button onClick={handleweightDecrement}>-</button>

            </div>
        </div>

        <h1>totl bmi: {getBmi(height,weight)}</h1>
    </div>
  )
}

export default BmiCalculator