import React, { Component } from 'react'
import UserList from './UserList'


// const listUser=[
//     {
//         id: 1,
//         image: "https://cdn-icons-png.flaticon.com/512/5850/5850276.png",
//         name: "Nagender Dharmkari",
//         dep: "Software Developer"
//     },
//     {
//         id: 2,
//         image: "https://cdn-icons-png.flaticon.com/512/5850/5850276.png",
//         name: "D Sai Kumar",
//         dep: "Desgin enginner"
//     },
//     {
//         id: 3,
//         image: "https://cdn-icons-png.flaticon.com/512/5850/5850276.png",
//         name: "Ambaji K",
//         dep: "Web Developer"
//     },
//     {
//         id: 4,
//         image: "https://cdn-icons-png.flaticon.com/512/5850/5850276.png",
//         name: "Shiva M",
//         dep: "SDR"
//     },
//     {
//         id: 5,
//         image: "https://cdn-icons-png.flaticon.com/512/5850/5850276.png",
//         name: "Sharth M",
//         dep: "Civil Enginner"
//     },

// ]
// const denstiniList=[
//     {
//         id: 1,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76PC9ocXHnHwevvalLmAjqjkDuwFMIbD1eQ&s",
//         title: "Hyderbad"
//     },
//      {
//         id: 2,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76PC9ocXHnHwevvalLmAjqjkDuwFMIbD1eQ&s",
//         title: "Mahabhunagar"
//     },
//      {
//         id: 3,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76PC9ocXHnHwevvalLmAjqjkDuwFMIbD1eQ&s",
//         title: "Kothakota"
//     },
//      {
//         id: 4,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76PC9ocXHnHwevvalLmAjqjkDuwFMIbD1eQ&s",
//         title: "Warangal"
//     }, {
//         id: 5,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76PC9ocXHnHwevvalLmAjqjkDuwFMIbD1eQ&s",
//         title: "Nalgonda"
//     },
//      {
//         id: 6,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76PC9ocXHnHwevvalLmAjqjkDuwFMIbD1eQ&s",
//         title: "Apparala"
//     },
//      {
//         id: 7,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76PC9ocXHnHwevvalLmAjqjkDuwFMIbD1eQ&s",
//         title: "Hyderbad"
//     },
//      {
//         id: 8,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76PC9ocXHnHwevvalLmAjqjkDuwFMIbD1eQ&s",
//         title: "uppal"
//     },
    
// ]



// class UserListProp extends Component{
//     state = {serachInput: '',userDetails: listUser}
//     handlInput=(e)=>{
//         e.preventDefault();
//         // console.log(e.target.value)
//         this.setState({serachInput: e.target.value})

//     }
//     deletedUser=(id)=>{
//         console.log("id is clicked",id)
//         const {userDetails}=this.state
//         const removedFilter=userDetails.filter(eachItem=> eachItem.id !== id)
//         this.setState({userDetails: removedFilter})


//     }
//     render(){
//         const {serachInput,userDetails} = this.state;
//         // console.log(serachInput)
//         const fillterdList=userDetails.filter(eachItem=>
//             eachItem.name.includes(serachInput)
//         )
//         return(
//             <div className='min-h-[100vh] flex items-center justify-center flex-col'>
//                 <input placeholder='please serach the list' className='border ' onChange={this.handlInput} value={serachInput} />
//                  <div className='flex flex-col items-start justify-center pt-5'>
//                 {fillterdList.map(item=>(
                   
//                         <UserList listUserProp={item} key={item.id} deletedUser={this.deletedUser} />
                   
//                 ))}
//                  </div>
//             </div>
//         )
//     }
// }



// class UserListProp extends Component{
//     state={serachSatate: ""}
// handleSearch=(e)=>{
//     // e.preventdefault()
//     this.setState({serachSatate: e.target.value})


// }
//     render(){
//         const {serachSatate} = this.state;
//         console.log(serachSatate)
//         const fillterdList=denstiniList.filter(each=>each.title.includes(serachSatate))
//         return(
//             <div className='min-h-[100vh] flex flex-col justify-center items-center'>
//                 <div className='flex relative pt-12'>
//                     <input placeholder='plesa input this' className='border' onChange={this.handleSearch} value={serachSatate} />
//                     <img src='https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png' alt='icon' className='w-5 absolute right-0'/>
//                 </div>
//                 <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
//                     {fillterdList.map(item=>(
//                         <UserList denstiniList={item} key={item.id} />
//                     ))}

