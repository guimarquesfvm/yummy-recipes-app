"use client"
import React from 'react'
import styled from 'styled-components';

export const DefaultPageLayout = styled.div`
    padding: 12px 24px;
    min-height: 100vh;
    background-color: white;

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        padding: 34px 100px;
    }
`