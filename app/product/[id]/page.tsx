import ProductView from './ProductVIew';
import { notFound } from "next/navigation";

export default async function ProductDetails({ params }: { params: { id: string } }) {
  // Загрузим данные с сервера
  const product = await getProduct(params.id);
  if (!product) {
    notFound();
  }

  async function getProduct(id: string) {
    const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Ошибка загрузки данных");
    }
    const products = await res.json();
    return products.find((p: any) => p.id === Number(id));
  }

  // Рендерим клиентский компонент
  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <div className="max-w-7xl mx-auto p-4">
        <ProductView product={product} />
      </div>
    </div>
  );
}