// app/page.tsx
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import Navbar from "../components/Navbar";

export default async function HomePage() {
  // Получаем список продуктов из базы данных
  const products = await prisma.product.findMany();

  return (
    <div className="pt-16 max-w-7xl mx-auto p-4">
      <Navbar/>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Список товаров</h1>

      {/* Сетка товаров */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600">Цена: {product.price} руб.</p>
            <Link href={`/product/${product.id}`}>
              <p className="text-blue-500 hover:underline mt-2 block">Подробнее</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

