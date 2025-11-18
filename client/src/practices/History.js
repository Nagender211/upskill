import React, { Component } from 'react'
import './problemStyle.css'
import HistoryList from './HistoryList'

const historyList=[
    {
        id: 1,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
        {
        id: 2,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
        {
        id: 3,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },    {
        id: 4,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
        {
        id: 5,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
        {
        id: 6,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
        {
        id: 7,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
        {
        id: 8,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
        {
        id: 9,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
        {
        id: 10,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
        {
        id: 11,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
        {
        id: 12,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
        {
        id: 13,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
        {
        id: 14,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
        {
        id: 15,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
        {
        id: 16,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
    {
        id: 17,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
    {
        id: 18,
        timeAccessed: "5:42",
        logoUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
        title: "Linkdin login | singup",
        domainUrl: "https://www.linkedin.com/"
    },
    
]

class History extends Component{
    state={searchInput: "", historyListState: historyList}
    handleSearch=(e)=>{
        this.setState({searchInput: e.target.value})
    }
    daleteHandle=(id)=>{
        const {historyListState}=this.state;
        const deleteFfilete=historyListState.filter(each=>each.id !==id)
        this.setState({historyListState: deleteFfilete})
        
    }

    render(){
        const {searchInput,historyListState}=this.state;
        const filltered=historyListState.filter(each=>each.title.includes(searchInput))

         return (
            <div className='min-h-[100vh] flex flex-col'>
            {/* header */}
            <div className='bg-[#3367d6] relative common-padding-1 flex gap-10 py-12'>
                <img src='https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png' alt='' className='w-32 h-20 flex items-center' />
                <div className='absolute top-[50%] left-[40%] flex items-center justify-center'>
                    <img src='https://assets.ccbp.in/frontend/react-js/search-img.png' alt=''/>
                    <input placeholder='please enter the input' value={searchInput} onChange={this.handleSearch} />

                </div>
            </div>
            {/* body part */}
            <div className='pt-20 flex flex-col'>
                {filltered.length>0? (filltered.map(item=>(
                    <HistoryList historyListDetails={item} key={item.id} daleteHandle={this.daleteHandle} />
                ))): (<p className='flex justify-center items-center'>Not found</p>)}
            </div>

            
        </div>
    )
        }
}

export default History;