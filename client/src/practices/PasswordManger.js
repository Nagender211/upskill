import React, { Component } from 'react'
import PasswordItem from './PasswordItem'
import {v4 as uuidv4} from 'uuid'



class PasswordManger extends Component{
        state={initialList: [],websitename: '',username: '',password: ''}   
        handleWebsite=(e)=>{
            this.setState({websitename: e.target.value})
        } 
        handleUsername=(e)=>{
            this.setState({username: e.target.value})
        } 
        handlepassword=(e)=>{
            this.setState({password: e.target.value})
        } 
        handleSubmit=(e)=>{
            e.preventDefault();
            const {websitename,username,password,passwordshow}=this.state
            // this.setState({})
            const createMessage={
                id: uuidv4(),
                websitename,
                username,password,
                passwordshow: false,

            }
            this.setState(prev=>({initialList: [...prev.initialList,createMessage]}))

        }
        showPasword=(id)=>{
            // const {passwordshow}=this.state
            // const tagertd=initialList.find(each=>each.id===id)
            // // this.setState({tagertd})
            // if(tagertd){
            //     this.setState(prev=>({passwordshow: !prev.passwordshow}))
            // 
            this.setState((prev)=>({initialList: prev.initialList.map(item=>
                item.id===id ? {...item,passwordshow: !item.passwordshow}:item
            )
        }))
       
        }
        
    render(){
        const {initialList,websitename,username,password}=this.state
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <label></label> */}
                    <input placeholder='enter your website' value={websitename} onChange={this.handleWebsite} className='px-2 border-input py-2 rounded-md text-xl' />
                    <input placeholder='enter your usename' value={username} onChange={this.handleUsername} className='px-2 border-input py-2 rounded-md text-xl' />
                    <input placeholder='enter your paswprd' type='password' value={password} onChange={this.handlepassword} className='px-2 border-input py-2 rounded-md text-xl' />
                    <button className='bg-green-300 text-white text-xl font-semibold px-3 py-2' type='submit'>ADD</button>
                </form>
                {initialList.map(item=>(
                    <PasswordItem passwordDeaties={item} key={item.id} showPasword={this.showPasword} />
                ))}
                {/* <PasswordItem /> */}
            </div>
        )
    }
}

export default PasswordManger