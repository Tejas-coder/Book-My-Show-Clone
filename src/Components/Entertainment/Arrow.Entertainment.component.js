import React from "react";

export const EnNextArrow = (props) => {
    return (
        <>
        <div 
        className = {props.className}
        style = {{...props.style, backgroundColor:"gray", height: "40px", width: "40px", borderRadius: "50%", padding: "10px", marginRight: "-45px"}}
        onClick = {props.onClick}
        />
        </>
    );
};


export const EnPrevArrow = (props) => {
    return (
        <>
        <div 
        className = {props.className}
        style = {{...props.style, backgroundColor:"gray", height: "40px", width: "40px", borderRadius: "50%", padding: "10px", marginLeft: "-45px"}}
        onClick = {props.onClick}
        />
        </>
    );
};