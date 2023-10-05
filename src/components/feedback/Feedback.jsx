import React from "react";
import Slider from 'react-slick';


const Feedback = () =>{

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipteToSlide: true,
        autoplaySpeed: 2000,
        slideToShow: 3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],
    };

    return <Slider {...settings}>
        <div className="feedback py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Debitis, repellat. Voluptas nulla debitis quae. 
                Soluta officia commodi necessitatibus ad ex blanditiis voluptate modi delectus, incidunt ducimus. 
                Nihil, officia. Nemo, maxime!</p>

                <div className="d-flex align-tems-center gap-4 mt-3">
                    <div>
                        <h5 className="mb-0 mt-3">Ben Dover</h5>
                        <p>Customer</p>
                    </div>
                </div>
        </div>

        <div className="feedback py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Debitis, repellat. Voluptas nulla debitis quae. 
                Soluta officia commodi necessitatibus ad ex blanditiis voluptate modi delectus, incidunt ducimus. 
                Nihil, officia. Nemo, maxime!</p>

                <div className="d-flex align-tems-center gap-4 mt-3">
                    <img src="" alt="" />
                    <div>
                        <h5 className="mb-0 mt-3">Ben Dover</h5>
                        <p>Customer</p>
                    </div>
                </div>
        </div>

        <div className="feedback py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Debitis, repellat. Voluptas nulla debitis quae. 
                Soluta officia commodi necessitatibus ad ex blanditiis voluptate modi delectus, incidunt ducimus. 
                Nihil, officia. Nemo, maxime!</p>

                <div className="d-flex align-tems-center gap-4 mt-3">
                    <img src="" alt="" />
                    <div>
                        <h5 className="mb-0 mt-3">Ben Dover</h5>
                        <p>Customer</p>
                    </div>
                </div>
        </div>


    </Slider>
};

export default Feedback;