import React from 'react'

const TabItem = (props) => {
    const {Tabdeatis, updateStatus}=props;
    const {displaybtn,tabnameId}=Tabdeatis;
    const updatedStaus=()=>{
        updateStatus(tabnameId)
    }
  return (
    <div>
        <button onClick={updatedStaus}>{displaybtn}</button>
    </div>
  )
}

export default TabItem