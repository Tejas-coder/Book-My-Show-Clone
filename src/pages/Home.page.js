import React from "react";
import EntertainmentCardSlider from "../Components/Entertainment/Entertainment.component";
import { Premier } from "../Components/Premier/premier.component";

const HomePage = () => {
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
                <Premier />
            </div>
        </div>
        </>
    );
};


export default HomePage;