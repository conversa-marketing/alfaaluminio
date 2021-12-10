import styled from "styled-components";
import media from "styled-media-query";

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
    min-height: 400px;

    ${media.lessThan("large")`
        max-width: 900px;
    `}

    ${media.lessThan("medium")`
        max-width: 500px;
        padding: 10vh 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 20px;
    `}

    h1 {
        max-width:900px;
        font-size: 3rem;
        color: var(--white);

        span {
            color: var(--red-primary);
        }

        ${media.lessThan("large")`
            font-size: 2rem;
        `}
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