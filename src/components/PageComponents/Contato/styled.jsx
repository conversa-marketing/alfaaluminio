import styled from "styled-components";
import media from "styled-media-query"

export const ContactWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContactBanner = styled.div`
    width: 100%;
    height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    
    ${media.lessThan("medium")`
        height: 300px;
    `}

    span {
        z-index: -1;
    }

    h1 {
        color: var(--white);
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 1rem;
        z-index: 1;
    }

    p {
        text-align: center;
        z-index: 1;
        color: var(--white);
    }
`

export const ContactContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;

    ${media.lessThan("medium")`
        max-width: 900px;
        padding: 20px;
    `}
`

export const IframeWrapper = styled.div`
    width: 100%;

    iframe {
        height: 400px;
        width: 100%;
        border: none;
        margin: 0;
    }
`

export const ContactHeading = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    margin: 2rem 0;

    ${media.lessThan("medium")`
        grid-template-columns: 1fr;
    `}
`

export const ContactInfo = styled.div`
    background-color: #f7f7f7;
    padding: 2rem;
    border-radius: 5px;

    ${media.lessThan("small")`
        padding: 1rem;
    `}

    h3 {
        font-size: 1.5rem;
        color: var(--blue-primary);
        margin-bottom: 1rem;
    }

    p {
        font-weight: 500;
    }
`

export const FormInfo = styled.div`
    margin-top: 2rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    
    form {
        display: flex;
        flex-direction: column;
        padding: 30px;
        background-color: #f7f7f7;
        border-radius: 10px;
        width: 100%;
        gap: 30px;
        max-width: 600px;
    }

    form > input {
        border: 1px solid #ccc;
        outline: 0;
        box-shadow: none;
        padding: 15px;
        border-radius: 5px;
        font-family: inherit;
    }

    form > textarea {
        resize: none;
        height: 150px;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 15px;
        font-family: inherit;
    }

    form > button {
        padding: 15px;
        border-radius: 5px;
        border: 0;
        background-color: var(--red-primary);
        color: var(--white);
        font-family: inherit;
        cursor: pointer;
    }
`

export const FiliaisHeading = styled.div`
    margin-bottom: 2rem;

    h3 {
        font-size: 2rem;
        color: var(--blue-primary);
        text-align: center;
    }
`

export const FiliaisWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 4rem;
    grid-gap: 30px;

    ${media.lessThan("medium")`
        grid-template-columns: 1fr 1fr;
    `}
    
    ${media.lessThan("small")`
        grid-template-columns: 1fr;
        text-align: center;
    `}
`


export const FiliaisItem = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: flex-start;

    ${media.lessThan("small")`
        align-items: center;
    `}


    h3 {
        color: var(--red-primary);
        margin-bottom: 1rem;
    }

    p {
        font-weight: 500;
        margin-bottom: 1rem;
        flex: 1;
    }

    a {
        background-color: #f7f7f7;
        padding: 10px;
        display: flex;
        font-size: .8rem;
        align-self: start;
        border-radius: 5px;
        font-weight: 500;
        border: 1px solid var(--blue-primary);
        transition: all .3s ease;

        span {
            margin-right: 10px;
        }

        &:hover {
            background-color: var(--blue-primary);
            color: var(--white);
        }

        ${media.lessThan("small")`
            align-self: center;
        `}
    }
`