//                 </div>

//             </div>

//         )
//     }
// }


// const todoList=[
//     {
//         id: 1,
//         title: "These vasant aaya, Todo Class 12 questions and answers are",
        
//     },
//     {
//         id: 2,
//         title: "These vasant aaya, Todo Class 12 questions and answers are",
        
//     },
//     {
//         id: 3,
//         title: "These vasant aaya, Todo Class 12 questions and answers are",
        
//     },
//     {
//         id: 4,
//         title: "These vasant aaya, Todo Class 12 questions and answers are",
        
//     },{
//         id: 5,
//         title: "These vasant aaya, Todo Class 12 questions and answers are",
        
//     },
//     {
//         id: 6,
//         title: "These vasant aaya, Todo Class 12 questions and answers are",
        
//     },
//     {
//         id: 7,
//         title: "These vasant aaya, Todo Class 12 questions and answers are",
        
//     },
//     {
//         id: 8,
//         title: "These vasant aaya, Todo Class 12 questions and answers are",
        
//     },
//     {
//         id: 9,
//         title: "These vasant aaya, Todo Class 12 questions and answers are",
        
//     },
//     {
//         id: 10,
//         title: "These vasant aaya, Todo Class 12 questions and answers are",
        
//     },
//     {
//         id: 11,
//         title: "These vasant aaya, Todo Class 12 questions and answers are",
        
//     },
    
// ]


// const payList=[
//     {
//         id: 1,
//         firstname: "Dharmakari",
//         lastname: "Nagender",
//     },
// ]

// const buttonList=[
//     {
//         id: 1,
//         ruppes: "50"
//     },
//         {
//             id: 2,
//         ruppes: "100"
//     },
//         {
//             id: 3,
//         ruppes: "500"
//     },
//         {
//             id: 4,
//         ruppes: "1000"
//     },


// ]


const googleList=[
    {
        id: 1,
        title: "Nagedner is good boy"
    },
        {
        id: 2,
        title: "Nagedner Dharmakari is good boy"
    },
        {
        id: 3,
        title: "Ambaji is good boy"
    },    {
        id: 4,
        title: "Sai is good boy"
        },

            {
        id: 5,
        title: "shiava is good boy"
    },
        {
        id: 6,
        title: "ms dhoni is good boy"
    },
    
        {
        id: 7,
        title: "world class member is good boy"
        
    },
        {
        id: 8,
        title: "thank is good boy"
    },
        {
        id: 9,
        title: "perterson is good boy"
    },
        {
        id: 10,
        title: "perterson is good boy"
    },
        {
        id: 11,
        title: "Nagedner is good boy"
    },
    
]





class UserListProp extends Component{
    // state={todo: todoList}
    
    // handleDeleteButton=(id)=>{
    //     const {todo} = this.state;
    //      const fillterdList = todo.filter(each=>each.id !== id)
    //     this.setState({todo: fillterdList})
    //     console.log(id);
    // }
    // render(){
    //     const {todo} = this.state;
       
    //     return(
    //         <div>
    //             <h1>SImple Todo App</h1>
    //            {todo.map(item=>(
    //             <UserList todoList={item} key={item.id} handleDeleteButton={this.handleDeleteButton} />
    //            ))}
    //         </div>
    //     )
    // }


    // state={count: 0}
    // handleMoney=(id)=>{
    //     const seleted=buttonList.find(each=> each.id === id)
    //     this.setState(prev=>({count: prev.count+Number(seleted.ruppes)}))
    // }
    // render(){
    //     const {count}=this.state;
    //     return(
    //         <div className='min-h-[100vh] flex items-center justify-center'>
    //             <div className='bg-[#150b3e] flex flex-col p-12  justify-center rounded-xl gap-5'>
                   
    //                     {payList.map(item=>( <div className='flex gap-4 items-center'> <p className='p-5 rounded-full bg-[#c7d2fe] text-[#7c3aed]' key={item.id}>{item.firstname[0]}{item.lastname[0]}</p> <h1 className='text-2xl text-[#d4d2db] font-serif font-medium'>{item.firstname} {item.lastname}</h1> </div>))}
                   
