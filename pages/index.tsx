import type { NextPage } from 'next'
import Layout from '../components/Layout/index';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <Image src="/profile.png" width={200} height={200} alt="profile"/>
        <h1>Welcome Bintangmfhd</h1>
      </Layout>
  )
}

export default Home
