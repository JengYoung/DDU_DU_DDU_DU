import Head from 'next/head';
import Image from 'next/image';
import { Noto_Sans_KR } from 'next/font/google';
import styles from '#/styles/Home.module.css';

const inter = Noto_Sans_KR({ weight: ['400', '700'], subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}></main>
    </>
  );
}
