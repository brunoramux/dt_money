import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${(props) => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    
`
export const HeaderButton = styled.button`
    display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.75rem 1.2rem;
        border-radius: 6px;
        
        background: ${(props) => props.theme["green-500"]};
        
        &:hover {
            background: ${(props) => props.theme["green-300"]};
            transition: background-color 0.5s;
        }
        

        border: none;
        font-size: 1rem;
        line-height: 1.6;
        font-weight: 700;
        color: ${(props) => props.theme.white};
        cursor: pointer;
        
`