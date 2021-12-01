import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background-color: var(--blue-primary);
    padding: 5vh 0 0 0;
    display: flex;
    justify-content: center;
`

export const FooterContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    grid-template-areas: "Logo Links Contato"
                         "Copyright Copyright Copyright";
    row-gap: 30px;
    align-items: flex-start;
`

export const FooterLogo = styled.div`
    grid-area: Logo;
    max-width: 200px;
`

export const FooterLinks = styled.nav`
    grid-area: Links;

    ul {
        display: flex;
        justify-content: center;
        gap: 30px;
    }

    ul > li {
        color: var(--white);
        transition: all 100ms ease-in;
    }

    ul > li:hover {
        color: var(--red-primary);
    }
`

export const FooterContact = styled.div`
    grid-area: Contato;
    justify-self: end;
    
    ul {
        display: flex;
        gap: 30px;
        justify-content: end;
    }

    ul > li > a {
        display: flex;
        background-color: #0A599B;
        padding: 7px;
        border-radius: 7px;
        transition: all 300ms ease-in
    }

    ul > li > a:hover {
        background-color: #1267ae;
    }

    ul > li > a > svg {
        fill: var(--white);
    }

    p {
        font-size: .8rem;
        color: var(--white);
        text-align: end;
        margin-top: 1rem;
        max-width: 300px;
    }
`

export const FooterCopy = styled.div`
    padding: 2vh 0;
    border-top: 1px solid #0A599B;
    grid-area: Copyright;

    p {
        color: var(--white);
        font-size: .9rem;
        text-align: center;
    }

    p > span > a {
        text-decoration: underline;
        transition: all 100ms ease-in;
    }

    p > span > a:hover {
        color: var(--red-primary);
    }
`
