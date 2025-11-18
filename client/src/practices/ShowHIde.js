import React, { Component } from 'react'
import Clock from './Clock'

class ShowHIde extends Component{
    state={showHideSate: false}
    handleButton=()=>{
        this.setState(prev=>({showHideSate: !prev.showHideSate}))
    }
    render(){
        const {showHideSate}=this.state
        return (
            <div>
                <button onClick={this.handleButton}>{showHideSate ? 'Hide': 'Show'}</button>
                {showHideSate && (<Clock />)}
            </div>
        )
    }
}

export default ShowHIde;