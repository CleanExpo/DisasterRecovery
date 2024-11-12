import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my Next.js app!" />
      </Head>
      <main>
        <h1>Welcome to My Next.js App</h1>
        <p>This is the homepage.</p>
        <Link href="/about">Go to About Page</Link>
      </main>
    </div>
  );
} 