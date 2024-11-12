import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold mb-4'>Disaster Recovery QLD</h1>
      <p className='text-xl mb-4'>Professional Disaster Recovery Services Across Queensland</p>
      <div className='flex gap-4'>
        <Link href='/contact' className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
          Contact Us
        </Link>
        <Link href='/services' className='border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50'>
          Our Services
        </Link>
      </div>
    </main>
  );
}
