'use client';

import { useState } from 'react';

export default function ProductView({ product }: { product: any }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert('Товар добавлен в корзину!');
    setCount(count + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
        <img
          src="https://via.placeholder.com/300x300?text=Товар"
          alt={product.name}
          className="w-64 h-64 object-cover rounded-md"
        />
      </div>

      <div className="flex-grow">
        <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-xl text-gray-700 mt-2">Цена: {product.price} руб.</p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          {product.description || 'Нет описания товара.'}
        </p>
        <button
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          onClick={handleClick}
        >
          Добавить в корзину
        </button>
        <p className="mt-2 text-gray-500">Количество нажатий: {count}</p>
      </div>
    </div>
  );
}