import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --gray-100: #F2F2F2;
        --gray-200: #D9D9D9;
        --gray-300: #808080;
        --gray-400: #333333;
        --gray-500: #262626;
        --gray-600: #1A1A1A;
        --gray-700: #0D0D0D;
        --white: #ffffff;

        --primary: #4EA8DE;
        --primary-dark: #1E6F9F;
        --secondary: #8284FA;
        --secondary-dark: #5E60CE;
        --danger: #E25858;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body {
        background: var(--gray-600);
    }

    body, textarea, input, button {
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Inter', sans-serif;
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