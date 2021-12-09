import styled from "styled-components";
import media from "styled-media-query"

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

    ${media.lessThan("large")`
        grid-template-columns: 1fr;
        max-width: 700px;
    `}

    ${media.lessThan("medium")`
        padding: 0 20px;
    `}

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
    min-height: 350px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #e5e5e5;
    position: relative;
`


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
    overflow: hidden;
    overflow-x: auto;

    ${media.lessThan("large")`
        padding: 5vh 20px;
    `}
`

export const TableCustom = styled.table`
    border-collapse: collapse;
    width: 100%;
    min-width: 900px;

    thead {
        background-color: var(--blue-primary);
        color: var(--white);
        font-size: .9rem;
        border: 1px solid var(--blue-primary);
    }

    td, th {
        padding: 1rem;
        text-align: center;
    }

    tbody {
        background-color: #00447d0f;
    }

    tbody td {
        border: 1px solid #00447d1c;
    }

    tbody > tr:nth-child(even) {
        background-color: #c0d6e9
    }
`