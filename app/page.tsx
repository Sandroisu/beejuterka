// app/page.tsx
import Link from "next/link";

async function getProducts() {
  // Загружаем данные с API
  const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Ошибка загрузки данных");
  }
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts(); // Получаем список товаров

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Навигационное меню */}
      <nav className="bg-blue-600 text-white p-4 fixed w-full z-10 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Магазин Бижутерии</h1>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <p className="hover:underline">Главная</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="hover:underline">О нас</p>
                </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="hover:underline">Контакты</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Контент страницы */}
      <div className="pt-16 max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Список товаров</h1>

        {/* Сетка товаров */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: any) => (
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
    </div>
  );
}
