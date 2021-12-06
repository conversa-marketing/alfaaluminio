import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import * as S from './styled'
import Image from 'next/image'
import HeroImage from '../../assets/img/hero-uncompressed.jpg'
import Slides from './heroSlides'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 1,
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

function HeroSection() {
    return (
        <S.HeroWrapper>
            <S.HeroBgWrapper>
                <Image
                    src={HeroImage}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center top"
                    quality={100}
                    alt="Alfa Alumínio"
                    draggable={false}
                    priority
                />
            </S.HeroBgWrapper>
            <S.CarouselWrapper>
                <Carousel
                    responsive={responsive}
                    infinite
                    autoPlay
                    arrows={false}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {Slides.map((slide, index) => (
                        <div key={index}>
                            <h1>{slide.title}</h1>
                            <p>{slide.text}</p>
                        </div>
                    ))}
                </Carousel>
            </S.CarouselWrapper>
        </S.HeroWrapper>
    )
}

export default HeroSection
