

import PracticeProp from './practiceProp'

const PropsInFo = () => {
//       const bannerCardsList= [
//     {
//       id: 1,
//       headerText:	"The Seasons Latest",
//       description: "Get the seasons all latest designs in a flick of your hand",
//       className: "flex flex-col bg-red"
//     },
        
//         {
//       id: 3,
//       headerText:	"The Seasons Latest",
//       description: "Get the seasons all latest designs in a flick of your hand",
//       className: ""
//     }
//   ]

const cardList=[
    {
        id: 1,
        title: "Data Scientist",
        disc: "Data scientists gather and analyze large sets of structured and unstructured data",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZGUTUuCCMm-JlXur18VCM9m9CiONI65Pfnw&s",
        className: "rounded-3xl border-t-[#ff4f64] border-t-[10px]"
    },
    {
        id: 2,
        title: "Data Scientist",
        disc: "Data scientists gather and analyze large sets of structured and unstructured data",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZGUTUuCCMm-JlXur18VCM9m9CiONI65Pfnw&s",
        className: "rounded-3xl border-t-[#00a8e7] border-t-[10px]"
    },
    {
        id: 3,
        title: "Data Scientist",
        disc: "Data scientists gather and analyze large sets of structured and unstructured data",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZGUTUuCCMm-JlXur18VCM9m9CiONI65Pfnw&s",
        className: "rounded-3xl border-t-[#44c4a1] border-t-[10px]"
    },{
        id: 4,
        title: "Data Scientist",
        disc: "Data scientists gather and analyze large sets of structured and unstructured data",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZGUTUuCCMm-JlXur18VCM9m9CiONI65Pfnw&s",
        className: "rounded-3xl border-t-[#fcc200] border-t-[10px]"
    },
]

  return (
      <div className='flex flex-col items-center justify-center lg:px-32 md:px-16 px-[24px] py-14 md:py-24' >
        {/* <PracticeProp headerText="The Seasons Latest" description="Get the seasons all latest designs in a flick of your hand" className="bg-red-200 border border-3 p-24 flex flex-col gap-5 justify-start items-start"  />
        <PracticeProp headerText="The Seasons Latest" description="Get the seasons all latest designs in a flick of your hand" className="bg-gray-400 border border-3 p-24 flex flex-col gap-5 justify-center items-center"  />
        <PracticeProp headerText="The Seasons Latest" description="Get the seasons all latest designs in a flick of your hand" className="bg-orange-500 border border-3 p-24 flex flex-col gap-5 justify-center items-center"  /> */}
            {/* <h1 className=' text-lg mdtext-3xl font-bold font-sans mb-12'>Learn 4.0 Technologies </h1>
            <p className='text-center items-center text-lg mb-12 '>Get trained by alumni of IITs and top companies like Amazon, Microsoft, Intel,
Nvidia, Qualcomm, etc. Learn directly from professionals involved in Product
Development.</p>
          
            <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-1 gap-6">
                  {cardList.map(item=>(
                <PracticeProp key={item.key} listItem={item} />
            ))}
            </div> */}
      </div>
  )
}

export default PropsInFo