import styled from "styled-components";

export const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5vh 0;
`

export const ProductHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    width: 100%;
    max-width: 1200px;

    h1 {
        font-size: 2.5rem;
        color: var(--blue-primary);
        margin-bottom: 2rem;
    }

    p {
        margin-bottom: 2rem;
        font-weight: 500;
        font-size: 1.2rem;
    }
`

export const ProductImageWrapper = styled.div`
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
`

export const ProductDescription = styled.div``

export const DescriptionBtn = styled.a`
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

export const TableWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    padding-top: 10vh;
`

export const TableCustom = styled.table`
    border-collapse: collapse;
    width: 100%;

    thead {
        background-color: var(--blue-primary);
        color: var(--white);
        font-size: .9rem;
    }

    td, th {
        padding: 1rem;
        text-align: center;
    }

    tr:nth-child(even) {
        background-color: #c0d6e9
    }
    
    tbody {
        border-right: 1p
    }
`