import styled from "styled-components";
import media from "styled-media-query";

export const EmpresaWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10vh;

    h1 {
        font-size: 2.5rem;
    }
`

export const EmpresaBanner = styled.section`
    position: relative;
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 10px;

    ${media.lessThan("medium")`
        height: 300px;
    `}

    span {
        z-index: -1;
    }

    h1 {
        z-index: 1;
        font-size: 2.5rem;
        color: var(--white);
    }
`

export const EmpresaContent = styled.main`
    width: 100%;
    max-width: 1200px;
    padding-top: 10vh;

    ${media.lessThan("large")`
        max-width: 700px;
    `}

    ${media.lessThan("medium")`
        max-width: 500px;
        padding: 20px;
    `}

    h1 {
        font-size: 2.5rem;
        color: var(--blue-primary);
        margin-bottom: 2rem;

        ${media.lessThan("large")`
            font-size: 2rem;
        `}
    }

    p {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    ul {
        display: grid;
        grid-gap: 50px;
        margin-top: 3rem;
        grid-template-columns: repeat(3, 1fr);

         ${media.lessThan("medium")`
            grid-template-columns: 1fr;
         `}
    }

    ul li {
        margin-bottom: 3rem;
        font-size: 1.2rem;
        font-weight: 500;
        padding: 2rem;
        border-radius: 5px;
        color: var(--white);
        background: var(--blue-primary);
        position: relative;
    }

    ul li::before {
        content: "";
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10px;
        height: 10px;
        font-size: 2rem;
        vertical-align: middle;
        background-color: var(--red-primary);
        position: absolute;
        top: -10px;
        left: 2rem;
        border-radius: 50%;
        border: 5px solid var(--blue-primary);
    }
`

export const EmpresaContato = styled.a`
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