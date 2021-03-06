import React from "react";
import { BiChevronRight, BiSearch, BiMenu, BiSearchAlt, BiChevronLeft, BiShareAlt } from "react-icons/bi";

const NavSm = () => {
  return (
    <>
    <div className="text-white flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold">It All Starts here!</h1>
      </div>
      <div className="w-8 h-8">
        <BiShareAlt className="w-full h-full" />
      </div>
    </div>
    </>
  )
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

const Movie_navbar = () => {
return (
  <>
  <nav className="bg-navCol-800 px-4 py-2 absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative">
  <div className="md:hidden">{
    /*Mobile Screen*/
    <NavSm />
  }</div>
  <div className="hidden lg:hidden md:flex">{
    /*Tablet Screen*/
    <NavSm />
  }</div>
  <div className="hidden lg:flex">{
    /*desktop Screen*/
    <NavLg />
  }</div>
  </nav>
  </>
)

};

export default Movie_navbar;
