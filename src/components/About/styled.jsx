import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10vh 0;
`

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 1200px;

    h2 {
        font-size: 2.6rem;
        margin-bottom: 3rem;
    }

    p {
        max-width: 600px;
        font-size: 1.6rem;
        line-height: 2.4rem;
    }
`