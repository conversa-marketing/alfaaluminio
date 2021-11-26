import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient( 180deg, #0000006b, #0000000d);
    border-bottom: 1px solid #00000000;
    z-index: 3;
    position: relative;
`

export const HeaderContent = styled.div`
    display: flex;
    min-height: 10vh;
    width: 100%;
    justify-content: space-between;
    max-width: 1200px;
`

export const LogoWrapper = styled.div`
    max-width: 160px;
    display: flex;
    align-items: center;
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
        font-weight: 400;
        color: var(--white);
        font-size: .9em;
        font-weight: 400;
        transition: all 0.3s ease-in-out;
            
        &:hover {
            color: var(--red-primary);
        }
    }
`

export const ContactBtn = styled.a`
    padding: 12px 30px;
    font-size: .9em;

    background-color: var(--red-primary);
    color: var(--white);
    border-radius: 7px;
    transition: all 300ms ease-in-out;
    box-shadow: inherit;

    &:hover {
        background-color: var(--red-primary-hover);
    }
`

export const ContactInfo = styled.div`

`

export const ContactNumber = styled.a`
    display: flex;
    font-size: .9em;
    font-weight: 600;
    padding: 12px;
    border-radius: 7px;
    color: var(--white);

    transition: all 300ms ease-in-out;

    &:hover {
        background-color: #ffffff1a;

    }
`