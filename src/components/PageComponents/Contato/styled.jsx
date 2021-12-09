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

    h1 {
        color: var(--black);
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 1rem;
    }

    p {
        text-align: center;
        color: var(--black);
    }
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
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    margin: 0 0 2rem 0;

    h3, p {
        text-align: left;
    }

    ${media.lessThan("medium")`
        grid-template-columns: 1fr;
    `}
`

export const ContactInfo = styled.div`
    background-color: #f7f7f7;
    padding: 1rem;
    border-radius: 5px;
    border: 3px solid #e5e5e5;

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
        max-width: 600px;
        border: 3px solid #e5e5e5;

        ${media.lessThan("small")`
            padding: 10px;
            border: none;
        `}
    }
    
    form > label {
        font-size: .8rem;
        font-weight: 600;
        font-family: inherit;
        margin-bottom: .5rem;
    }

    form :nth-child(3) {
        display: none;
    }

    form > input, select {
        border: 1px solid #ccc;
        box-shadow: none;
        padding: 15px;
        margin-bottom: 10px;
        border-radius: 5px;
        font-family: inherit;
    }

    form > textarea {
        resize: none;
        height: 150px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-bottom: 30px;
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
        margin-top: 1rem;
    }
`

export const FiliaisWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
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
        text-align: center;
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
        align-self: center;
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
