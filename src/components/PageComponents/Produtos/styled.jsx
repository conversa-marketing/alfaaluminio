import styled from "styled-components";

export const ProductWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10vh 0;
`

export const ProductsContainer = styled.div`
    width: 100%;
    max-width: 1200px;
`

export const LaminadosWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

export const LaminadosItem = styled.div`
    background-color: #ebebeb;
    padding: 20px;
    min-width: 300px;
    border: 1px solid #dadada;
    border-radius: 5px;

    h3 {
        color: var(--blue-primary);
        margin-bottom: 2rem;
    }
`

