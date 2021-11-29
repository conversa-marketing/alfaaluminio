import styled from "styled-components";

export const ClientsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10vh 0;
`

export const ClientsTitle = styled.div`

    h2 {
        font-size: 2.6rem;
        color: var(--black);
        margin-bottom: 4rem;

        span {
            color: var(--red-primary);
        }
    }
`

export const LogosWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

export const LogoClient = styled.div`
    width: 160px;

    img {
        filter: grayscale(100%) opacity(0.7);
        transition: all 300ms ease-in; 
    }

    img:hover {
      filter: inherit;  
    }
`