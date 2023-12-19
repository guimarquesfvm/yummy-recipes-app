"use client";
import { SearchIcon } from "../assets/icons/SeachIcon";

const { styled } = require("styled-components");

export const SearchInput = styled.input`
    width: 100%;
    border-radius: 8px;
    padding: 16px 10px;
    border: none;

    background-color: var(--bg-primary);

    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-dark);
    cursor: text;

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        font-size: 14px;
        line-height: 22px;
    }
`

const InputContainer = styled.div`
    position: relative;
    width: 250px;

    svg {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        width: 352px
    }
`

export function SeachInputWithIcon({ handleChange }) {
    return (
        <InputContainer>
            <SearchInput placeholder='Qual receita está procurando?' onChange={ (e) => handleChange(e.target.value)} />
            <SearchIcon />
        </InputContainer>
    )
}
