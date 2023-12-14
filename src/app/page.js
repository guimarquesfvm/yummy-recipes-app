import FilterBar from '@/components/FilterBar';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
    </main>
  )
}
