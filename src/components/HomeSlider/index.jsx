import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link'
import Image from 'next/image';
import Slides from './slides'
import * as S from './styled'



const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 768, min: 640 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};

function HomeSlider() {
    return (
        <S.SliderWrapper>
            <Carousel
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {Slides.map((slide, index) => (
                    <div key={index}>
                        <Image src={slide.slideImg} />
                        <Link href={slide.buttonUrl} passHref>
                            <a>
                                {slide.title}
                            </a>
                        </Link>
                    </div>
                ))}
            </Carousel>
        </S.SliderWrapper>
    )
}

export default HomeSlider;