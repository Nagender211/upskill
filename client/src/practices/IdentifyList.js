import React, { Component } from 'react'
import IdentifyIng from './IdentifyIng';
import TabItem from './TabItem';


const tabname= [
    {tabnameId: "Static", displaybtn: "stactic"},
    {tabnameId: "Dynamic", displaybtn: "dynamic"},
    {tabnameId: "Responsive", displaybtn: "responsive"},
]
const tabslist=[
    {
        id: 1,
        TabId: "Static",
        image: "",
        title: "hellp this is the staic website",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
    },
     {
        id: 2,
        TabId: "Static",
        image: "",
        title: "hellp this is the staic website",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
    },
     {
        id: 3,
        TabId: "Static",
        image: "",
        title: "hellp this is the staic website",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
    },
     {
        id: 4,
        TabId: "Dynamic",
        image: "",
        title: "hellp this is the Dynamic website",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
    },
     {
        id: 5,
        TabId: "Dynamic",
        image: "",
        title: "hellp this is the Dynamic website",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
    },
     {
        id: 6,
        TabId: "Dynamic",
        image: "",
        title: "hellp this is the Dynamic website",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
    },
     {
        id: 7,
        TabId: "Responsive",
        image: "",
        title: "hellp this is the Responsive website",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
    },
     {
        id: 8,
        TabId: "Responsive",
        image: "",
        title: "hellp this is the Responsive website",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
    },
     {
        id: 9,
        TabId: "Responsive",
        image: "",
        title: "hellp this is the Responsive website",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "

    },
]

class IdentifyList extends Component{
    // state= {count: 0,tabsListdata: tabsList}
    state = {activeId: tabname[0].tabnameId};
    getFileter=()=>{
        const {activeId}=this.state;
        const filteredItem = tabslist.filter(each=> each.TabId === activeId);
        return filteredItem;

    }
    updateStatus=(tabnameId)=>{
        this.setState({activeId: tabnameId})

        
    }
    render(){
        const filteredItem=this.getFileter()
        // const {tabsListdata}=this.state
        // const filtered=tabsListdata.filter(each=>each.TabId === );
        // console.log(filtered)
        return(
            <div className='flex min-h-[100vh] flex-col items-center justify-center'>
                {/* <button ></button> */}
                {/* <input type='submit' value={tabsList.TabId} /> */}
                {/* <button>hello</button> */}
                {/* hellp */}
                {/* <h1>{tabsList.title}</h1> */}
               <div className='flex gap-8'>
                {tabname.map(item=>(
                    <TabItem Tabdeatis={item} updateStatus={this.updateStatus} />
                ))}
               </div>
               <div>
                    {filteredItem.map(item=>(
                        <IdentifyIng tabItemDeatis={item} key={item.id} />
                    ))}
               </div>
               {/* <IdentifyIng item */}
            </div>
        )
    }
}

export default IdentifyList