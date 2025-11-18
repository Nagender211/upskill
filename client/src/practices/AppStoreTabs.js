import React from 'react'

const AppStoreTabs = (props) => {
    const {tabsDeatiles,updateTabs,activeTabstyel}=props;
    const {displayText,tabIdName}=tabsDeatiles;
    const updateStore=()=>{
        updateTabs(tabIdName)
    }

  return (
    <div>
        <button className={`border-b p-4 text-center ${activeTabstyel === tabIdName ? 'bg-black text-white': ''}`} onClick={updateStore}>{displayText}</button>
    </div>
  )
}

export default AppStoreTabs