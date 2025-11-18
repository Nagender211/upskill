import React, { Component } from 'react'



class Toss extends Component{
    state={total: 0, head: 0, tail: 0,consitonImage: 0}
    tossCoin=()=>{
        const tossResult = Math.floor(Math.random() * 2);
        this.setState(prev=>({total: prev.total+1}))
        if(tossResult===0){
              this.setState(prev=>({head: prev.head+1}))
            
        }
        else{
              this.setState(prev=>({tail: prev.tail+1}))

        }
        this.setState({consitonImage: tossResult})
        return tossResult;

    }
    render(){
        const {total,head,tail,consitonImage}=this.state


        return(
            <div className='min-h-[100vh] flex flex-col justify-center items-center bg-[#e2a139]'>
               <div className='flex flex-col p-10 bg-white justify-center items-center gap-7'>
                     <h1 className='font-bold text-2xl text-center text-[#a35200]'>toss game</h1>
                     <p className='text-[#334155] text-lg font-medium'>head or tails</p>
                        {consitonImage===0 ? (<img src='https://assets.ccbp.in/frontend/react-js/heads-img.png' alt='head' className='w-20' />) : (<img src='https://assets.ccbp.in/frontend/react-js/tails-img.png' alt='tail' className='w-20' />)}
                        <button className='p-4 bg-yellow-300 rounded-md text-orange-400 font-semibold' onClick={this.tossCoin}>Toss Coin</button>
                        <div className='flex gap-7'>
                            <h1>total: {total}</h1>
                            <h1>head: {head}</h1>
                            <h1>head: {tail}</h1>

                        </div>
                    </div>
            </div>
        )
    }
}

export default Toss