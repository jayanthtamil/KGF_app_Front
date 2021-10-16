import React from "react";
import {Link} from "react-router-dom";


const Header = ({ toggle }) => {
    return(

 

      <nav
      className='flex justify-between items-center h-24 bg-blue-400 text-black relative shadow-lg lg:pl-24 lg:pr-24  text-lg fixed'
      role='navigation'
    >
      <Link to='/' className='pl-8  '>
      <img alt="Image is loading" className="align-middle border-none max-w-full h-auto rounded-lg"src="/Image/logo.png"/>
      </Link>


   <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>

      

          <div className='pr-8 md:block flex  hidden  '>
         
          <Link to='/' className='px-4 hover:text-yellow-400 Link ' >DB</Link>
          <Link to='/admin' className='px-4 hover:text-yellow-400  Link'>ADMIN</Link>
          <Link to="/cash" className='p-4 hover:text-yellow-400  Link'>CASH</Link>
          <Link to="/bill" className='px-4 hover:text-yellow-400  Link'>BILL</Link>
          <Link to="/reports" className='px-4 hover:text-yellow-400 Link'>REPORT</Link>
         
           </div>
           </nav>
           
    )

}

export default Header;


