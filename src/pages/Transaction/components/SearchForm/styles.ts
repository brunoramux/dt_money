import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border-radius: 6px;
        background: ${(props) => props.theme["gray-900"]};
        color: ${(props) => props.theme["gray-300"]};
        padding: 1rem;
        border: 0;

        &::placeholder {
            color: ${(props) => props.theme["gray-500"]};
        }
    };

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;

        border: 0;
        padding: 1rem;
        background: transparent;
        border: 1px solid ${(props) => props.theme["green-300"]};

        color: ${(props) => props.theme["green-300"]};
        font-weight: bold;
        border-radius: 6px;

        &:hover {
            background: ${(props) => props.theme["green-500"]};
            border: 1px solid ${(props) => props.theme["green-500"]};

            color: ${(props) => props.theme.white};

            transition: background 0.2s;
            transition: color 0.2s;
        }
        cursor: pointer;

    }
`