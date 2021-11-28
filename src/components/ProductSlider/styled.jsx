import styled from "styled-components";

export const ProductsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ProductsCall = styled.div`
    width: 500px;
    
    h2 {
        color: var(--black);
        font-size: 2.6rem;
        margin-bottom: 2rem;

        span {
            display: block;
            color: var(--blue-primary);
        }
    }

    p {
        color: var(--black);
        max-width: 500px;
    }
`

export const ProductBtn = styled.a`
    margin-top: 3rem;
    display: inline-flex;
    padding: 15px 30px;
    border-radius: 15px;
    background-color: var(--blue-primary);
    color: var(--white);
    box-shadow: 0px 0px 44px 10px #00447d5c;
    transition: all 300ms ease-in-out;

    &:hover {
        box-shadow: 0px 0px 54px -10px #00457d28;
    }
`

export const ProductsContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 10vh 0;
    display: flex;
    gap: 50px;
`

export const SliderWrapper = styled.div`
    width: 500px;
    flex: 1;

    div > ul {
        gap: 30px;
    }

`

export const CarouselInner = styled.div`
    width: 500px;
`

export const CarouselCard = styled.div`
    background-color: #f8f8f8;
    padding: 30px;
    border-radius: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    min-height: 300px;
    border: 2px solid #ebebeb;
`

export const IconHeading = styled.div`
    width: 60px;
    height: 60px;
    background-color: var(--red-primary);
    border-radius: 50px;
    overflow: hidden;
`