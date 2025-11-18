import React, { Component } from 'react'
import AppStoreTabs from './AppStoreTabs'


const tabList=[
    {
        
        tabIdName: "socila",
        displayText: "Social"
    },
    {
        tabIdName: "games",
        displayText: "Games"
    },
    {
        tabIdName: "news",
        displayText: "News"
    },
    {
        tabIdName: "food",
        displayText: "Food"
    },
]

const appsItem=[
    {
        appId: 1,
        categerory: "socila",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "Instagram"
    },
    {
        appId: 2,
        categerory: "socila",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "facebook"
    },
        {
        appId: 3,
        categerory: "socila",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "youtub"
    },
        {
        appId: 4,
        categerory: "socila",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "telegram"
    },
        {
        appId: 5,
        categerory: "socila",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "linkdin"
    },
        {
        appId: 6,
        categerory: "socila",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "stack overflow"
    },
 {
        appId: 7,
        categerory: "socila",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "tinder"
    },
        {
        appId: 8,
        categerory: "socila",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "discord"
    },
        {
        appId: 9,
        categerory: "socila",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "twitter"
    },
        {
        appId: 10,
        categerory: "socila",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "github"
    },

    {
        appId: 1,
        categerory: "news",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "ABN news"
    },
    {
        appId: 2,
        categerory: "news",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "BBC news"
    },
        {
        appId: 3,
        categerory: "news",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "tv9 news"
    },
        {
        appId: 4,
        categerory: "news",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "ntv news"
    },
        {
        appId: 5,
        categerory: "news",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "etv news"
    },
        {
        appId: 6,
        categerory: "news",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "shakshi"
    },
 {
        appId: 7,
        categerory: "news",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "cnn news"
    },
        {
        appId: 8,
        categerory: "news",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "india today"
    },
        {
        appId: 9,
        categerory: "news",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "times of india"
    },
        {
        appId: 10,
        categerory: "news",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "chorme"
    },


    {
        appId: 1,
        categerory: "games",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "Templerun"
    },
    {
        appId: 2,
        categerory: "games",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "subbey run"
    },
        {
        appId: 3,
        categerory: "games",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "candeycrush"
    },
        {
        appId: 4,
        categerory: "games",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "car racing"
    },
        {
        appId: 5,
        categerory: "games",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "pubgy"
    },
        {
        appId: 6,
        categerory: "games",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "free fire"
    },
 {
        appId: 7,
        categerory: "games",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "alpha eight"
    },
        {
        appId: 8,
        categerory: "games",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "ycity"
    },
        {
        appId: 9,
        categerory: "games",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "nfs"
    },
        {
        appId: 10,
        categerory: "games",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "chess"
    },


    {
        appId: 1,
        categerory: "food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "swigy"
    },
    {
        appId: 2,
        categerory: "food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "zmomto"
    },
        {
        appId: 3,
        categerory: "food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "zpto"
    },
        {
        appId: 4,
        categerory: "food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "big-bharzar"
    },
        {
        appId: 5,
        categerory: "food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "blik-it"
    },
        {
        appId: 6,
        categerory: "food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "rapido"
    },
 {
        appId: 7,
        categerory: "food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "ubar"
    },
        {
        appId: 8,
        categerory: "food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "ola"
    },
        {
        appId: 9,
        categerory: "food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "swip"
    },
        {
        appId: 10,
        categerory: "food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jmck2tuZ-YbRg0u0H9tS2whYbGud6qmDIw&s",
        title: "auto"
    },
    
]

class AppStore extends Component{
    // state={coun}
    state={activeTab: tabList[0].tabIdName,searchInputStatus: ""}
    getFileter=()=>{
        const {activeTab}=this.state;
        const filteredItem=appsItem.filter(each=>each.categerory===activeTab)
        return filteredItem;
    }
    updateTabs=(appId)=>{
        this.setState({activeTab: appId});


    }
    onSearchInput=(e)=>{
        e.preventDefault();
        this.setState({searchInputStatus: e.target.value})


    }
    render(){
        const {searchInputStatus}=this.state;
        const filteredItem=this.getFileter();
        const serachFilterItem=filteredItem.filter(each=>each.title.includes(searchInputStatus));
        // console.log(serachFilterItem.length)

        return (
            <div className='min-h-[100vh] flex flex-col justify-center items-center bg-[#fff1eb] gap-5'>
                <h1 className='text-xl md:text-3xl font-bold'>App Store</h1>
                <div className='relative flex justify-between items-center'>
                    <input placeholder='please enter your serach' className='border rounded-md w-full px-5 text-lg py-2 font-medium' value={searchInputStatus} onChange={this.onSearchInput}  />
                    <img src='https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png' alt='serach-icon' className='w-6 absolute right-1' />


                </div>
                <div className='flex flex-col gap-4'>
                    {/* tabd */}
                    <div className='flex justify-center gap-3'>
                        {tabList.map(item=>(
                            <AppStoreTabs tabsDeatiles={item} key={item.tabIdName} activeTabstyel={this.state.activeTab} updateTabs={this.updateTabs} />
                        ))}


                    </div>

                    {/* apps */}
                    <div className='flex flex-wrap gap-5 justify-center items-center'>
                        {serachFilterItem.length > 0 ? (serachFilterItem.map(item=>(
                            <div className='flex flex-col p-5 gap-4 bg-white' key={item.appId}>
                                <img src={item.image} alt={item.title} />
                                <h1 className='text-lg font-semibold text-center'>{item.title}</h1>
                            </div>
                        ))): (<p className='text-xl text-black'>No data is found</p>)}

                    </div>

                </div>
            </div>
        )
    }
}

export default AppStore