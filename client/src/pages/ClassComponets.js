import React from 'react'
import { Component } from 'react'
// class ClassComponets extends Component{
//     handdleClick=()=>{
//         alert("this is the alrt you want to see")
//     }
//     render(){

//         return (
//             <div>hello
//                 <button onClick={this.handdleClick}>click me to get and alrt message</button>
//             </div>
//         )
//     }
// }

// class ClassComponets extends Component{
//     state = {count: 0}
//      handleIncreament=()=>{
//             this.setState(prec=> {
//                 if(prec.count === 10){
//                     return null;
//                 }
//                 return ({count: prec.count+1})
//             })
//         }
//         handleDecreament=()=>{
//             this.setState(prec=> {
//                 if(prec.count === 0 ){
//                     return null;
//                 }
//                 return ({count: prec.count-1})
//             })
            
//         }

//         render(){
        
//         const {count} = this.state;
//         console.log(count)
        
       
//         return(
//             // if()
//             <div className=''>
//                 <p>count is {count}</p>
//                 <button onClick={this.handleIncreament}>Increament+</button>
//                 <button onClick={this.handleDecreament}>Decreament-</button>

//             </div>
//         )
//     }
// }
class ClassComponets extends Component{
    // state = {count: 0}
    // handleIncremnet=()=>{
    //     this.setState(prev=>({count: prev.count+1}))
    // }
    //  handleRest=()=>{
    //     this.setState(({count: 0}))
    // }

    // render(){
    //     const {count} = this.state;
    //     return(
    //         <div className='bg-[#f1f5f8] flex flex-col gap-10 py-12 justify-center items-center px-8'>
    //         <h1 className='font-bold text-lg md:text-3xl'>You have clicked the button <span className='text-[#c20a72]'>{count}</span> times</h1>
    //         <p className='font-medium text-lg'>click here to increar the count</p>
    //         <div className='flex gap-2'>
    //         <button onClick={this.handleIncremnet} className='bg-[#007bff] text-[#ffff] cursor-pointer py-5 px-10 flex items-center justify-center text-center text-lg font-normal'>Click Me</button>
    //         <button onClick={this.handleRest} className='bg-[#007bff] text-[#ffff] cursor-pointer py-5 px-10 flex items-center justify-center text-center text-lg font-normal'>Rest Me</button>
    //         </div>
    //         </div>
    //     )
    // }    





    // state = {mangoCount: 0,bannaCount: 0}
    // handleMangoCount=()=>{
    //     this.setState(pre=>{
    //         if(pre.mangoCount<0){
    //             return null
    //         }
    //         return ({mangoCount: pre.mangoCount+1});
    //     })
    // }

    // handleBannaCount=()=>{
    //     this.setState(pre=>{
    //         if(pre.bannaCount<0){
    //             return null
    //         }
    //         return ({bannaCount: pre.bannaCount+1});
    //     })
    // }
    // render(){
    //     const {mangoCount,bannaCount} = this.state
    //     return(
    //         <div className='bg-[#ffd569] flex flex-col items-center justify-center min-h-[100vh]'>
    //             <div className='bg-white border rounded-xl py-10 px-5 md:px-16 flex flex-col gap-6'>
    //                 <h1 className='text-lg md:text-2xl mb-10 md:mb-16 flex items-center justify-center text-center'>Bob as eat {mangoCount} mongo and {bannaCount} eat </h1>
    //                 <div className='flex gap-7 max-sm:flex-col justify-center items-center'>
    //                    <div className='flex flex-col justify-center items-center'>
    //                         <img src='https://assets.ccbp.in/frontend/react-js/mango-img.png' alt='mango' className='w-60 pb-8' />
    //                         <button className='bg-[#007bff] text-white text-lg font-medium py-4 px-5' onClick={this.handleMangoCount}> eat mango </button>
    //                    </div>
    //                      <div className='flex flex-col justify-center items-center'>
    //                         <img src='https://assets.ccbp.in/frontend/react-js/banana-img.png' alt='mango' className='w-60 pb-8' />
    //                         <button className='bg-[#007bff] text-white text-lg font-medium py-4 px-5' onClick={this.handleBannaCount} > eat banna </button>
    //                    </div>
    //                 </div>
                    
    //             </div>
                
    //         </div>
    //     )
    // }





    // state = {sub: true}
    // handleSub=()=>{
    //     //  this.setState(pre=>({sub:})) 
    //     this.setState(prev=>({sub: !prev.sub}))  
        
    //     }
    // render(){
    //     const {sub} =this.state
        
    //     return (
    //         <div className='bg-[#1e293b] min-h-[100vh] flex flex-col justify-center items-center'>
    //             <h1 className='text-center text-[#f0bb03] text-xl md:text-3xl pb-10 font-bold font-sans' >Welcome</h1>
    //             <p className='text-center text-[#ffff] text-xl pb-10 font-medium font-sans'>Thank  you happy learning</p>
    //             <button className='py-3 px-5 text-[#000] bg-white rounded-lg' onClick={this.handleSub} > {sub ? 'sub': 'unsub'} </button>


                
    //         </div>
    //     )
    // }




