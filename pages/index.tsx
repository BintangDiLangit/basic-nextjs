import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/profile.png" width={200} height={200} alt="profile" />
      <h1 className={styles['title-homepage']}>Welcome Prawito</h1>
    </Layout>
  );
}
