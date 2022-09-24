import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {

        --header: #E2E6EE;
        --background: #F2F2F2;
        --white: #ffffff;
        --text: #2E2E48;
        --text-light: rgba(46, 46, 72, 0.5); 
        --liner-color: linear-gradient(90deg, #A478E8 0%, #516CF7 100%);
        --primary: #516CF7;
        --secondary: #A478E8;
        --border-task: #E1E7FE;
        --danger: #E87878;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body {
        background: var(--background);
    }

    body, textarea, input, button {
        font-size: 1rem;
        font-weight: 400;
        font-family: 'DM Sans', sans-serif;
    }

    button {
        cursor: pointer;
        border: 1px solid transparent;
        background: transparent;
    }

`

interface GridSystemProps {
    direction: 'rows' | 'column';
    justify: string;
    items: string;
}

export const GridSystem = styled.div<GridSystemProps>`
    width: 100%;
    max-width: 768px;
    padding: 0 16px;
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.items};

`