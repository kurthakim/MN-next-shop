import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../lib/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border shadow w-80 hover:shadow-xl">
      <Link href={`/products/${product.id}`}>
        <a>
          <Image src={product.pictureUrl} alt="" width={320} height={240} />
          <div className="flex items-baseline justify-between p-2">
            <h2 className="text-lg font-bold">{product.title}</h2>
            <span>{product.price}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
