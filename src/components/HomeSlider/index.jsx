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
                responsive={responsive}
                infinite
                autoPlay={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {Slides.map((slide, index) => (
                    <div key={index}>
                        <Image
                            src={slide.slideImg}
                            draggable={false}
                            layout='responsive'
                            alt={slide.title}
                        />
                        <Link href={slide.url}>
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