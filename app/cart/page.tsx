import Link from "next/link";

const CartPage = () => {
    return (
        <div>
            <h1>Your Cart</h1>
            <p>Your cart is empty.</p>
            <Link href="/products">Continue Shopping</Link>
        </div>
    );
};

export default CartPage;