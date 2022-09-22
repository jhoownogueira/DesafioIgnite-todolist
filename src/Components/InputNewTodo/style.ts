import styled from "styled-components";

export const Form = styled.form`
    margin-top: -29px;
    width: 100%;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;

    input[type="text"] {
        margin-right: 12px;
        width: 100%;
        height: 58px;
        border-radius: 8px;
        padding: 16px;
        outline: 0;
        border: 1px solid var(--gray-700);
        background: var(--gray-500);
        color: var(--gray-100);
        &::placeholder {
            color: var(--gray-300);
        }
        &:focus {
            border: 1px solid var(--secondary-dark);
        }
    }
    button {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        max-width: 90px;
        height: 58px;
        border-radius: 8px;
        padding: 16px;
        background: var(--primary-dark);
        color: var(--white);
        transition: all 0.2s;
        &:hover {
            background: var(--primary);
        }
    }
`