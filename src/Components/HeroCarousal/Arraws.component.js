import React from "react";

export const NextArrow = (props) => {
  //const {className, style, onClick }= props;
  return (
    <>
   <div
   className={props.className}
   style={{ ...props.style, backgroundColor: "black", width: "60px", height: "40px", padding: "11px", marginRight: "-40px", borderRadius: "5px", opacity: ".5"}}
   onClick={props.onClick}
    />
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
   <div
   className={props.className}
   style={{ ...props.style, backgroundColor: "black", width: "60px", height: "40px", padding: "11px", marginLeft: "-40px", borderRadius: "5px", opacity: ".5"}}
   onClick={props.onClick}
    />
    </>
  );
};