import React from 'react'
import * as S from './styled'
import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '../../assets/img/hero-uncompressed.jpg'


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
            <S.HeroCall>
                <h1>Especialistas em alumínio há mais de <span>38 anos</span></h1>
                <Link href="/" passHref>
                    <S.HeroBtn>Conheça nossos produtos</S.HeroBtn>
                </Link>
            </S.HeroCall>
        </S.HeroWrapper>
    )
}

export default HeroSection
