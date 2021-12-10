import styled from "styled-components";
import media from "styled-media-query";

export const FooterWrapper = styled.footer`
    background-color: var(--blue-primary);
    padding: 5vh 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.lessThan("small")`
        padding: 5vh 20px;
    `}
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

    ${media.lessThan("large")`
        display: flex;
        flex-direction: column;
        max-width: 900px;
        justify-content: center;
        align-items: center;
    `}
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

        ${media.lessThan("small")`
            flex-direction: column;
            text-align: center;
        `}
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

    ${media.lessThan("large")`
        justify-self: center;
    `}
    
    ul {
        display: flex;
        gap: 30px;
        justify-content: end;

        ${media.lessThan("large")`
            justify-content: center;
        `}
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

        ${media.lessThan("large")`
            text-align: center;
        `}
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

export const FiliaisWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-bottom: 30px;

    ${media.lessThan("large")`
        display: flex;
        flex-direction: column;
        max-width: 900px;
        justify-content: center;
        align-items: center;
    `}
`

export const FiliaisHeading = styled.div`

    h4 {
        font-size: .9rem;
        font-weight: 500;
        margin-bottom: 5px;
        color: var(--white);
    }
`

export const FiliaisContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;

    ${media.lessThan("small")`
        justify-content: center;
        align-items: center;
        text-align: center;
    `}
`

export const FiliaisItems = styled.div`


    h4 {
        color: var(--white);
        font-size: .9rem;
        font-weight: 500;
    }

    a {
        color: var(--white);
        font-size: .8rem;
        font-weight: 500;
        padding: 5px;
        background-color: var(--blue-primary-hover);
        border-radius: 5px;
        margin-top: 5px;
        display: inline-block;
    }
`