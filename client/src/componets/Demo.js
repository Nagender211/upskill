import { useEffect, useState } from "react";


const ListDestiontion=[
    {
        id: 1,
        title: "Hyderabad"

    },
    {
        id: 2,
        title: "Mahabhunagar"

    },
    {
        id: 3,
        title: "Wanaparthy"

    },
    {
        id: 4,
        title: "Kothakota"

    },
    {
        id: 5,
        title: "Kothathapally"

    },
    
]

const Demo=()=>{

    // const [loggin,setLoggin]=useState(true)
    // const handlClick=()=>{
    //     if(loggin===false){
    //         return <button>Loggin</button>
    //     }
    //     else{
    //         return <button>Logout</button>
    //     }

    // }
    // const [light,setLight]=useState(false);
    
    // const handleLight=()=>{
    //     // setLight(false)
    //     setLight(prev=>{
    //         setLight(!prev)
    //     })
    // }

    // const [count,setCount]=useState(0);

    // const handleRandom=()=>{
    //     const randomNumber=Math.floor(Math.random()*100)
    //     setCount(randomNumber)
    // }

        const [serachinput,setSearchInput]=useState('')
        const [initial,setIntial]=useState(ListDestiontion)
        const handleInputSerach=(e)=>{
            setSearchInput(e.target.value)

        }
        // useEffect(()=>{
        //     const filletedItem=ListDestiontion.filter(each=>each.title.includes(serachinput))
        //     setIntial(filletedItem)
        // },[serachinput])
        // const handleDelete=(id)=>{
        //     const deleDetedItem=initial.filter(each=>each.id !==id);
        //     setIntial(deleDetedItem)

        // }

        const [count,setCount]=useState(0);

        const handleCount=()=>{
            setCount(count+1)
        }

        useEffect(()=>{
            document.title=`Score: ${count}`
        })


    return (
        // <div className={`min-h-[100vh]  ${light ? 'bg-black text-white': 'bg-white text-black'}`}>
        //   <button className={`border-input px-12  ${light ? 'border-white': 'border-black'}`} onClick={handleLight}>{light ? 'Dark': 'Light'}</button>
           
        // </div>


        // <div>
        //     <h1>{count}</h1>
        //     <button onClick={handleRandom}>generate random number</button>
        // </div>



        // <div>
        //     <input placeholder="serach your destination" value={serachinput} onChange={handleInputSerach} />
        //     {initial.map(item=>(
        //         <div key={item.id}>
        //             <h1>{item.title}</h1>
        //             <button onClick={()=>handleDelete(item.id)}>Delete</button>

        //         </div>
        //     ))}
        // </div>


        <div>
            <h1>{count}</h1>
            <button onClick={handleCount}>Click</button>

        </div>
    )

}
export default Demo;