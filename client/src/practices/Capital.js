import React, { Component } from 'react'
import CapitalList from './CapitalList'
import CapitalAnswer from './CapitalAnswer'


const capitalList=[
    {
        capitalId: 1,
        capitalname: "New dehil"
    },
    
    {
        capitalId: 2,
        capitalname: "Hyderabad"
    },
    
    {
        capitalId: 3,
        capitalname: "mbnr"
    },
    
    {
        capitalId: 4,
        capitalname: "kothakota"
    },
    
    {
        capitalId: 5,
        capitalname: "wanaparthy"
    },
    
    {
        capitalId: 6,
        capitalname: "warangal"
    },
    
    {
        capitalId: 7,
        capitalname: "kalam"
    },
    
    {
        capitalId: 8,
        capitalname: "bengulor"
    },
    
]

const countryList=[
    {
        countryId: 1,
        countryname: "India"
    },
    
    {
        countryId: 2,
        countryname: "america"
    },
    
    {
        countryId: 3,
        countryname: "Japan"
    },
    
    {
        countryId: 4,
        countryname: "Newzailand"
    },
    
    {
        countryId: 5,
        countryname: "FineLand"
    },
    
    {
        countryId: 6,
        countryname: "London"
    },
    
    {
        countryId: 7,
        countryname: "Canada"
    },
    
    {
        countryId: 8,
        countryname: "Europ"
    },
    
]

class Capital extends Component{
    state={activeCapital: capitalList[0].capitalId}
    getFiletered=()=>{
        const {activeCapital}=this.state;
        const filteredItem=countryList.filter(each=>each.countryId===activeCapital)
        return filteredItem;
    }
    updateAnswer=(countryId)=>{
        // console.log("coutery",countryId)
        // const {}
        this.setState({activeCapital: countryId})
    }
    render(){
        const filteredItem=this.getFiletered()
         return (
            <div className='min-h-[100vh] flex items-center justify-center bg-[#93c5fd]'>
                <div className='p-10 bg-white rounded-lg'>
                    <h1 className='text-xl md:text-3xl font-serif font-semibold'>COuntries and Capitals</h1>
                <select
                    className='border border-2 border-black'
                    value={this.state.activeCapital}
                    onChange={(e)=>this.updateAnswer(Number(e.target.value))}
                    >
                       {capitalList.map(item=>(
                         <option key={item.capitalId} value={item.capitalId}>
                            {item.capitalname}
                        </option>
                       ))}
                        
                    </select>
                    your country name?
                <div>
                    {filteredItem.map(item=>(
                        <CapitalAnswer capitalans={item} key={item.countryId} />
                    ))}
                </div>
                </div>
            </div>
        )
    }
}

export default Capital