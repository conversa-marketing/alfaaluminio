import styled from "styled-components";

export const ProductsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10vh;
`

export const ProdutosBanner = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    span {
        z-index: -1;
    }

    h1 {
        z-index: 3;
        color: var(--white);
        font-size: 2.5rem;
    }
`

export const ProductsContainer = styled.div`
    width: 100%;
    max-width: 1200px;

    h2 {
        font-size: 2.5rem;
        color: var(--blue-primary);
        margin-bottom: 1rem;
        margin-top: 4rem;
    }

    h2:not(:first-child)::before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #e3e3e3;
        margin-bottom: 3rem;
    }

    p {
        margin-bottom: 2rem;
        font-weight: 500;
    }
`

export const CategoryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`

export const CategoryItem = styled.a`
    background-color: #f5f5f5;
    min-width: 300px;
    border: 1px solid #dadada;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
        background-color: #f5f5f5;
        transform: scale(1.05);
        box-shadow: 0 0 25px -2px #11111139;
    }

    h3 {
        color: var(--blue-primary);
        margin-bottom: 1rem;
    }
`

export const CategoryImageWrapper = styled.div`
    width: 100%;
    position: relative;
    height: 250px;
`

export const CategoryContent = styled.div`
    padding: 20px;
`
