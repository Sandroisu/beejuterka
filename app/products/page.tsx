import Link from "next/link";
import { prisma } from '@/lib/prisma';
export default async function ProductsPage() {
  const res = await fetch('http://localhost:3000/api/products', {
    // Можно указать { cache: 'no-store' }, если нужно всегда свежие данные
  });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const products = await res.json();
  const productsFromPrisma = await prisma.product.findMany()
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Продукты</h1>
      <ul>
        {productsFromPrisma.map((p: any) => (
          <li key={p.id}>
            <Link href={`/product/${p.id}`}>
              <p>{p.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
