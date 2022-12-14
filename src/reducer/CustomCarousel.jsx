import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from "react-redux";
const CustomCarousel = () => {
    const CarouselSelector = useSelector((state) => state.CarouselReducer);
    return (
        <div>
            <Carousel>
                {CarouselSelector.map((item, index) => {
                    return (
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src={item.carouselImage}
                                alt="First Slide"
                                height={"500px"}
                                width={"100%"}
                            />
                            <Carousel.Caption>
                                <h3>{item.carouselTitle}</h3>
                                <p>{item.carouselDesc}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
           })}
            </Carousel>
        </div>
    );
};

export default CustomCarousel;