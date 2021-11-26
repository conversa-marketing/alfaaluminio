import React from 'react'
import * as S from './styled'
import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '../../assets/img/hero-uncompressed.jpg'
// import styles from './Hero.module.css'


function HeroSection() {
    return (
        <S.HeroWrapper>
            <S.HeroBgWrapper>
                <Image
                    // className={styles.bgImage}
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
                <p>Somos distribuidores oficiais da Companhia Brasileira
                    do Alumínio do Grupo Votorantim, que possui um dos
                    parques fabris mais modernos do mundo para a fabricação
                    de metal primário e para a transformação.
                </p>
                <Link href="/" passHref>
                    <S.HeroBtn>Conheça nossos produtos</S.HeroBtn>
                </Link>
            </S.HeroCall>
        </S.HeroWrapper>
    )
}

export default HeroSection
