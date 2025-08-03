import { prisma } from "@/lib/prisma";
import Link from "next/link";


export default async function CartPage({ params }: { params: { cartId: string } }) {
    const { cartId } = params;
    const res = await prisma.cartItem.findMany({
        where: {
            cartId: cartId
        },
    })


    return (
        <div>
            <h1>Your Cart</h1>
            {res.length === 0 ? <p>Your cart is empty.</p> : res.map(
                (item: any) => (
                    <div key={item.id}>
                        <h2>{item.product.name}</h2>
                        <p>Price: {item.product.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                )
            )}
            <Link href="/products">Continue Shopping</Link>
        </div>
    );
};