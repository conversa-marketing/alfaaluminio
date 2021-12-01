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
                <h2>Entre em contato e <span>peça um orçamento</span></h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi soluta distinctio illum rem molestias tempora fugiat tenetur dignissimos, doloremque consequuntur.
                </p>
                <Link href="/contato" passHref>
                    <S.ContactBtn>Quero um orçamento</S.ContactBtn>
                </Link>
            </S.ContactContent>
        </S.ContactWrapper>
    )
}

export default ContactSection

