import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Cookie from 'js-cookie';
import toast from 'react-hot-toast';
const Header = () => {
  const navigate = useNavigate();
  // const [login,setLogin]=useState(true)
  // super simple auth check
  const jwtToken = Cookie.get('jwt_token');
  const handleLogout = () => {
    Cookie.remove('jwt_token');
    toast.success('Logout Successful');
    setTimeout(()=>{
      navigate('/auth', { replace: true });
    })
    // navigate('/auth', { replace: true });
    
    // setLogin(false);
  };
  const authClick=()=>{
    if(jwtToken !==undefined){
      handleLogout()
    }

  }


  return (
    <div className='bg-slate-500 py-2 w-full'>
      <div className='flex flex-col md:flex-row justify-between items-center px-16'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOd9G0VuNb6vU_jgaTOBzG4bO4hbu3zpD4mA&s'
          alt='logo'
          className='w-24'
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />

        <div className='flex justify-between gap-4 items-center text-center'>
          <p className='text-lg text-black font-serif font-medium'>
            <Link to='/todo'>Todo</Link>
          </p>
          <p>
            <Link to='/'>Home</Link>
          </p>
          <p>
            <Link to='/about'>About Us</Link>
          </p>
          <p>
            <Link to='/blog'>Blogs</Link>
          </p>
          <p>
            <Link to='/contact'>Contact</Link>
          </p>
        </div>

        <div className='flex items-center justify-center gap-4'>
          <button className={`${jwtToken ? 'text-white text-xl bg-slate-600 px-12 py-5 rounded-xl border': ''}`} onClick={authClick}>{jwtToken ? 'Logout': ''}</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
