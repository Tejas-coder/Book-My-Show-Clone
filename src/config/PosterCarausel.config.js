import { EnNextArrow, EnPrevArrow } from "../Components/Entertainment/Arrow.Entertainment.component";

const settings = {
    arrows: true,
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    nextArrow: <EnNextArrow />,
    prevArrow: <EnPrevArrow />,
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

export default settings;