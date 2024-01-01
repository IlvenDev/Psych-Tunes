import React, { useState } from 'react';
import {logo} from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full h-20 bg-cyan-800 flex items-center justify-between">
      <img src={logo} alt="psych-tunes" className="w-[40px] h-[40px] justify-center ml-6" />
      <ul className='flex-1 flex h-[24px] list-none justify-end items-center'>
        {navLinks.map((nav, index) => (
          <li 
            key={nav.id}
            className={`font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-gray-200" : "text-cyan-200"} mr-10`}
            onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}> {nav.title} </a>
          </li>
        ))}

      </ul>
     
    </nav>
  )
}

export default Navbar