import React from "react";

const Poster = (props) => {
    return (
        <>
        <div className="flex flex-col items-start gap-3 px-3">
            <div className="h-80">
               <img src={props.src} alt={props.title} className="rounded-xl w-full h-full" /> 
            </div>
            <h3 
            className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-900"}`}
            >{props.title}</h3>
            <p
            className={`text-sm font-bold ${props.isDark ? "text-white" : "text-gray-900"}`}
            >{props.subtitle}</p>
        </div>
        </>
    );
};


export default Poster;