import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid'
import AppartmentsItem from './AppartmentsItem';

class AppartmentsApp extends Component{
    state={appermentList: [],title: '', date: '',isStar: false}
    handleApparmnet=(e)=>{
        e.preventDefault();
        const {title,date,isStar}=this.state
        console.log("button is clicked");
        const newApperment={
            id: uuidv4(),
            title,
            date,
            isStar
        }
        this.setState(prev=>({appermentList: [...prev.appermentList,newApperment],title: '',date: ''}))
    }
    hanldeTitle=(e)=>{
        this.setState({title: e.target.value})
    }
    handleDate=(e)=>{
        this.setState({date: e.target.value})
    }
    handleStar=(id)=>{
        this.setState(prev=>({appermentList: prev.appermentList.map(each=>{
            if(id===each.id){
                return {...each,isStar: !each.isStar}
            }
            return each
        })}))
        
    }
    handleStarUi=()=>{
        // this.setState
        const {appermentList,isStar}=this.state;
        // const filteredItem=appermentList.find(each=>each.isStar===isStar);
        // this.setState({appermentList: filteredItem})
        // this.setState(prev=>({appermentList: prev.appermentList.map(each=>{
        //     if(isStar){
        //         return {...each,}
        //     }
        // })}))
        // if(isStar){
            const filteredItem=appermentList.filter(eac=>eac.isStar===true)
            this.setState({appermentList: filteredItem})
        // }
    }
    render(){
        const {appermentList, title,date,isStar}=this.state
        return(
            <div className='px-12 flex flex-col items-center justify-center min-h-[100vh] gap-5'>
                <h1 className='flex justify-start items-start'>AppartmentsApp</h1>
                <form className='flex flex-col gap-5 w-[50%]' onSubmit={this.handleApparmnet} >
                    <input type='text' placeholder='please enter your title' required className='border-e-red-300 border rounded-md' value={title} onChange={this.hanldeTitle} />
                    <input type='date' required className='border-e-red-300 border' value={date} onChange={this.handleDate} />
                    <button className='p-5 bg-slate-400 text-white' type='submit'>Add</button>
                </form>
                <hr />
                <button onClick={this.handleStarUi}>{isStar ? 'UnStar': 'stared'}</button>
                <div>
                    {appermentList.map(itme=>(
                        <AppartmentsItem appermentItem={itme} key={itme.id} handleStar={this.handleStar} />
                    ))}
                </div>
            </div>
        )
    }
}

export default AppartmentsApp