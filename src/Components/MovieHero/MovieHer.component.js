import React from "react";
import { BsDot } from "react-icons/bs";
import {FaRupeeSign} from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi"

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

const MovieHero = () => {
    return (
        <>
        <div className="md:hidden" style={{height: "calc(40vw)"}}>
            <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/rewind-et00304964-01-07-2021-11-17-38.jpg" alt="Poster"></img>
        </div>
        <div className="hidden md:block lg:hidden">
            <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/rewind-et00304964-01-07-2021-11-17-38.jpg" alt="Poster"></img>
        </div>
        <div className="relative hidden lg:block" style={{height: "30rem"}}>
            <div className="absolute h-full w-full z-10" style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}} />
            <div className="absolute z-20 w-64 h-96 left-60 top-12">
                <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/rewind-et00304964-01-07-2021-11-17-38.jpg" alt="Poster" className="h-full h-full"></img>
            </div>
            <div className="absolute z-20 top-28 left-1/3 w-full">
                <div className="flex gap-2">
                    <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="Premiere" className="w-28"/>
                    <h5 className="text-white w-30 bg-navCol-900 rounded-xl px-4 py-1">Stream Now</h5>
                </div>
                <div>
                    <h1 className="text-white font-bold py-5 text-4xl">Rewind</h1>
                </div>
                <div className="text-gray-200 flex items-center">
                    <h5 className="hover:underline cursor-pointer">Kannada</h5>
                    <BsDot />
                    <h5><pre>Languages: </pre></h5>
                    <h5 className="text-red-600 font-bold">Audio(1), Subtitles(1)</h5>
                </div>
                <div className="text-white font-bold flex items-center py-5">
                    <h5><pre>2h 5m</pre></h5>
                    <BsDot />
                    <h5 className="hover:underline cursor-pointer">Action,</h5>
                    <h5 className="hover:underline cursor-pointer"><pre> Thiller</pre></h5>
                    <BsDot />
                    <h5>13+</h5>
                    <BsDot />
                    <h5>16 Apr, 2021</h5>
                </div>
                <div className="flex items-center gap-4">
                    <button className="bg-red-600 text-white flex items-center px-12 py-4 rounded-3xl" onClick={launchRazorPar}><pre>Rent </pre><FaRupeeSign />49</button>
                    <button className="bg-red-600 text-white flex items-center px-12 py-4 rounded-3xl" onClick={launchRazorPar}><pre> Buy </pre><FaRupeeSign />99</button>
                </div>
                <button className="text-white absolute right-2/4 flex bottom-56 items-center gap-2 bg-black bg-opacity-60 rounded-xl px-4 py-2 text-xl cursor-pointer">
                    <BiShareAlt />
                    <h2>Share</h2>
                </button>
            </div>
            <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/rewind-et00304964-01-07-2021-11-17-38.jpg" alt="Poster" className="w-full h-full rounded-xl"></img>
        </div>
        </>
    );
};

export default MovieHero;