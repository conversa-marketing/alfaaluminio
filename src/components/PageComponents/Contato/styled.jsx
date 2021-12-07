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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const aName = styled.div``
