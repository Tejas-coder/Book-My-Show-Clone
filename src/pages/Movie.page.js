import React from 'react'
import {BiCameraMovie} from "react-icons/bi";

//Components
import MovieHero from '../Components/MovieHero/MovieHer.component';

const launchRazorPar = () => {
    let options = {
        key: "rzp_test_XWgDW59Kb3A9eb",
        amount: 500 * 100,
        currency: "INR",
        name: "Book My Show Clone",
        description: "Mmovie Purchase on Rental",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert("Payment Done");
        },
        theme: {color: "#c4242d"}
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
};

export default function Movie() {
    return (
        <>
        <MovieHero />
        <div className="my-12 container mx-auto px-4 lg:w-2/3">
            <div className="flex flex-col items-start gap-3">
                <h2 className="font-bold text-gray-800 text-2xl">About the movie</h2>
                <p className="">When a crime reporter`s daughter goes missing and the police reach a dead end, he resorts to using lucid dreams to track her down with the help of his wife, a scientist.</p>    
            </div>
            
            <div className="my-8">
                <hr />
            </div>
            
            <div className="my-12 container px-4 lg:w-2/3 w-full">
                <h1 className="font-bold text-gray-800 text-2xl">Applicable Offers</h1>
                <div className="flex items-start gap-2 bg-yellow-100 border-yellow-300 border-2 border-dashed rounded-md p-3 lg:w-96">
                    <div className="w-8 h-8">
                        <BiCameraMovie className="h-full w-full" />
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
                        <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream Filmy Pass @Rs.99</p>
                    </div>
                </div>
            </div>
            <div className="lg:hidden sm:block">
                <button className="w-full bg-red-500 rounded-lg text-white font-bold py-2" onClick={launchRazorPar}>Book tickets</button>
            </div>
        </div>
        </>
    );
};
