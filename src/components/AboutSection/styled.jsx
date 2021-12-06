import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10vh 0;
`

export const AboutContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    max-width: 1200px;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        color: var(--black);
    }

    h2 > span {
        color: var(--red-primary);
    }

    p {
        max-width: 600px;
        margin-bottom: 2rem;
        line-height: 1.2;
        font-weight: 500;
        font-size: 1.2rem;
    }
`

export const AboutBtn = styled.a`
    padding: 12px 30px;

    background-color: var(--red-primary);
    color: var(--white);
    border-radius: 5px;
    transition: all 300ms ease-in-out;
    box-shadow: inherit;

    &:hover {
        background-color: var(--red-primary-hover);
    }
`