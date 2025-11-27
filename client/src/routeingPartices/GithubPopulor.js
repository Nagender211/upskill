// import { useEffect, useState } from "react";

// import Cookie from "js-cookie";
// import GithubItem from "./GithubItem";





// const GithubPopulor = () => {
//   const [populors, setPopulors] = useState([]);
//   const [activeTabId, setActiveTabId] = useState(filterTabs[0].id);
  

//   useEffect(()=>{
//     const fetehedData=async()=>{
//       // const jwtToken=Cookie.get('jwt_token');
//       const url= `https://apis.ccbp.in/popular-repos?language=${activeTabId}`;
//       const option={
//         method: 'GET',
//         // headers: {
//         //   Authorization: `Bearer ${jwtToken}`,
//         // }
//       }
//       const response=await fetch(url,option);
//       const data=await response.json();
//       console.log(data);
//       console.log(response.ok);
//       if(response.ok===true){
//         const updatedData=data.popular_repos.map(item=>({
//           id: item.id,
//           name: item.name,
//           issuesCount: item.issues_count,
//           forksCount: item.forks_count,
//           starsCount: item.stars_count,
//           avatarUrl: item.avatar_url,
//         }))
//         setPopulors(updatedData);
//       }
//     }
//     fetehedData();
//   },[activeTabId])
//   const handleSelectTab=(activeTabId)=>{
//     setActiveTabId(activeTabId);
//   }
//   return (
//     <div className="min-h-[100vh] flex flex-col justify-center items-center">
//       <h2 className="font-bold text-2xl font-serif">Populors</h2>
//       {/* <select value={activeTabId} onChange={handleSelectTab}>
//         {filterTabs.map(item=>(
//           <option key={item.id} value={item.id}>{item.displayText}</option>
//         ))}
//       </select> */}
//       <div className="flex flex-row gap-5">
//         {filterTabs.map(item=>(
//           <button key={item.id} onClick={()=>handleSelectTab(item.id)} className="border-input rounded-md px-12 py-6">{item.displayText}</button>
//         ))}
//       </div>
//       <div className="flex flex-wrap gap-6 justify-center items-center mt-6">
//         {populors.map(item=>(
//         <GithubItem key={item.id} populorDetails={item} />
//       ))}
//       </div>
//     </div>
//   );
// };

// export default GithubPopulor;


import { useEffect, useState } from "react";

import Cookie from "js-cookie";
// import GithubItem from "./GithubItem";

const filterTabs=[
  {id: 'ALL', displayText: 'All'},
  {id: 'JAVASCRIPT', displayText: 'Javascript'},
  {id: 'RUBY', displayText: 'Ruby'},
  {id: 'JAVA', displayText: 'Java'},
  {id: 'CSS', displayText: 'CSS'},
]
const GithubPopulor=()=>{

  const [intial,setInitial]=useState([])
  const [activeId,setActiveTabId]=useState(filterTabs[0].id)
  useEffect(()=>{
    const feteched=async()=>{
      const url=`https://apis.ccbp.in/popular-repos?language=${activeId}`
      const option={
        method: 'GET'
      }
      const respos=await fetch(url,option);
      const data=await respos.json();
      console.log(respos.ok);
      console.log(data)
      if(respos.ok===true){
          const updatedData=data.popular_repos.map(item=>({
          id: item.id,
          name: item.name,
          issuesCount: item.issues_count,
          forksCount: item.forks_count,
          starsCount: item.stars_count,
          avatarUrl: item.avatar_url,
        }))
        setInitial(updatedData)
      }

    }
    feteched();
  },[activeId])
  const handleTabd=(id)=>{
    setActiveTabId(id)
  }

return(
  <div>
    {filterTabs.map((item)=>(
      <button key={item.id} className="border-input" onClick={()=>handleTabd(item.id)}>{item.displayText}</button>
    ))}  
    {/* fsdf */}
    {intial.map((item)=>(
      <div key={item.id}>
        <h1>{item.avatarUrl}</h1>
        <h2>{item.name}</h2>
        <h3>{item.issuesCount}</h3>
        <h4>{item.starsCount}</h4>
        
      </div>
    ))}

  </div>
  )
}
export default GithubPopulor;