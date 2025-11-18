import React from 'react'

const PasswordItem = (props) => {
    const {passwordDeaties,showPasword}=props;
    const {websitename,username,password,id,passwordshow}=passwordDeaties;
    const handleShowPassword=()=>{
        showPasword(id)
        
    }
    const saveLenth=password.length;
  return (
    <div>
        <p>{websitename}</p>
        <p>{username}</p>
        <p>{passwordshow? `${password}` : '*'.repeat(password.length)}</p>
        <button onClick={handleShowPassword}>show password</button>
    </div>
  )
}

export default PasswordItem