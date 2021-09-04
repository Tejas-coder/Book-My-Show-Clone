import React from "react";
import { BiChevronRight, BiSearch, BiMenu } from "react-icons/bi";

const NavSm = () => {
  return (
    <>
    <div className="text-white flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold">It All Starts here!</h1>
        <span className="text-gray-400 text-xs flex items-center">Mumbai <BiChevronRight /></span>
      </div>
      <div className="w-8 h-8">
        <BiSearch className="w-full h-full" />
      </div>
    </div>
    </>
  )
};
const NavMd = () => {
  return (
    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
      <BiSearch />
      <input type="search" 
      className="w-full focus:outline-none" 
      placeholder="Search for Movies, Events, Sports and Activities"></input>
    </div>
  );
};
const NavLg = () => {
  return(
    <div className="container mx-auto px-4 flex items-center justify-between">
      <div className="flex items-center w-1/2">
        <div className="w-12 h-12">
          <img src="assets/logo.jpg" 
          alt="logo" 
          className="w-full h-full"></img>
        </div>
        <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
          <BiSearch />
          <input type="search" 
            className="w-full focus:outline-none" 
            placeholder="Search for Movies, Events, Sports and Activities"></input>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">Mumbai <BiChevronRight /></span>
        <button className="bg-red-600 text-white text-sm rounded px-2 py-1">Sign In</button>
        <div className="w-8 h-8 text-white">
          <BiMenu className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
return (
  <>
  <nav className="bg-navCol-800 px-4 py-2">
  <div className="md:hidden">{
    /*Mobile Screen*/
    <NavSm />
  }</div>
  <div className="hidden lg:hidden md:flex">{
    /*Tablet Screen*/
    <NavMd />
  }</div>
  <div className="hidden lg:flex">{
    /*desktop Screen*/
    <NavLg />
  }</div>
  </nav>
  </>
)

};

export default Navbar;
