import React, { useState, useEffect } from "react";
import EntertainmentCardSlider from "../Components/Entertainment/Entertainment.component";
import PosterSlider from "../Components/PosterSlider/posterslider.component";
import axios from "axios";

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
    const requestPopularMovies = async() => {
      const getPopularMovies =  await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results)
    }
    requestPopularMovies();
    }, []);


    return(
        <>
        <div className="container mx-auto px-12 my-12">
            <h1 className="px-4 lg:text-2xl py-1 font-bold sm:text-xl">The Best of Entertainment</h1>
            <EntertainmentCardSlider />
        </div>
        <div className="bg-navCol-800 my-16 px-12 mx-auto container py-10">
            <div className="flex">
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"/>
            </div>
            <div className="container mx-auto">
                <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand new release every Friday" isDark={true} />
            </div>
        </div>
        <div className="px-12 container">
            <PosterSlider images={popularMovies} title="Online Streaming Events" isDark={false} />
        </div>
        <div className="my-16 px-12 mx-auto containerr">
            <PosterSlider images={popularMovies} title="Outdoor Events" isDark={false} />
        </div>
        </>
    );
};


export default HomePage;