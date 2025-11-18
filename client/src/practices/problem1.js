import React from 'react'
import  './problemStyle.css'
const Problem1 = () => {
  // const {description}=blogData;
  // console.log(blogData)
  // const notification=[
  //   {
  //     title: "Information Message",
  //     image: "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
  //     className: "bg-[#0b69ff]"
  //   },
  //      {
  //     title: "Success Message",
  //     image: "https://assets.ccbp.in/frontend/react-js/success-icon-img.png",
  //     className: "bg-[#2dca73]"
  //   },
  //      {
  //     title: "Warning Message",
  //     image: "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png",
  //     className: "bg-[#ffb800]"
  //   },
  //      {
  //     title: "Error Message",
  //     image: "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png",
  //     className: "bg-[#ff0b37]"
  //   },
  // ]

  // const boxes=[
  //   {
  //     title: "small",
  //     className: "bg-[#fbbf24] text-lg flex item-center p-6"
  //   },
  //   {
  //     title: "mudiume",
  //     className: "bg-[#38bdf8] text-lg flex item-center p-12 "
  //   },
  //   {
  //     title: "larger",
  //     className: "bg-[#ec4899] text-lg flex item-center p-16 "
  //   },
  // ]

  return (
    <div className='w-[100%] flex justify-center md:items-center flex-col min-h-[100vh]'>
        {/* <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='mb-5 text-sm font-bold md:text-2xl font-sans'>Supewr Over League</h1>
            <div className='flex flex-row'>
                    <img src='https://assets.ccbp.in/frontend/react-js/rcb-img.png' alt='rcb' className='w-28 h-28 md:w-48 md:h-48'/>
                    <img src='https://assets.ccbp.in/frontend/react-js/csk-img.png' alt='csk' className='w-28 h-28 md:w-48 md:h-48'/>

            </div>
        </div> */}

        {/* pronblem-2 */}
        {/* <div className='flex flex-col justify-center text-center items-center px-6'>
            <div className='flex flex-col justify-center text-center items-center gap-5'>
            <h1 className='mb-5 text-sm font-bold md:text-2xl font-sans'>Congratulations</h1>
            <div className='flex flex-col gap-5 px-12 bg-blue-200 py-8 items-center justify-center text-center'>
                <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' alt='profile' className='w-12 h-12'/>
                <h3 className='text-sm font-bold md:text-2xl font-sans'>Kiran V</h3>
                <p className=' font-bold font-sans'>Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
                <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' alt='watch' className='w-12 h-12'/>


            </div>
        </div>

        </div> */}
        {/* <div className='flex flex-col items-center'>
          <h1 className='mb-5 text-sm font-bold md:text-2xl font-sans'>Scoial Media Button</h1>
          <div className='flex flex-col md:flex-row justify-center text-center items-center gap-5'>
             <button className='p-5 text-center rounded-md bg-yellow-100'>Like</button>
            <button className='p-5 text-center rounded-md bg-orange-400'>Comment</button>
            <button className='p-5 text-center rounded-md bg-red-300'>share</button>

          </div>

        </div> */}

        {/* <div className='p-4 items-center'>
          <h1 className='flex justify-center text-lg md:text-2xl from-neutral-600 items-center pb-4'>Notification</h1>
          <div className='flex flex-col gap-5 '>
            {notification.map(index=>(
              <div key={index} className={`flex flex-row items-center gap-4 p-5 rounded-md gap-y-5 ${index.className}`}>
                <img src={index.image} alt={index.title} className='w-4'/>
                <p className='noti-title'>{index.title}</p>
              </div>
            ))}
</div>
         

        </div> */}


        {/* <div className='flex flex-col justify-center items-center'>
          <h1 className='flex justify-center text-lg md:text-2xl from-neutral-600 items-center pb-4'>Boxes</h1>
          <div className='flex flex-col md:flex-row gap-5 justify-center items-center md:items-end'>
            {boxes.map(item=>(
              <div key={item} className='flex flex-col md:flex-row gap-5 justify-center items-center'>
                  <p className={`${item.className}`}>{item.title}</p>
              </div>
            ))}


          </div>

        </div> */}

    </div>
  )
}

export default Problem1