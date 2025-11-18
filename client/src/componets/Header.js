import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // super simple auth check
  const isAuthed = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

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
          {!isAuthed ? (
            <>
              <Link
                to='/login'
                className='py-3 px-8 bg-blue-400 text-white text-lg font-sans font-medium rounded-xl'
              >
                Login
              </Link>
              <Link
                to='/register'
                className='py-3 px-8 bg-red-300 text-white text-lg font-sans font-medium rounded-xl'
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className='py-3 px-8 bg-emerald-600 text-white text-lg font-sans font-medium rounded-xl'
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
