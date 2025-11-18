import React, { Component } from 'react'
import Gallery from './Gallery'
import GalleryTabItem from './GalleryTabItem'


const galleryTab=[
    {
        gallerdId: 1,
        image: "https://thumbs.dreamstime.com/b/close-up-image-of-cherry-blossoms-and-hands-spring-flower-festival-image-close-up-image-of-cherry-blossoms-and-hands-199160239.jpg"
    },
    {
        gallerdId: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlROBJ5daQ1w3tyMhusZBQX5Hz0BQmQjUWeg&s"
    },
        {
        gallerdId: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2FaNNwfvx6dwm3q0jfQbgOgR-peWqq-zHQ&s"
    },
    {
        gallerdId: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8UrKFu29G_qylS1a5nKlVdU5D9jyKykNYuA&s"
    },
        {
        gallerdId: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkI_qsmJ3l0zWtrg3lLn_zEM5-p-tI3XXhnA&s"
    },
    {
        gallerdId: 6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOUX47XGRgKKhwGsdfR6oKzlRYUG-yH9aXjw&s"
    },
        {
        gallerdId: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOHp862LcFy_ASE6jmav5SyFcYVf7pk-43A&s"
    },
    {
        gallerdId: 8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ewFgFy1i9rJKgJg3MBkwygHNRL1jymZYCw&s"
    },
        {
        gallerdId: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdDIYnDS-tvChYPX5F6a7KKQEY4oaDPo1IQ&s"
    },
    {
        gallerdId: 11,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TyYL49jELJPsP3lDYbpqashLyqjRB-teAQ&s"
    },
    
]

const galleryTabItem=[
    {
        gallerIndivi: 1,
        image: "https://thumbs.dreamstime.com/b/close-up-image-of-cherry-blossoms-and-hands-spring-flower-festival-image-close-up-image-of-cherry-blossoms-and-hands-199160239.jpg"
    },
    {
        gallerIndivi: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlROBJ5daQ1w3tyMhusZBQX5Hz0BQmQjUWeg&s"
    },
        {
        gallerIndivi: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2FaNNwfvx6dwm3q0jfQbgOgR-peWqq-zHQ&s"
    },
    {
        gallerIndivi: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8UrKFu29G_qylS1a5nKlVdU5D9jyKykNYuA&s"
    },
        {
        gallerIndivi: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkI_qsmJ3l0zWtrg3lLn_zEM5-p-tI3XXhnA&s"
    },
    {
        gallerIndivi: 6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOUX47XGRgKKhwGsdfR6oKzlRYUG-yH9aXjw&s"
    },
        {
        gallerIndivi: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOHp862LcFy_ASE6jmav5SyFcYVf7pk-43A&s"
    },
    {
        gallerIndivi: 8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ewFgFy1i9rJKgJg3MBkwygHNRL1jymZYCw&s"
    },
        {
        gallerIndivi: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdDIYnDS-tvChYPX5F6a7KKQEY4oaDPo1IQ&s"
    },
    {
        gallerIndivi: 11,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TyYL49jELJPsP3lDYbpqashLyqjRB-teAQ&s"
    },
    
]




class GalleryList extends Component{
    state={acativeId: galleryTab[0].gallerdId}
    getFilertedData=()=>{
        const {acativeId}=this.state;
        const filteredItem=galleryTabItem.filter(each=>each.gallerIndivi === acativeId);
        return filteredItem
    }
    updateTab=(gallerdId)=>{
        this.setState({acativeId: gallerdId})
        console.log("whe",gallerdId)

    }
    render(){
        const filteredItem=this.getFilertedData()
        return(
            <div className='min-h-[100vh] flex flex-col justify-center items-center gap-6'>
              <div className='flex items-center justify-center object-cover '>
                  {filteredItem.map(each=>(
                    <Gallery galleryItem={each} key={each.gallerIndivi} />
                ))}
              </div>
                {/* <Gallery  */}
                <div className='w-full md:w-[500px] overflow-x-auto flex flex-nowrap px-2 gap-6 custom-scroll'>
                    {galleryTab.map(item=>(
                        <GalleryTabItem galleryTabItemImg={item} key={item.gallerdId} updateTabactive={this.updateTab} />

                    ))}

                </div>
            </div>
        )
    }
}

export default GalleryList