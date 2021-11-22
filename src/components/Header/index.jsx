import React from 'react'
import * as S from './styled'
import Logo from '../Logo'
import Links from '../Links/content'

function Header() {
    return (
        <S.HeaderWrapper>
            <S.LogoWrapper>
                <Logo />
            </S.LogoWrapper>
            <S.LinksNav>
                <S.NavList>
                    {Links.map((link, index) => {
                        return (
                            <S.NavListItem key={index}>
                                <S.LinksItem href={link.url} title={link.label}>{link.label}</S.LinksItem>
                            </S.NavListItem>
                        )
                    })}
                </S.NavList>
            </S.LinksNav>
        </S.HeaderWrapper>
    )
}

export default Header;