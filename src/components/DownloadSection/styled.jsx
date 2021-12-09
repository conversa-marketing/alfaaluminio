import styled from 'styled-components';

export const DownloadSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 5vh 0 6vh 0;
    width: 100%;
`

export const BackgroundWrapper = styled.div`
    z-index: -1;
`

export const DownloadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    padding: 0 20px;
    gap: 20px;
    z-index: 1;

    h2 {
        font-size: 2.5rem;
        color: var(--white);

        span {
            color: var(--red-primary);
        }
    }

    p {
        color: var(--white);
    }

    form :nth-child(3) {
        display: none;
    }

    label {
        font-size: .8rem;
        font-weight: 600;
        color: var(--white);
    }

    input {
        height: 40px;
        width: 100%;
        border: 1px solid #ccc;
        outline: none;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 10px;
        font-family: inherit;
        color: #333;
        font-weight: 500;
    }

    form :last-child {
        background-color: var(--red-primary);
        border: none;
        color: var(--white);
        font-family: inherit;
        cursor: pointer;
        margin: 20px 0 0;
    }


`