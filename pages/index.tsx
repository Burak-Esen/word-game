import type { NextPage } from 'next';
import Link from 'next/link';

import { NextHead } from '@src/components/Head';
import { useAppSelector } from '@src/store/store';
import { Header } from '@src/views/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { user } = useAppSelector((state) => state);
  return (
    <div className={styles.container}>
      <NextHead />
      <Header hasLoginForm={!user.isLoggedIn} />

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
