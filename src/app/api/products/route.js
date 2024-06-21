
import { woocommerce } from '../utils';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    try {
        const response = await woocommerce.get('products', {
            per_page: 42, 
            category: category || undefined,
        });
        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.error(new Error(error.message));
    }
}
