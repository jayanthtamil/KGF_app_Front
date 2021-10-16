import React from "react";
import { Link } from "react-router-dom";
import Customer from "./Billdropdown/Customer";

const Bill = ({ toggle }) => {
  return (
    <>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div className="pr-8 md:block flex  hidden  bg-fixed bg-yellow-400">
        <Link to="/customer" className="px-4 hover:text-yellow-400 Link ">
          CUSTOMER ID
        </Link>
        <Link to="/loan" className="px-4 hover:text-yellow-400  Link">
          LOAN
        </Link>
        <Link to="/collection" className="p-4 hover:text-yellow-400  Link">
          COLLECTION
        </Link>
        <Link to="/sales" className="px-4 hover:text-yellow-400  Link">
          SALES
        </Link>
        <Link to="/bank" className="px-4 hover:text-yellow-400 Link">
          BANK
        </Link>
      </div>

   
    </>
  );
};

export default Bill;
