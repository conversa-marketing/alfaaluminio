import styled from "styled-components";
import media from "styled-media-query";

export const ProductsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ProductsCall = styled.div`
    width: 500px;

    ${media.lessThan("large")`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    `}

    ${media.lessThan("small")`
        padding: 0 20px;
        box-sizing: border-box;
    `}
    
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
        font-weight: 500;
        font-size: 1.2rem;
    }
`

export const ProductBtn = styled.a`
    margin-top: 3rem;
    display: inline-flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 15px 30px;
    border-radius: 5px;
    background-color: var(--blue-primary);
    color: var(--white);
    transition: all 300ms ease-in-out;

    &:hover {
        background-color: var(--blue-primary);
    }
`

export const ProductsContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 10vh 0;
    display: flex;
    gap: 50px;

    ${media.lessThan("large")`
        flex-direction: column;
        max-width: 900px;
    `}
`

export const SliderWrapper = styled.div`
    width: 500px;
    flex: 1;

    ${media.lessThan("large")`
        width: 100%;
    `}
`

export const CarouselCard = styled.div`
    background-color: #f8f8f8;
    margin: 0 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
    min-height: 300px;
    overflow: hidden;
    cursor: grab;

    h3 {
        color: var(--black);
        font-size: 1.2rem;
        text-align: center;
    }
`

export const CarouselContent = styled.div`
    padding: 30px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const ImageHeading = styled.div`
    width: 100%;
    height: 190px;
    overflow: hidden;
    position: relative;
`