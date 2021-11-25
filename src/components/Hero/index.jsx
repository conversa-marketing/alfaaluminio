import React from 'react'
import * as S from './styled'
import Image from 'next/image'
import imgSrc from '../../assets/img/slide1.png'
import Link from 'next/link'


function HeroSection() {
    return (
        <S.HeroWrapper>
            <S.HeroCall>
                <h1>Especialistas em alumínio há mais de 38 anos.</h1>
                <p>Somos distribuidores oficiais da Companhia Brasileira
                    do Alumínio do Grupo Votorantim, que possui um dos
                    parques fabris mais modernos do mundo para a fabricação
                    de metal primário e para a transformação.
                </p>
                <Link href="/" passHref>
                    <S.HeroBtn>Saiba mais</S.HeroBtn>
                </Link>
            </S.HeroCall>
            <S.HeroImgWrapper>
                <Image
                    src={imgSrc}
                    placeholder="blur"
                />
            </S.HeroImgWrapper>
        </S.HeroWrapper>
    )
}

export default HeroSection
