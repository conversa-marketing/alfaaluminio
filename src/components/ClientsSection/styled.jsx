import styled from "styled-components";
import media from "styled-media-query";

export const ClientsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10vh 0;
`

export const ClientsTitle = styled.div`

    display: flex;
    justify-content: center;

    h2 {
        font-size: 2.6rem;
        color: var(--black);
        margin-bottom: 4rem;
        text-align: center;

        span {
            color: var(--red-primary);
        }
    }
`

export const LogosWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: grid;
    justify-items: center;

    grid-template-columns: repeat(6, 1fr);

    ${media.lessThan("large")`
        grid-template-columns: repeat(3, 2fr);
    `}

    ${media.lessThan("small")`
        grid-template-columns: 1fr;
        grid-gap: 2rem;
    `}
`

export const LogoClient = styled.div`
    width: 160px;

    img {
        filter: grayscale(100%) opacity(0.7);
        transition: all 300ms ease-in;

        ${media.lessThan("small")`
            filter: grayscale(0%) opacity(1);
            transition: none;
        `}
    }

    img:hover {
      filter: inherit;  
    }
`