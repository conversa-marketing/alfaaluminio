import styled from "styled-components";

export const HeroWrapper = styled.div`
    position: relative;
    padding-top: 10vh;
    display: flex;
    justify-content: center;
`

export const HeroCall = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    padding: 10vh 0 20vh 0;

    h1 {
        max-width:600px;
        font-size: 3.3rem;
        color: var(--white);

        span {
            color: var(--red-primary);
        }
    }

    p {
        font-size: 1rem;
        max-width:600px;

        margin-top: 2rem;
        color: var(--white);
        font-weight: 400;
    }
`

export const HeroBtn = styled.a`
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

export const HeroBgWrapper = styled.div`
    z-index: -1;
`