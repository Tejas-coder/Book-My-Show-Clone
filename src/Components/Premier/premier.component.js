import React from "react";
import Slider from "react-slick";

//components
import Poster from "../Poster/poster.components";
import { PrNextArrow, PrPrevArrow } from "./Arrows.premier";
import settings from "../../config/PosterCarausel.config";
import PremierImages from "../../config/Images.config";

export const Premier = () => {
    return (
        <>
        <div className="flex items-start flex-col py-2 px-4">
            <h3 className="text-white text-xl font-bold">Premiers</h3>
            <p className="text-white text-sm">Brand new release every Friday</p>
        </div>
        <Slider {...settings}>
            {
                PremierImages.map((images) => (
                    <Poster {...images} isDark />
                ))
            }
        </Slider>
        </>
    );
};