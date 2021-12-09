import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Link from 'next/link'
import Image from 'next/image'
import Slides from './slides'
import * as S from './styled'



const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 2,
        partialVisibilityGutter: 40,
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
        partialVisibilityGutter: 30,
    },
    tablet: {
        breakpoint: { max: 768, min: 640 },
        items: 1,
        partialVisibilityGutter: 30,

    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
        partialVisibilityGutter: 30,

    },
};

function ProductSlider() {
    return (
        <S.ProductsWrapper>
            <S.ProductsContainer>
                <S.ProductsCall>
                    <h2>Confira alguns de nossos <span> produtos</span></h2>
                    <p>Oferecemos uma variedade enorme de produtos com alta qualidade, ótimo desempenho e o melhor custo-benefício do mercado. Aqui, você encontra o que precisa e como precisa, com características, formatos, pesos e medidas diferenciados.</p>
                    <Link href="/produtos" passHref>
                        <S.ProductBtn>
                            Confira todos os produtos
                        </S.ProductBtn>
                    </Link>
                </S.ProductsCall>
                <S.SliderWrapper>
                    <Carousel
                        responsive={responsive}
                        partialVisbile={true}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        {Slides.map((slide, index) => (
                            <S.CarouselCard key={index}>
                                <S.ImageHeading>
                                    <Image
                                        src={slide.slideImg}
                                        draggable={false}
                                        layout='fill'
                                        objectFit="cover"
                                        alt={slide.title}
                                    />
                                </S.ImageHeading>
                                <S.CarouselContent>
                                    <h3>{slide.title}</h3>
                                    <Link href={slide.url} passHref>
                                        <S.ProductBtn>Saiba mais</S.ProductBtn>
                                    </Link>
                                </S.CarouselContent>
                            </S.CarouselCard>
                        ))}
                    </Carousel>
                </S.SliderWrapper>
            </S.ProductsContainer>
        </S.ProductsWrapper>
    )
}

export default ProductSlider;