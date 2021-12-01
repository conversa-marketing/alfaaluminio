import { Whatsapp, Facebook, Instagram, Linkedin } from '@styled-icons/boxicons-logos';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoFooter from '../../assets/img/alfa-branco.png'
import * as S from './styled'
import Links from '../Links/linksFooter'


function Footer() {
    const actualYear = new Date().getFullYear();


    return (
        <S.FooterWrapper>
            <S.FooterContainer>
                <S.FooterLogo>
                    <Link href='/'>
                        <a>
                            <Image src={logoFooter} alt="Logo Alfa Alumínio" />
                        </a>
                    </Link>
                </S.FooterLogo>
                <S.FooterLinks>
                    <ul>
                        {Links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.url}>
                                    <a>{link.label}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </S.FooterLinks>
                <S.FooterContact>
                    <ul>
                        <li>
                            <Link href="#">
                                <a>
                                    <Whatsapp size={24} />
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href="#">
                                <a>
                                    <Facebook size={24} />
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href="#">
                                <a>
                                    <Instagram size={24} />
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href="#">
                                <a>
                                    <Linkedin size={24} />
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <p>R. Florianópolis, 252 - Jardim Leda (Fazendinha), Santana de Parnaíba - SP, 06529-302</p>
                </S.FooterContact>
                <S.FooterCopy>
                    <p>© {actualYear} Alfa Alumínio. Todos os direitos reservados. Desenvolvido por <span><a href="https://conversamarketing.com.br" target="__blank" rel="noopener noreferrer">Conversa Marketing</a>.</span></p>
                </S.FooterCopy>
            </S.FooterContainer>

        </S.FooterWrapper>
    )
}

export default Footer
