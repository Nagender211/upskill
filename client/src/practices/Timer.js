import React, { Component } from 'react'

class Timer extends Component{
    constructor(prpos){
        super(prpos);
        this.state={min_count: 0,sec_count: 0,running: false}
    }
    componentDidMount(){
        this.timerId=setInterval(()=>this.tickStart(), 1000);
    }
    tickStart(){
        const {sec_count,min_count,running}=this.state
        if(running){
            if(sec_count===60){
            this.setState({sec_count: 0,min_count: min_count+1})
        }
        // if
        this.setState(prev=>({sec_count: prev.sec_count+1}))
        }
        
    }
    handlStop=()=>{
        this.setState({running: false})
    }
      handlStar=()=>{
        this.setState({running: true})
    }
    handleRest=()=>{
        this.setState({min_count: 0,sec_count: 0})
    }
    render(){
        const {min_count,sec_count}=this.state
        return(
            <div>
                <p>{min_count>9 ? `${min_count}`: `0${min_count}`}:{sec_count>9 ? `${sec_count}`: `0${sec_count}`}</p>
                <button className='text-white bg-green-400 px-4 py-2 rounded-sm' onClick={this.handlStar}>start</button>
                <button className='text-white bg-red-400 px-4 py-2 rounded-sm' onClick={this.handlStop} >Stop</button>
                <button className='text-white bg-orange-400 px-4 py-2 rounded-sm' onClick={this.handleRest}>Rest</button>

            </div>
        )
    }
}

export default Timer