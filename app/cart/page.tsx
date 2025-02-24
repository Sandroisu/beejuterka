import Link from "next/link";

export default async function CartPage() {
    const res = await fetch('http://localhost:3000/api/products', {
        // Можно указать { cache: 'no-store' }, если нужно всегда свежие данные
    });
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const products = await res.json();
    return (
        <div>
            <h1>Your Cart</h1>
            <p>Your cart is empty.</p>
            <Link href="/products">Continue Shopping</Link>
        </div>
    );
};