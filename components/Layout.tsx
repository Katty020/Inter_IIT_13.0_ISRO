// components/Layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';
import styles from './Layout.module.css';
import SolarSystem from './SolarSystem';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ISRO-Lunar Map Project</title>
        <meta name="description" content="Lunar Map Project using XRF data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SolarSystem />
      <header className={styles.header}>
        <h1>ISRO - Lunar Map Project - Inter-IIT</h1>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; 2024 - Inter IIT- Lunar Map Project</p>
      </footer>
    </div>
  );
};

export default Layout;