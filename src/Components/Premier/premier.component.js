import React from "react";
import Slider from "react-slick";

//components
import Poster from "../Poster/poster.components";
import { PrNextArrow, PrPrevArrow } from "./Arrows.premier";

export const Premier = () => {
    const settings = {
        arrows: true,
        infinite: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0,
        nextArrow: <PrNextArrow />,
        prevArrow: <PrPrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 0
                }
            },
        ]
    };

    const PremierImages = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            title: "The Balkan Line",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-uwreepnzec-portrait.jpg",
            title: "Resistance",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title: "The Secrets We Keep",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            title: "The Balkan Line",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-uwreepnzec-portrait.jpg",
            title: "Resistance",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title: "The Secrets We Keep",
            subtitle: "English"
        }
    ];
    
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