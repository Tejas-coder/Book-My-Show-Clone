import react from "react";

import Poster from "../Poster/poster.components"
import settings from "../../config/PosterCarausel.config"
import Slider from "react-slick";

const PosterSlider = (props) => {
    return (
        <>
        <div className="flex items-start flex-col py-2 px-4">
        <h3 className={
            `text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`
        }>{props.title}</h3>
        <p className={
            `text-xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`
        }>{props.subtitle}</p>
        </div>
        <Slider {...settings}>
            {
                props.images.map((images) => (
                    <Poster {...images} isDark={props.isDark} />
                ))
            }
        </Slider>
        </>
    );
};

export default PosterSlider;