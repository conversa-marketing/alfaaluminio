import styled from "styled-components";
import Link from 'next/link'

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 100vw;
    /* border: 1px solid #c7c7c7; */
    box-shadow: 4px 4px 22px 0px rgba(29, 29, 29, 0.083);
`

export const HeaderContent = styled.div`
    max-width: 90vw;
`

export const LogoWrapper = styled.div`
    max-width: 160px;
`

export const LinksNav = styled.nav`

`

export const NavList = styled.ul`
    display: flex;
    gap: 35px;
`

export const NavListItem = styled.li`

`

export const LinksItem = styled(Link)`

`

export const ContactInfo = styled.div`

`