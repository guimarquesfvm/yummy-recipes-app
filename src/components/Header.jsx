"use client"
import React from 'react'
import { styled } from 'styled-components'
import { SeachInputWithIcon } from './SearchInput'
import { ProfileIcon } from '../assets/icons/ProfileIcon';
import { useFilter } from '@/hooks/useFilter';


const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
    background-color: var(--bg-secondary);

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        > svg {
            cursor: pointer;
        }
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-size: 40px;
    font-weight: 800;
    line-height: 150%;
`

function Header() {
    const { searchTerm, setSearchTerm }= useFilter();

    const handleChange = (value) => {
        setSearchTerm(value);
    }
  return (
    <TagHeader>
        <Logo>Yummy!</Logo>
        <div>
            <SeachInputWithIcon handleChange={ handleChange } value={ searchTerm }/>
            <ProfileIcon />
        </div>
    </TagHeader>
  )
}

export default Header