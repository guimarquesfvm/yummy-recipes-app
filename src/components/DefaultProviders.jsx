"use client";
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MealsProvider } from '@/context/MealsContext';
import { ThemeProvider } from 'styled-components';

function DefaultProviders({ children }) {
    const queryClient = new QueryClient();
    const theme = {
        desktopBreakpoint: '968px',
        desktopFiltersBreakpoint: '768px',
    }
  return (
    <QueryClientProvider client={ queryClient }>
        <MealsProvider>
            <ThemeProvider theme={ theme }>
                {children}
            </ThemeProvider>
        </MealsProvider>
    </QueryClientProvider>
  )
}

export default DefaultProviders