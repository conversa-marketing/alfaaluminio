import styled from "styled-components";

export const HeroWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`

export const CarouselWrapper = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    padding: 20vh 0;

    h1 {
        max-width:900px;
        font-size: 3rem;
        color: var(--white);

        span {
            color: var(--red-primary);
        }
    }

    p {
        font-size: 1.2rem;
        max-width:600px;

        margin-top: 2rem;
        color: var(--white);
        font-weight: 500;
    }
`

export const HeroBgWrapper = styled.div`
    z-index: -1;
`