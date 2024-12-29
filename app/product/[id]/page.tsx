// app/product/[id]/page.tsx
import { notFound } from "next/navigation";

async function getProduct(id: string) {
  const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" });
  const products = await res.json();
  return products.find((p: any) => p.id === Number(id));
}

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound(); // Если товар не найден, показываем страницу 404
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>
      <p>Цена: {product.price} руб.</p>
      <p>{product.description}</p>
    </div>
  );
}
