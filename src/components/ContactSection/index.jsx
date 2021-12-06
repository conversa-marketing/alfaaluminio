import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import contactBg from '../../assets/img/alfa-bg-contato.jpg'

import * as S from './styled'

function ContactSection() {
    return (
        <S.ContactWrapper>
            <S.ContactBgWrapper>
                <Image
                    src={contactBg}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"
                    quality={100}
                    alt="Alfa Alumínio"
                    draggable={false}
                />
            </S.ContactBgWrapper>
            <S.ContactContent>
                <h2>Entre em contato <span>e faça o seu orçamento!</span></h2>
                <p>Nos conte o que você precisa para a realização do seu projeto e vamos conversar sobre negócios.</p>
                <Link href="/contato" passHref>
                    <S.ContactBtn>Quero um orçamento</S.ContactBtn>
                </Link>
            </S.ContactContent>
        </S.ContactWrapper>
    )
}

export default ContactSection

