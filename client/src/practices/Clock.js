import React, { Component } from 'react'
import { data } from 'react-router-dom';

class Clock extends Component{
    constructor(props){
        super(props)
            this.state={date: new Date()}
        
    }
    componentDidMount(){
        this.timerId=setInterval(()=>this.tick(), 1000);
        console.log("comunt is called")
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
        console.log("cleared");
    }
    tick(){
        this.setState({date: new Date()})

    }
    render(){
        const {date}=this.state
        console.log("render is called",date)
        return(
            <div>
                hell
                <p>{date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock