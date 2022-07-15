import type { NextPage } from 'next';
import Image from 'next/image';
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
          <a href="/memory-cards" className={styles.card}>
            <h2>Memory Cards</h2>
            <p>Basic memory cards to learn and remember words</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
