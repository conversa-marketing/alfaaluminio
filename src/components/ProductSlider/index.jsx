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
        items: 2,
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

function ProductSlider() {
    return (
        <S.ProductsWrapper>
            <S.ProductsContainer>
                <S.ProductsCall>
                    <h2>Conheça nossos <span>produtos</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsum iste nam
                        in, voluptatibus dicta iusto soluta nulla rem iure tempora minus! Ab, asperiores soluta.
                    </p>
                    <Link href="/produtos" passHref>
                        <S.ProductBtn>
                            Todos os produtos
                        </S.ProductBtn>
                    </Link>
                </S.ProductsCall>
                <S.SliderWrapper>
                    <Carousel
                        responsive={responsive}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        {Slides.map((slide, index) => (
                            <S.CarouselCard key={index}>
                                <S.IconHeading>
                                    <Image
                                        src={slide.slideImg}
                                        draggable={false}
                                        layout='responsive'
                                        alt={slide.title}
                                    />
                                </S.IconHeading>
                                <h3>{slide.title}</h3>
                                <Link href={slide.url} passHref>
                                    <a>Saiba mais</a>
                                </Link>
                            </S.CarouselCard>
                        ))}
                    </Carousel>
                </S.SliderWrapper>
            </S.ProductsContainer>
        </S.ProductsWrapper>
    )
}

export default ProductSlider;