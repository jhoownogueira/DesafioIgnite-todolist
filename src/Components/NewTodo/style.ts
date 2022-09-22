import styled from "styled-components";

export const Form = styled.form`
    margin-top: -29px;
    width: 100%;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
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

export const TaskTable = styled.section`
    margin-top: 64px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    header {
        margin-bottom: 24px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
            strong {
                color: var(--primary);
                margin-right: 8px;
            }
            span {
                height: 20px;
                padding: 2px 8px;
                border-radius: 999px;
                color: var(--white);
                background: var(--gray-400);
            }
        }
        .right {
            display: flex;

            strong {
                color: var(--secondary);
                margin-right: 8px;
            }
            .tag {
                display: flex;
                align-items: center;
                height: 20px;
                padding: 8px 8px;
                border-radius: 999px;
                color: var(--white);
                background: var(--gray-400);
            }
        }
    }
    section {
        width: 100%;
        height: auto;
    }

`
interface Taskprops {
    concluida: boolean;
}

export const Task = styled.li<Taskprops>`

            width: 100%;
            height: 72px;
            background: var(--gray-500);
            border: 1px solid var(--gray-400);
            border-radius: 8px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            &:not(:last-child) {
                margin-bottom: 12px;
            }

            .checkbox {
                width: 10%;
                input[type="checkbox"] {
                position: absolute;
                width: 0;
                height: 0;
                    & + label {
                        position: relative;
                        cursor: pointer;
                        padding: 0;
                        left: 20px;
                    }
                    & + label:before {
                        content: '';
                        margin-right: 10px;
                        display: inline-block;
                        vertical-align: text-top;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        border: 2px solid var(--primary);
                        background: transparent;
                        transition: all 0.3s;
                    }
                    &:hover + label:before {
                        background: var(--secondary);
                        border: 1px solid var(--secondary);
                    }

                    &:checked + label:before {
                      background: var(--secondary);
                      border: 1px solid var(--secondary);
                    }
                    &:checked + label:after {
                      content: '';
                      position: absolute;
                      left: 6px;
                      top: 10px;
                      background: white;
                      width: 2px;
                      height: 2px;
                      box-shadow: 
                        2px 0 0 white,
                        4px 0 0 white,
                        4px -2px 0 white,
                        4px -4px 0 white,
                        4px -6px 0 white,
                        4px -8px 0 white;
                      transform: rotate(45deg);
                    }
                }
                
            }

            p {
                width: 80%;
                color: ${props => props.concluida ? "#808080" : "#ffffff"};
                font-size: 0.875rem;
                text-decoration: ${props => props.concluida ? 'line-through' : 'unseat'};
            }

            svg {
                width: 10%;
                color: var(--gray-300);
            }
    
`