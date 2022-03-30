// Option 1b: fetch products on the server side (in getStaticProps)
// but with Incremental Static Regeneration(in getStaticProps)
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Title from '../components/Title';
import { getProducts, Product } from '../lib/products';

interface HomePageProps {
  products: Product[];
}

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  console.log(
    '🚀 ~ file: index-1.tsx ~ line 12 ~ constgetServerSideProps:GetServerSideProps<HomePageProps>= ~ HomePageProps'
  );
  const products = await getProducts();
  return {
    props: { products },
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
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default HomePage;
