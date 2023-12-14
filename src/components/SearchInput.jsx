"use client";
import { SearchIcon } from "../assets/icons/SeachIcon";

const { styled } = require("styled-components");

export const SearchInput = styled.input`
    width: 352px;
    border-radius: 8px;
    padding: 16px 10px;
    border: none;

    background-color: var(--bg-primary);

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
    cursor: text;
`

const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
`

export function SeachInputWithIcon() {
    return (
        <InputContainer>
            <SearchInput placeholder='Qual receita está procurando?'/>
            <SearchIcon />
        </InputContainer>
    )
}
