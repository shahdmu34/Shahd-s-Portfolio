import '../App.css';
import {Link} from 'react-scroll'; 
import React, { useState } from "react";


function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

    return (
      <div className=" w-full  flex justify-between items-center px-4  text-[#28426b]z-20 max-w-[1240px] mx-auto">
        <ul className=" md:flex text-xl font-cutive  space-x-8 hover:scale-110 transition-transform duration-300 ">
        <li>
          <Link to="home" smooth={true} duration={500}>
            About
          </Link>
        </li>
        </ul>
        <p className='text-xl'>•</p>
        <ul className=" md:flex text-s font-cutive space-x-8 hover:scale-110 transition-transform duration-300 ">
        <li>
          {" "}
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        </ul>
        <p className='text-xl'>•</p>

        <ul className=" md:flex text-s font-cutive space-x-8 hover:scale-110 transition-transform duration-300 ">
        <li>
          {" "}
          <Link to="project" smooth={true} duration={500} offset={-50}>
            Projects
          </Link>
        </li>
        </ul>
        <p className='text-xl'>•</p>

        <ul className=" md:flex text- font-cutive pace-x-8 hover:scale-110 transition-transform duration-300 ">
        <li>
          {" "}
          <Link to="contact" smooth={true} duration={500} offset={-50}>
            Contact
          </Link>
        </li>
      </ul>
      

      </div>


        
  );
}

export default NavBar;