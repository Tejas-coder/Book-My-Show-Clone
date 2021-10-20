import React from "react";

//components
import Movie_navbar from "../Components/Navbar/movie.nabvar";

const MovieLayout = (props) => {
  return (
    <>
    <Movie_navbar />
    {props.children}
    </>
  );
};

export default MovieLayout;
