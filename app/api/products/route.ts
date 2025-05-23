// app/api/products/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products, {
    status: 200,
    headers: { 'accept-language': `ru` },
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  const newProduct = await prisma.product.create({ data });
  return NextResponse.json(newProduct, { status: 201 });
}
