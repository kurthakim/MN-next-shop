// Option 1b: fetch products on the server side (in getStaticProps)
// but with Incremental Static Regeneration(in getStaticProps)
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Title from '../components/Title';
import { getProducts, Product } from '../lib/products';
import ProductCard from '../components/ProductCard';

interface HomePageProps {
  products: Product[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  console.log(
    '🚀 ~ file: index-1.tsx ~ line 12 ~ constgetStaticProps:GetStaticProps<HomePageProps>= ~ HomePageProps'
  );
  const products = await getProducts();
  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS), // seconds
  };
};

const HomePage: React.FC<HomePageProps> = ({ products }) => {
  console.log('🚀 ~ file: index.tsx ~ line 8 ~ products', products);

  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
// grid grid-cols-1 lg:grid-cols-3 gap-4
export default HomePage;
