// app/api/categories/route.js
import { woocommerce } from '../utils';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await woocommerce.get('products/categories');
        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.error(new Error(error.message));
    }
}
