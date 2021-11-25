import React from 'react'
import { useRouter } from 'next/router'
import * as S from './styled'
import Logo from '../Logo'
import links from '../Links/content'
import Link from 'next/link'


const Header = ({ setIsMenuOpen, isMenuOpen }) => {
    const router = useRouter()
    const menuLinkClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return (
        <S.HeaderWrapper>
            <S.HeaderContent>
                <S.LogoWrapper>
                    <Logo />
                </S.LogoWrapper>
                <S.LinksNav>
                    <S.NavList>
                        {links.map((link, index) => (
                            <S.NavListItem key={index}>
                                <Link href={link.url}>
                                    <a className={router.pathname === link.url ? 'active' : ''}>{link.label}</a>
                                </Link>
                            </S.NavListItem>
                        ))}
                    </S.NavList>
                    <Link href="/contato" passHref>
                        <S.ContactBtn>
                            Contato
                        </S.ContactBtn>
                    </Link>
                </S.LinksNav>
            </S.HeaderContent>
        </S.HeaderWrapper>
    )
}

export default Header;