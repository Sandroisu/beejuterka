import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    const cart = await prisma.cart.findFirst({
        where: {
            userId: "dsfsdf"
        }
    });
    return NextResponse.json(cart);
}
