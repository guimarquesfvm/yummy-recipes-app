"use client"
import React from 'react'
import { styled } from 'styled-components'
import { SeachInputWithIcon } from './SearchInput'
import { ProfileIcon } from './ProfileIcon';


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
  return (
    <TagHeader>
        <Logo>Yummy!</Logo>
        <div>
            <SeachInputWithIcon />
            <ProfileIcon />
        </div>
    </TagHeader>
  )
}

export default Header