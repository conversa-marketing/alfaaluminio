import styled from "styled-components";

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

    h1 {
        font-size: 2.5rem;
        color: var(--blue-primary);
        margin-bottom: 2rem;
    }

    p {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1rem;
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