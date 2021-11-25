import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 70px; */
    width: 100vw;
    /* border: 1px solid #c7c7c7; */
    box-shadow: 4px 4px 22px 0px rgba(29, 29, 29, 0.083);
`

export const HeaderContent = styled.div`
    display: flex;
    padding: 15px 0;
    width: 100%;
    max-width: 90vw;
`

export const LogoWrapper = styled.div`
    max-width: 160px;
`

export const LinksNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 3em;
`

export const NavList = styled.ul`
    display: flex;
    gap: 35px;
`

export const NavListItem = styled.li`

    .active {
        color: var(--red-primary);
    }

    a {
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        color: #888;
            
        &:hover {
            color: var(--red-primary);
        }
    }
`

export const ContactBtn = styled.a`
    padding: 13px 30px;
    background-color: var(--red-primary);
    color: var(--white);
    border-radius: 7px;
    transition: all 300ms ease-in-out;

    &:hover {
        background-color: var(--red-primary-hover);
    }
`

export const ContactInfo = styled.div`

`