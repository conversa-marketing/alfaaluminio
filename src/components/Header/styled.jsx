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

`

export const NavList = styled.ul`
    display: flex;
    gap: 35px;
`

export const NavListItem = styled.li`

    .active {
        color: #f02d26;
    }

    a {
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        color: #888;
            
        &:hover {
            color: #f02d26;
        }
    }
`

export const ContactInfo = styled.div`

`