    // state = {status: true}
    // handdleMode=()=>{
    //     this.setState(prev=>({status: !prev.status}))
    // }
    // render(){
    //     const {status} = this.state
    //     return(
    //         <div className='min-h-[100vh] bg-white flex flex-col items-center justify-center'>
    //             <div className={`pt-7 pb-4 px-7 border rounded-2xl ${status ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col`}>
    //                 <h1 className={`text-center  text-xl pb-4 font-bold font-sans ${status ? 'text-white' : 'text-black'}`}>Click To change MODE</h1>
    //                 <button className='py-3 px-5 text-[#000] bg-white border rounded-lg' onClick={this.handdleMode} >{status ? 'Light Mode': 'Dark Mode'}</button>
    //             </div>
                
    //         </div>
    //     )
    // }



    // state = {first: false,last: false}
    // handdleFist=()=>{
    //     this.setState(prev=>({first: !prev.first}))
    // }
    // handdleLast = ()=>{
    //     this.setState(prev=>({last: !prev.last}))
    // }

    // render(){
    //     const {first,last} = this.state;
    //     return(
    //         <div className='bg-red-300 min-h-[100vh] flex flex-col justify-center items-center '>
    //             <h1 className='font-bold font-sans text-xl md:text-3xl text-white'>Show/Hide</h1>
                    

    //             <div className='flex gap-10 max-sm:flex-col items-center justify-center'>
                  
                    

    //                 <div className='flex flex-col items-center'>
    //                       <button className='border bg-white text-[#dd1264] rounded-2xl px-12 my-5' onClick={this.handdleFist} >{first ? 'Show' : 'Hide'}</button>
    //                      <h1 className={`bg-white border rounded-2xl py-10 px-12 ${first ? 'invisible' : 'visible'}`}>Nagender</h1>

    //                 </div>
                  
                   
    //                 <div className='flex flex-col items-center'>
    //                                             <button className='border bg-white text-[#dd1264] rounded-2xl px-12 my-5' onClick={this.handdleLast} >{last ? 'Show' : 'Hide'}</button>

    //                      <h1 className={`bg-white border rounded-2xl py-10 px-12 ${last ? 'invisible' : 'visible'}`}>Dharmakari</h1>
    //                 </div>
                    

                    
    //             </div>
    //         </div>
    //     )
    // }



    // state = {count: 0}
    // handleRandom=()=>{
    //     let ranNumb = Math.floor(Math.random() *1001);
    //     this.setState(prev=>({count: ranNumb}))
    // }
    // render(){
    //     const {count} =this.state;
    //     return(
    //         <div className='bg-white flex flex-col justify-center items-center min-h-[100vh] max-sm:px-4'>
    //             <div className='bg-red-300 pt-20 pb-10 px-12 flex flex-col justify-center items-center rounded-2xl'>
    //                 <h1 className='text-black font-sans font-bold pb-12 text-xl md:text-3xl'>Count {count}</h1>
    //                 <p className='font-medium text-xl font-sans pb-4'>{(count % 2 ===0 ) ? 'Count is Even' : 'Count is ODD'}</p>
    //                 <button className='bg-gray-300 text-black font-normal py-4 px-10' onClick={this.handleRandom}>Increament</button>
    //                 <p className='text-center pt-4'>increar by random number between 0 to 1000</p>

    //             </div>
                
    //         </div>
    //     )
    // }


    // state = {status: false};
    // handdleUser=()=>{
    //     this.setState(prev=>({status: !prev.status}))
    // }
    // render(){
    //     const {status} = this.state;
    //     return(
    //         <div className='bg-white flex flex-col justify-center items-center min-h-[100vh] max-sm:px-4'>
    //             <div className='bg-[#b5b9ff] py-20 w-full md:w-[380px] flex flex-col justify-center items-center'>
    //                 <h1 className='text-white font-sans font-bold pb-7 text-xl md:text-3xl px-12 text-center'>{status ? "WelCome User" : "Please Login"}</h1>
    //                 <button className='bg-gray-300 text-black font-medium text-lg border rounded-2xl px-5 py-3 text-center flex items-center' onClick={this.handdleUser}>{status ? "Logout": "Loogin"}</button>


    //             </div>

    //         </div>
    //     )
    // }

    // state = {count: 0};
    // handleCount=()=>{
    //     this.setState(({count: Math.floor(Math.random()*101)}))
    // }
    // render(){
    //     const {count} =this.state;
    //     return(
    //         <div className='bg-[url(https://assets.ccbp.in/frontend/react-js/random-no-generator-bg.png)] bg-no-repeat bg-cover flex flex-col justify-center items-center min-h-[100vh]'>
    //             <div className='bg-[ #e4ebf3] flex flex-col justify-center items-center py-6 px-8 gap-5'>
    //                 <h1 className='text-xl md:text-2xl font-serif font-bold tet-[#0b69ff]'>Random Number</h1>
    //                 <p>generator a random number form the 0 to 100</p>
    //                 <button className='bg-[#0b69ff] text-white text-xl font-medium font-serif rounded-lg p-4' onClick={this.handleCount}>Gnerate</button>
    //                 <h1 className='text-[#0b69ff] text-xl font-bold '>{count}</h1>    
    //             </div>
    //             heellp;
    //         </div>
    //     )
    // }


    // state={}
    // render(){
    //     return(
    //         <div>
    
    //         </div>
    //     )
    // }

}
export default ClassComponets;

