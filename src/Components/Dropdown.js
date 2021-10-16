import React from "react";
import {Link} from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-3 text-center items-center bg-white'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/' className='p-4'>
       DB
      </Link>
      <Link to='/about' className='p-4'>
      ADMIN
      </Link>
      <Link to='/ourservices' className='p-4'>
      CASH
      </Link>
      <Link to='/branches' className='p-4'>
     BILL
      </Link>
      
      <Link to='/contact' className='p-4'>
       REPORTS
      </Link>
    </div>
  );
};

export default Dropdown;