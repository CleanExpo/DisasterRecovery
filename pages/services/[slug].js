import { useRouter } from 'next/router';
import Head from 'next/head';

export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Head>
        <title>{`Water Damage Restoration Service in ${slug}`}</title>
        <meta name="description" content={`Best water damage restoration services in ${slug}`} />
      </Head>
      <h1>{slug}</h1>
      {/* Fetch and display service details based on slug */}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = await fetchData(`https://api.example.com/services/${params.slug}`);
  return {
    props: { data },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export async function getStaticPaths() {
  const paths = await fetchData('https://api.example.com/services');
  return {
    paths: paths.map(service => ({ params: { slug: service.slug } })),
    fallback: 'blocking',
  };
} 