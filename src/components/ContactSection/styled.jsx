import styled from "styled-components";
import media from "styled-media-query";

export const ContactWrapper = styled.div`
    position: relative;
    padding: 10vh 0;
    display: flex;
    justify-content: center;
`

export const ContactBgWrapper = styled.div`
    z-index: -1;
`

export const ContactContent = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1200px;

    ${media.lessThan("large")`
        max-width: 900px;
        padding: 20px;
    `}

    ${media.lessThan("medium")`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
    `}

    h2 {
        font-size: 2.5rem;
        color: var(--white);
        margin-bottom: 2rem;
    }

    h2 > span {
        color: var(--red-primary);
    }

    p {
        color: var(--white);
        max-width: 600px;
        font-weight: 500;
        font-size: 1.2rem;
    }
`

export const ContactBtn = styled.a`
    margin-top: 3rem;
    display: inline-flex;
    padding: 15px 30px;
    border-radius: 5px;
    background-color: var(--red-primary);
    color: var(--white);
    transition: all 300ms ease-in-out;

    &:hover {
        background-color: var(--red-primary);
    }
`
