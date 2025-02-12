import ProductView from './ProductVIew';
import { notFound } from "next/navigation";
import { prisma } from '@/lib/prisma';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await prisma.product.findUnique({
    where: {
      id: params.id, // Преобразуем id в число, если ваш ID числовой
    },
  });

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <div className="max-w-7xl mx-auto p-4">
        <ProductView product={product} />
      </div>
    </div>
  );
}
