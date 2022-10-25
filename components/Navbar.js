import React,{useState,useEffect} from "react";
// import 'tailwindcss/tailwind.css'
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import {useStore} from "../store/store"
import Link from "next/link";
function Navbar() {
  const [nav, setNav] = useState(false)
  // const items=useStore((state)=>state.cart.products.length)
  const items=0;
  return (
    <nav className=" flex items-center justify-between flex-wrap mb-2 bg-white py-2 lg:px-12 shadow border-solid border-t-2 border-orange-800 w-full">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-orange-700 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6 sm:mr-16">
          <Link href="/">
            <a>
              
          <span className="font-bold text-xl tracking-tight">
            JL
          </span>
          </a>
          </Link>
        </div>
        <div className="relative mx-auto text-gray-600 block ">
          <input
            className="border-2 border-orange-700 bg-white h-8 sm:h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-2"
          ></button>
        </div>
        <div className="lg:hidden">
        <Link href="/address" passHref>
        <a
            
            className=" block text-xl px-4  ml-2 py-1 rounded text-orange-800 font-bold hover:text-white  hover:bg-orange-800 lg:mt-0"
          > <span className="absolute top-2 ml-5 text-sm ">{items}</span>
            <BsFillCartCheckFill />
          </a>
          </Link>
        </div>
        <div className="block z-10 lg:hidden ">
          <button onClick={() => {
      setNav(!nav)
          }}
            id="nav"
            className="flex items-center px-2 py-1 border-2 rounded text-orange-800 border-orange-800 hover:text-orange-800 hover:border-orange-800"
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>
      {/* lg:block */}
      <div className={`menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8  + ${
                            nav ? "inline-block" : "hidden"}`}>
        <div className="text-md font-bold text-orange-800 lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-orange-800 mr-2"
          >
            Shop
          </a>
          <a
            href="#responsive-header"
            className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-orange-800 mr-2"
          >
            Contact Us
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-orange-800 mr-2"
          >
            About Us
          </a>
        </div>

        
        <div className="flex ">
          <a
            href="#"
            className="block text-xl px-4 py-2 rounded text-orange-800 ml-2 font-bold hover:text-white mt-4 hover:bg-orange-800 lg:mt-0"
          >
            <FaUserAlt />
          </a>
          <Link href="/address" passHref><a
            
            className=" hidden sm:block text-2xl px-4  ml-2 py-1 rounded text-orange-800 font-bold hover:text-white mt-4 hover:bg-orange-800 lg:mt-0"
          >
            <span className="absolute top-0 ml-5">{items}</span>
            <BsFillCartCheckFill />
          </a></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
