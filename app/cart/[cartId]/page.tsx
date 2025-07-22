import { prisma } from "@/lib/prisma";
import Link from "next/link";


export default async function CartPage({ params }: { params: { cartId: string } }) {
    const { cartId } = params;
    const res = await fetch('http://localhost:3000/api/cart', {
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error('Failed to fetch cart data');
    }
    const cartItems = await res.json();
    return (
        <div>
            <h1>Your Cart</h1>
            <p>Your cart is empty.</p>
            <Link href="/products">Continue Shopping</Link>
        </div>
    );
};