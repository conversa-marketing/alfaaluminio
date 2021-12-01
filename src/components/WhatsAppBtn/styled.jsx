import styled from "styled-components";

export const WhatsWrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 30px;
    z-index: 999;

    a {
        display: flex;
        padding: 10px;
        border-radius: 50px;
        background-color: #25d366;
        transition: all 0.3s ease-in-out;
    }

    a:hover {
        background-color: #4de685;
    }

    a > svg {
        fill: #fff;
    }
`
