import { prisma } from "@/lib/prisma";
import Link from "next/link";


export default async function CartPage({ params }: { params: { cartId: string } }) {
    const { cartId } = params;
    const res = await prisma.cart.findUnique({
        where: {
            id: cartId
        }
    })


    return (
        <div>
            <h1>Your Cart</h1>
            {res === null ? : <p>Your cart is empty.</p>}
            <Link href="/products">Continue Shopping</Link>
        </div>
    );
};