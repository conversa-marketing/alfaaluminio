import styled from "styled-components";

export const ContactWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContactContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`

export const ContactHeading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: var(--black);
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 1rem;
    }

    p {
        text-align: center;
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

export const aName = styled.div``
