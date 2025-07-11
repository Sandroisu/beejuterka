import Link from "next/link";
export default async function ProductsPage() {
  const res = await fetch('http://localhost:3001/api/products', {
  });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const products = await res.json();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Продукты</h1>
      <ul>
        {products.map((p: any) => (
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
