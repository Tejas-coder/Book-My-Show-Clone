import React from "react";
import { Route } from "react-router-dom";

//Layouts
import DefaultLayout from "../Layouts/default.layout";

const DefaultHOC = ({ component: Component , ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
    <Route
    {...rest}

    component = {(props) => (
      <DefaultLayout>
       <Component {...props} />
      </DefaultLayout>
    )

    }
     />
    </>
  );
};

export default DefaultHOC;