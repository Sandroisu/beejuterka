export default function handler(req, res) {
    // Фейковые данные для товаров
    const products = [
      { id: 1, name: "Кольцо", price: 500, description: "Серебряное кольцо с камнем." },
      { id: 2, name: "Браслет", price: 700, description: "Элегантный браслет из бисера." },
      { id: 3, name: "Серьги", price: 300, description: "Классические серьги с жемчугом." },
    ];
  
    res.status(200).json(products);
  }