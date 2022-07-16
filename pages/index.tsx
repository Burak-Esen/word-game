import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import { NextHead } from '@src/components/Head';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NextHead />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Woorden</a>
        </h1>

        <p className={styles.description}>
          Get started by select mode
        </p>

        <div className={styles.grid}>
          <Link href="/memory-cards" className={styles.card}>
            <a>
              <h2>Memory Cards</h2>
              <p>Basic memory cards to learn and remember words</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
