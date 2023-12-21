"use client"
import BackBtn from '@/assets/icons/BackBtn';
import { useRouter } from 'next/navigation';
import React from 'react'
import styled from 'styled-components';


const BtnContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px

    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark);

    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
        width: 28px;
        height: 28px;
    }
`

function BackButton({ navigate }) {
  const router = useRouter();
  
  const handleNavigate = () => {
    router.push(navigate);
  }
  return (
    <BtnContainer onClick={handleNavigate}>
        <BackBtn />
        Home
    </BtnContainer>
  )
}

export default BackButton