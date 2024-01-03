"use client"
import React from 'react'
import { styled } from 'styled-components'
import { SeachInputWithIcon } from './SearchInput'
import { FavoritesIcon } from '../assets/icons/FavoritesIcon';
import { useFilter } from '@/hooks/useFilter';
import YummyLogo from '@/assets/icons/YummyLogo';
import { useRouter } from 'next/navigation';
import { Caveat } from 'next/font/google';

const caveat = Caveat({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
  })
const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;

    background-color: var(--bg-secondary);
    width: 100%;
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        > div {
            > svg {
                cursor: pointer;
                width: 32px;
                height: 32px;
    
                &:hover {
                    transform: scale(1.15);
                    transition: 0.5s;
                    z-index: 1;
                }
            }
        }
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        padding: 20px 160px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-size: 36px;
    font-weight: 800;
    line-height: 150%;
    cursor: pointer;

    display: flex;
    align-items: center;

    > svg {
        margin-right: 10px;
        width: 36px;
        height: 36px;
    }

    @media (min-width: 480px) {
        font-size: 42px;
        > svg {
            width: 42px;
            height: 42px;
        }
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        font-size: 48px;
        > svg {
            width: 48px;
            height: 48px;
        }
    }
`

function Header() {
    const { searchTerm, setSearchTerm }= useFilter();

    const handleChange = (value) => {
        setSearchTerm(value);
    }

    const router = useRouter();
    const handleNavigateHome = () => {
        router.push('/');
    }
    const handleNavigateFavorites = () => {
        router.push('/favorites');
    }
  return (
    <TagHeader>
        <Logo className={ caveat.className } onClick={ () => handleNavigateHome() }>
            <YummyLogo />
            yummy
        </Logo>
        <div>
            <SeachInputWithIcon handleChange={ handleChange } value={ searchTerm }/>
            <div onClick={ () => handleNavigateFavorites() } >
                <FavoritesIcon />
            </div>
        </div>
    </TagHeader>
  )
}

export default Header