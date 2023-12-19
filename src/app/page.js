"use client";
import FilterBar from '@/components/FilterBar';
import styles from './page.module.css'
import RecipesList from '@/components/RecipesList';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export default function Home() {
  const client = new QueryClient();
  return (
    <main className={styles.main}>
      <QueryClientProvider client={ client }>
        <FilterBar />
        <RecipesList />
      </QueryClientProvider>
    </main>
  )
}