    //                 <div className='flex justify-between items-center gap-9'>
    //                     <p className='text-xl text-[#585076] font-serif font-medium'>your banlance</p>
    //                     <div className='text-lg flex flex-col gap-6'>
    //                         <p className='font-bold text-3xl text-[#d4d2db] '>{count}</p>
    //                     </div>
    //                 </div>
    //                 <span className='text-base text-[#585076] flex items-end justify-end'>in ruppes</span>
    //                 <div className='flex flex-col gap-5'>
    //                     <h1 className='font-semibold text-xl text-[#d4d2db]'>Withdar Money</h1>
    //                     <p className='text-base text-[#585076] font-serif font-medium'>Choose the sum you want to withdra</p>
    //                     <div className='grid grid-cols-2 gap-5'>
    //                         {buttonList.map(item=>(<button className='md:px-12 md:py-5 font-serif font-medium rounded-md text-lg bg-[#382f5a] text-[#c4c4c4]' onClick={()=>this.handleMoney(item.id)} key={item.id}>{item.ruppes}</button>))}

    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }


    // state={serachInput: "", suggestionListItem: googleList}
    // onSearchChange=(e)=>{
    //     e.preventDefault();
    //     // console.log(e.target.value);
    //     this.setState({serachInput: e.target.value})
    // }
    // onArrowSelect=(id)=>{
    //     const {suggestionListItem}=this.state;
    //     const arrowSuggested=suggestionListItem.find(each=>each.id===id)
    //     this.setState({serachInput: arrowSuggested.title})
    //     console.log(id);
    // }
    // clearInput=()=>{
    //     this.setState({serachInput: ""})
    // }

    // render(){
    //     const {serachInput,suggestionListItem}=this.state;
    //     console.log(serachInput);
    //     const filterItem=suggestionListItem.filter(each=>each.title.includes(serachInput));
        
        
    //     // console.log(filterItem.length)

    //     return(
    //         <div className='min-h-[100vh] flex flex-col justify-center items-center'>
    //             <div className='flex bg-white flex-col gap-5 '>
    //                 <img src='https://assets.ccbp.in/frontend/react-js/google-logo.png' alt='gooogle-logo' className='w-20' />
    //                 <div className='border shadow-slate-400 border-collapse p-3'>
    //                     <div className='relative flex items-center'>
    //                     <input placeholder='pleas enter your suggestion' className='border-none rounded-md font-serif font-medium text-lg py-2 pl-8 w-full pr-12' value={serachInput} onChange={this.onSearchChange} />
    //                     <img src='https://assets.ccbp.in/frontend/react-js/google-search-icon.png ' alt='seaerch icon' className='absolute left-1 w-6' />
    //                     <img src='https://e7.pngegg.com/pngimages/723/887/png-clipart-computer-icons-x-mark-check-mark-red-x-miscellaneous-text.png ' alt='seaerch icon' className={`absolute right-1 w-6 ${serachInput.length>0? 'block': 'hidden'}`} onClick={this.clearInput} />
    //                 </div>
    //                 <div className='h-[120px] overflow-y-scroll  py-3'>
    //                 {filterItem.length>0 ? (filterItem.map(item=>(
    //                     <UserList suggestionList={item} key={item.id} onArrowSelect={this.onArrowSelect}/>
    //                 ))): <p>Not data is found</p>}
    //                 </div>

    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }


    state={searchText: ""}
    searchCount=(e)=>{
        this.setState({searchText: e.target.value})
    }
    render(){
        const {searchText}=this.state;
        console.log(searchText.length)
        return(
            <div className='bg-[#1d976c] min-h-[100vh] flex items-center justify-center text-white'>
                <div className='flex justify-between lg:px-20 md:px-12 px-10 max-sm:flex-col-reverse max-sm:justify-center max-sm:items-center max-sm:gap-5'>
                    <div className='flex flex-col items-start justify-center gap-5'>
                        <h1 className='font-bold font-serif text-xl md:text-3xl'>RThis is the calculator of the count for the input</h1>
                        <input placeholder='please enter your text to count the words' className='text-xl font-serif font-medium border text-black rounded-md px-2 py-3' onChange={this.searchCount} />
                        <h1 className='font-bold font-serif text-xl md:text-3xl px-12 py-4 rounded-md bg-pink-300'>Count: {searchText.length}</h1>
                    </div>
                    <img src='https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png' className='bg-no-repeat w-1/2' />
                    
                </div>
            </div>
        )
    }
}

export default UserListProp