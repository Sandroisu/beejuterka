
import { notFound } from "next/navigation";

async function getProduct(id: string) {
  const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Ошибка загрузки данных");
  }
  const products = await res.json();
  return products.find((p: any) => p.id === Number(id));
}

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  // Если товар не найден — отправляем на 404
  if (!product) {
    notFound();
  }

  // Пример дополнительных данных — предположим, в будущем будет галерея, описание и т.д.
  // Пока что берём только то, что возвращает наш API.
  const { name, price, description } = product;

  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <div className="max-w-7xl mx-auto p-4">
        {/* Шапка страницы (или можно использовать отдельный компонент) */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Страница товара</h1>
        </header>

        {/* Карточка товара */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row">
          {/* Изображение товара — пока заменяем на заглушку или можем взять реально, если есть */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              src="https://via.placeholder.com/300x300?text=Товар"
              alt={name}
              className="w-64 h-64 object-cover rounded-md"
            />
          </div>

          {/* Описание товара */}
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            <p className="text-xl text-gray-700 mt-2">Цена: {price} руб.</p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {description || "Нет описания товара."}
            </p>

            {/* Кнопка "Добавить в корзину" или "Купить" */}
            <button
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}